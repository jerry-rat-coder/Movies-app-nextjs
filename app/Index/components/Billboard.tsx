'use client'
import React, {useCallback} from 'react'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import PlayButton from './PlayButton';

import useBillboard from '@/app/hooks/useBillboard';
import useInfoModal from '@/app/hooks/useInfoModal';

type BillBoardProps = {
    data: Record<string, any>
}

const Billboard = () => {
    const { data } = useBillboard();
    const { openModal } = useInfoModal();
    const handleOpen = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);


    return ( 
    <div className='w-full relative h-[56.25vw]'>
        <video
        className='
         w-full
         h-[56.25vw]
         brightness-[60%]
         object-cover
        '
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        muted
        loop
        autoPlay
        >
        </video>
        <div className=' absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
            <p className='
            text-white 
            text-xl 
            md:text-5xl 
            h-full 
            w-[50%] 
            lg:text-6xl 
            font-bold 
            drop-shadow-xl
            '>
                {data?.title}
            </p>
            <p className='
             text-white
             text-[8px] md:text-lg
             mt-3 md:mt-8
             w-[90%] md:w-[80%] lg:w-[50%]
             drop-shadow-xl
            '>
                {data?.description}
            </p>
           <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
            <PlayButton movieId={data?.id} />
           <button
           onClick={() => {handleOpen()}}
            className='
            bg-white
            text-white
            bg-opacity-30
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto 
            text-xl md:text-lg 
            font-semibold 
            flex 
            items-center 
            hover:bg-opacity-20 
            transition
            '
            >
                <AiOutlineInfoCircle className='mr-1' />
                More Info
            </button>
           </div>
        </div>
    </div> 
    );
}
 
export default Billboard;