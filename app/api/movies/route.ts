import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prismadb from '@/app/libs/prismadb'
export async function GET() {
    try {
        const user = await getCurrentUser();
        
        if(!user || !user?.id){
            return new NextResponse('Unauthorized', { status:500 });
        }
        
        const movies = await prismadb.movie.findMany();

        return NextResponse.json(movies);
        
    } catch (error) {
        return new NextResponse('Internal Error', { status:500 });
    }
}