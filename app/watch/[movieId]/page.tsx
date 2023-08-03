
import getMovie from "@/app/actions/getMovie";

import MovieNavbar from "./components/MovieNavbar";
import MoviePlayer from "./components/MoviePlayer";
type IParams = {
    movieId: string
}

const movieId = async ({ params }: { params: IParams }) => {
    const {movieId} = params;
    const movie = await getMovie(movieId);
    return ( 
        <div className="w-screen h-screen bg-black">
            <MovieNavbar  title={movie?.title as string} />
            <MoviePlayer videoUrl={movie?.videoUrl} />
        </div>
     );
}
 
export default movieId;