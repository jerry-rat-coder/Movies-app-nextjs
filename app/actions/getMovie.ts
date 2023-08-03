import prismadb from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser';
const getMovie = async ( movieId: string ) => {
    const currentUser = await getCurrentUser();

    if(!currentUser || !currentUser?.id){
        return null;
    }
    try {
        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
    
        return movie;
    } catch (error:any) {
        return null;
    }
}
 
export default getMovie;