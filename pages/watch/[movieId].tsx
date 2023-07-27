import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from "next/router";


const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;


    const { data } = useMovie(movieId as string);


    return ( 
        <div className="w-screen h-screen bg-black">
            <nav className="
            fixed 
            z-10 
            w-full 
            p-4 
            flex 
            flex-row 
            items-center 
            gap-8 
            bg-black 
            bg-opacity-80
            ">
                <AiOutlineArrowLeft className="text-white w-4 lg:w-10 hover:opacity-80 cursor-pointer transition" size={40} onClick={() => router.push('/')} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching:
                    </span>
                    { data?.title }
                </p>
            </nav>
            <video 
            autoPlay
            controls
            src={data?.videoUrl}
            className="w-full h-full"
            >

            </video>

        </div>
     );
}
 
export default Watch;