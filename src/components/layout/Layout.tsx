import React, { ReactNode, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
const ModalForm = React.lazy(() => import('./Modal/ModalForm/ModalForm'));

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    return (
        <>
            <Header />
            <ModalForm />
            {children}
            <Outlet />
            <Footer />
        </>
    );
};
