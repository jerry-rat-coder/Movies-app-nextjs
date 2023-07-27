import { signOut, getSession} from "next-auth/react"
import { NextPageContext } from "next"

import useMoviesList from "@/hooks/useMoviesList";

import NavBar from "@/components/NavBar";
import MoviesList from "@/components/MoviesList";
import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";


export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanant: false
      }
    }
  }

  return {
    props: {}
  }

}

export default function Home() {

  const {data: movies = [] } = useMoviesList();

  const {data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();


  return (
   <>
    <InfoModal visible={isOpen} onClose={closeModal} />
    <NavBar />
    <Billboard />
    <div className="pb-40">
      <MoviesList title="Trending Now" data={movies} />
      <MoviesList title="MyList" data={favorites} />
    </div>

   </>
  )
}
