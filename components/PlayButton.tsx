import { useRouter } from 'next/router';
import { BsPlayBtnFill } from 'react-icons/bs'

type PlayButtonProps = {
    movieId: string;
}

const PlayButton = ({ movieId } : PlayButtonProps) => {
    const router = useRouter();
    return ( 
        <button
        onClick={() => {
            router.push(`/watch/${movieId}`);
        }}
        className="
        bg-white hover:bg-neutral-300 
        px-2 lg:px-4 
        py-1 lg:py-2 
        text-xs lg:text-lg 
        rounded-md 
        w-auto 
        flex flex-row items-center  
        transition 
        font-semibold
        cursor-pointer
        "
        >
            <BsPlayBtnFill size={25} className='mr-1' />
            Play 
        </button>
     );
}
 
export default PlayButton;