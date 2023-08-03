'use client'
import useFavorites from "../hooks/useFavorites";
import useMoviesList from "../hooks/useMoviesList";

import MoviesList from "./components/MoviesList";

const Index = () => {
    const {data: movies = [] } = useMoviesList();

    const {data: favorites = [] } = useFavorites();
    return ( 
        <div className="pb-40">
            <MoviesList title="Trending Now!" data={movies} />
            <MoviesList title="My List" data={favorites} />
        </div>
     );
}
 
export default Index;