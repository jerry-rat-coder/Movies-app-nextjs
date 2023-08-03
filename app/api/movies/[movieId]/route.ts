import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prismadb from '@/app/libs/prismadb'
type IParams = {
    movieId?: string;
}

export async function GET(req:Request, { params }:{ params:IParams }) {
    const currentUser = await getCurrentUser();

    if(!currentUser || !currentUser?.id){
        return new NextResponse('Unauthorized', { status:400 });
    }
    try {
        
        const { movieId } = params;
        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        return NextResponse.json(movie);

    } catch (error) {
        return new NextResponse('Internal Error', { status:500 });
    }
}