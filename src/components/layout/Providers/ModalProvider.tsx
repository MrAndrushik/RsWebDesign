import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const defaultValue: ModalContextType = {
    isOpen: false,
    setIsOpen: (value: boolean) => {
        return value;
    },
};

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext<ModalContextType>(defaultValue);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};
