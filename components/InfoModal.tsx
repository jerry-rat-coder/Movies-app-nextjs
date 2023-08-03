import  { AiOutlineClose } from 'react-icons/ai'
import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';

import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import { useState, useEffect, useCallback } from 'react'

type InfoModalProps = {
    visible?: boolean;
    onClose: any;
};

const InfoModal = ({ visible, onClose }:InfoModalProps) => {
    const [isVisible, setIsVisible] = useState(!!visible); //仅控制动画

    const { movieId } = useInfoModal();
    const { data = [] } = useMovie(movieId);

    useEffect(() => {
      setIsVisible(!!visible);
    }, [visible]);
    
    const handleClose = useCallback(() => {
        setIsVisible(false);

        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if(!visible){
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

// 在这个React组件中，延迟启动 onClose 是为了达到动画效果的需求。 isVisible 状态被用于控制一个转换动画，当 isVisible 为 true，组件呈现出现的动画，而当 isVisible 为 false，组件呈现消失的动画。

// 然而，这个动画并不是瞬间完成的，而是需要一定的时间，这个时间在这个组件中被设定为300毫秒（duration-300）。

// 如果不使用 setTimeout 来延迟 onClose 的调用，那么 isOpen 将会立即被设为 false，此时的 InfoModal 也会立即从DOM中移除。这意味着即使你的 isVisible 状态变为 false，你也无法看到消失的动画，因为 InfoModal 已经被移除了。

// 通过使用 setTimeout 来延迟 onClose 的调用，你可以在 isVisible 状态变为 false 后，给出足够的时间让消失的动画播放完成，然后再将 isOpen 设置为 false，移除 InfoModal。这样你就可以看到一个完整的消失动画了。

// 值得注意的是，如果你在其他地方依赖于 isOpen 状态，你需要确保这个延迟的时间（这里是300毫秒）不会对你的其他逻辑产生负面影响。如果有可能的话，最好是让 isOpen 和 isVisible 同时改变，以避免不必要的复杂性和混乱。