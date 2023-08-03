// import serverAuth from "@/lib/serverAuth";
// import { NextApiRequest, NextApiResponse } from "next";
// import prismadb from '@/lib/prismadb'

import getCurrentUser from "./getCurrentUser";
import prismadb from '@/app/libs/prismadb'


const getRandom = async () => {
    const currentUser = await getCurrentUser();
    
    if(!currentUser?.id){
        return null;
    } 
    try {
        // await serverAuth(req, res);

        const movieCount = await prismadb.movie.count();

        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        })

        return randomMovies[0];


    } catch (error:any) {
        return null;
    }

}

export default getRandom;