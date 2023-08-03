import { create } from "zustand";

export interface ModalStoreInterface {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}


const useInfoModal = create<ModalStoreInterface>((set) => ({
    movie: undefined,
    isOpen: false,
    openModal: (movieId: string) => { set({isOpen: true, movieId }) },
    closeModal: () => set({isOpen: false})
}))

export default useInfoModal;