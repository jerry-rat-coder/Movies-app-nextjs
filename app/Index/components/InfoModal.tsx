'use client'

import { AiOutlineClose } from 'react-icons/ai'
import FavoriteButton from './FavoriteButton';
import PlayButton from './PlayButton';

import useInfoModal from '@/app/hooks/useInfoModal';
import useMovie from '@/app/hooks/useMovie';
import { useCallback, useEffect, useState } from 'react'
const InfoModal = () => {
    const { movieId, isOpen, closeModal } = useInfoModal();

    const [ isVisible, setIsVisible ] = useState(!!isOpen);

    
    const { data } = useMovie(movieId);

    useEffect(() => {
        setIsVisible(!!isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setIsVisible(false);

        setTimeout(() => {
            closeModal();
        }, 300);
    }, [closeModal])

    if(!isOpen){
        return null;
    }

    return ( 
        <div
        className='
        z-50 
        transition 
        duration-300 
        bg-black 
        bg-opacity-80 
        flex justify-center items-center 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0
        '
        >
            {/* <div className='w-40 h-40 flex justify-center items-center bg-sky-500 rounded-full'>

            </div> */}
            <div
            className='
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
            '>
                <div className={
                    `${isVisible ? 'scale-100' : 'scale-0'}
                    transform 
                    duration-300 
                    relative 
                    flex-auto 
                    bg-zinc-900 
                    drop-shadow-md
                    `
                }>
                    <div className='relative h-96'>
                        <video 
                        className='w-full h-full brightness-[60%] object-cover'
                        poster={data?.thumbnailUrl}
                        src={data?.videoUrl}
                        autoPlay
                        muted
                        loop
                        >
                        </video>
                        <div
                        onClick={handleClose}
                        className=' cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex justify-center items-center group'
                        >
                            <AiOutlineClose size={20} className=' text-white group-hover:text-neutral-300 transition' /> 
                        </div>
                        <div className=' absolute bottom-[10%] left-10 '>
                            <p className='text-white text-3xl md:text-4xl lg:text-5xl h-full font-bold mb-8'>
                                {data?.title}
                            </p>
                            <div className='flex flex-row gap-4 items-center'>
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>

                        </div>
                    </div>
                    <div className='px-12 py-8'>
                        <div className='flex flex-row gap-2 mb-8 items-center'>
                            <p className='text-green-400 font-semibold text-lg'> 
                                New
                            </p>
                            <p className='text-white text-lg'>
                                {data?.duration}
                            </p>
                            <p className='text-white text-lg'>
                                {data?.genre}
                            </p>
                        </div>
                        <p className='text-white text-lg'>
                            {data?.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default InfoModal;
