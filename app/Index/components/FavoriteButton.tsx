'use client'
import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'

import { AiOutlinePlus, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import useCurrentUser from '@/app/hooks/useCurrentUser'
import useFavorites from '@/app/hooks/useFavorites'


type FavoriteButtonProps = {
    movieId: string
}

const FavoriteButton = ({
    movieId
} : FavoriteButtonProps) => {

    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate: mutateUser} = useCurrentUser();
    const [isHovered, setIsHovered] = useState(false);

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavorite = useCallback(async () => {
        let response;

        if(isFavorite){
            response = await axios.delete('/api/favorite', { data: {
                movieId
            } });
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutateUser({
            ...currentUser,
            favoriteIds: updatedFavoriteIds,
        })

        mutateFavorites();
    }, [isFavorite, movieId, currentUser, mutateUser, mutateFavorites]);


    const Icon = !isFavorite ?  AiOutlinePlus : isHovered ? AiOutlineClose : AiOutlineCheck ;


    return ( 
        <div 
        onClick={() => {
            toggleFavorite();
        }}
        className='
        cursor-pointer 
        rounded-full 
        border-2 border-white hover:border-neutral-300 
        w-6 h-6 
        lg:w-10 lg:h-10 
        group/item 
        flex justify-center items-center transition
        '>
            <Icon 
            onMouseEnter={() => {setIsHovered(true)}} 
            onMouseLeave={() => {setIsHovered(false)}}
            size={25} 
            className='text-white' />
        </div>
     );
}
 
export default FavoriteButton;