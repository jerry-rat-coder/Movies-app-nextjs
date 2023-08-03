import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prismadb from '@/app/libs/prismadb'
export async function GET() {
    try {
        const currentUser = await getCurrentUser();
        
        if(!currentUser || !currentUser?.id){
            return new NextResponse('Unauthorized', { status:500 });
        }
        
        const movies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds
                }
            }
        });

        return NextResponse.json(movies);
        
    } catch (error) {
        return new NextResponse('Internal Error', { status:500 });
    }
}