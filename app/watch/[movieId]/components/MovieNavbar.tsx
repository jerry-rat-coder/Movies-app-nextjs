'use client'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
type MovieNavbarProps = {
    title?: string
}

const MovieNavbar = ({
    title
}:MovieNavbarProps) => {
    const router = useRouter();
    const session = useSession();
    // console.log('session状态', session?.status);
    return ( 
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
                    { title }
                </p>
            </nav>
     );
}
 
export default MovieNavbar;