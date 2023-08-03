import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prismadb from "@/app/libs/prismadb";

export async function GET() {
  try {
    const currentUser = await getCurrentUser();
    // const body = await request.json();
    // const {
    //   userId,
    //   isGroup,
    //   members,
    //   name
    // } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 400 });
    }

    const movieCount = await prismadb.movie.count();

    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await prismadb.movie.findMany({
        take: 1,
        skip: randomIndex
    })

    return NextResponse.json(randomMovies[0]);

  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}