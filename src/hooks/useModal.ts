import { ModalContext } from '@components/layout/Providers/ModalProvider';
import { useContext } from 'react';

export const useModal = () => {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return { isOpen, setIsOpen };
};
