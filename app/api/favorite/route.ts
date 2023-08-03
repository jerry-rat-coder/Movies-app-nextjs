import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prismadb from '@/app/libs/prismadb';
import { without } from "lodash";
export async function POST(
    req:Request,
) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const body = await req.json();
        const { movieId } = body;

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        })

        if(!existingMovie){
            return new NextResponse('Invalid ID', { status:404 });
        }

        const user = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: {
                    push: movieId,
                }
            }
        })

        return NextResponse.json(user);

    } catch (error) {
        console.log(error, 'ERROR_MESSAGES')
        return new NextResponse('Error', { status: 500 });
    }
    
}

export async function DELETE( req:Request) {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser || !currentUser?.id){
            return new NextResponse('Unauthorized', { status:400 });
        }

        const body = await req.json();
        const { movieId } = body;

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if(!existingMovie){
            return new NextResponse('Invalid ID', { status:404 });
        }

        const favoriteIds = currentUser.favoriteIds;
        const updatedFavoriteIds = without(favoriteIds, movieId);

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser?.email || ''
            },
            data: {
                favoriteIds: updatedFavoriteIds
            }
        })

        return NextResponse.json(updatedUser);
    } catch (error) {
        return new NextResponse('Internar Error', { status:500 });
        
    }
}