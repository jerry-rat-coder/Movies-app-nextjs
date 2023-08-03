'use client'

import {BsFillPlayFill} from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/navigation';
import useInfoModal from '@/app/hooks/useInfoModal';

type MovieCardProps = {
    data: Record<string, any>
}

const MovieCard = ({data}: MovieCardProps) => {
    const router = useRouter();
    const { openModal } = useInfoModal();
    return ( 
        <div className="group bg-zinc-900 col-span  relative h-[12vw]">
            <img 
            onClick={() => {router.push(`/watch/${data?.id}`)}}
            className="
            cursor-pointer
            object-cover
            transition
            duration-0 
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-300
            w-full
            h-[12vw]
            "
            src={data.thumbnailUrl} 
            alt="Thumbnail"
            />
            <div className=" 
            opacity-0
            absolute
            top-0 z-10 
            transition 
            duration-200 
            delay-300 
            invisible 
            sm:visible 
            w-full 
            scale-0 
            group-hover:scale-110 
            group-hover:translate-x-[2vw] 
            group-hover:-translate-y-[6vw] 
            group-hover:opacity-100">
                <img className="
                duration 
                cursor-pointer 
                rounded-t-md 
                object-cover 
                transition 
                w-full 
                h-[12vw] 
                shadow-xl
                "
                src={data.thumbnailUrl} alt="Thumbnail" />
                <div className="z-10 
                bg-zinc-800 
                p-2 lg:p-4 
                absolute 
                w-full 
                transition 
                shadow-md 
                rounded-b-md
                ">
                    <div className="flex flex-row gap-3 items-center">
                        <div 
                        className="
                        flex justify-center items-center 
                        bg-white hover:bg-neutral-300 
                        rounded-full 
                        transition 
                        cursor-pointer 
                        w-6 h-6 
                        lg:w-10 lg:h-10
                        "
                        onClick={() => {router.push(`/watch/${data?.id}`)}}>
                            <BsFillPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={data.id} />
                        <div className='
                        cursor-pointer 
                        ml-auto 
                        group/item 
                        rounded-full 
                        border-2 border-white 
                        hover:border-neutral-300 
                        w-6 h-6 
                        lg:w-10 lg:h-10 
                        flex 
                        justify-center 
                        items-center'>
                            <BiChevronDown 
                            onClick={() => {openModal(data?.id)}}
                            size={30} 
                            className='text-white group-hover/item:text-neutral-300 w-4 lg:w-6'/>
                        </div> 
                    </div>
                    <p className='text-green-400 font-semibold mt-4'>
                            New <span className='text-white'>2023</span>
                    </p>

                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
                    </div>
                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                    </div>
                </div>
            
            </div>
        </div>

     );
}
 
export default MovieCard;