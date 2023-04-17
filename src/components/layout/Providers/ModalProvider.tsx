import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};
