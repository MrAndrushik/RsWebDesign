import { Layout } from '@components/layout/Layout';
import ErrorPage from '@pages/Error/ErrorPage';
import { ROUTES } from '@utils/const';
import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

type NewRouteObject = RouteObject & { path: typeof ROUTES[keyof typeof ROUTES] };

const MainPage = React.lazy(() => import('@pages/MainPage'));
const AboutPage = React.lazy(() => import('@pages/AboutPage'));
const AnalysisPage = React.lazy(() => import('@pages/AnalysisPage'));
const DesignPage = React.lazy(() => import('@pages/DesignPage'));
const MobileDevelopmentPage = React.lazy(() => import('@pages/MobileDevelopmentPage'));
const WebDevelopmentPage = React.lazy(() => import('@pages/WebDevelopmentPage'));
const ContactPage = React.lazy(() => import('@pages/ContactPage'));
const ProjectsPage = React.lazy(() => import('@pages/ProjectsPage'));
const CurrentProjectPage = React.lazy(() => import('@pages/CurrentProjectPage'));
const ServicesPage = React.lazy(() => import('@pages/ServicesPage'));
const PrivacyPage = React.lazy(() => import('@pages/Privacy/PrivacyPage'));
const TermsPage = React.lazy(() => import('@pages/Privacy/TermsPage'));

const routerObj: NewRouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage type='fullScreen' />,

        children: [
            {
                path: ROUTES.MAIN_ROUTE,
                element: <MainPage />,
            },
            {
                path: ROUTES.ABOUT_ROUTE,
                element: <AboutPage />,
            },
            {
                path: ROUTES.ANALYSIS_ROUTE,
                element: <AnalysisPage />,
            },
            {
                path: ROUTES.DESIGN_ROUTE,
                element: <DesignPage />,
            },
            {
                path: ROUTES.MOBILE_DEVELOPMENT_ROUTE,
                element: <MobileDevelopmentPage />,
            },
            {
                path: ROUTES.WEB_DEVELOPMENT_ROUTE,
                element: <WebDevelopmentPage />,
            },
            {
                path: ROUTES.SERVICES_ROUTE,
                element: <ServicesPage />,
            },
            {
                path: ROUTES.CONTACT_ROUTE,
                element: <ContactPage />,
            },
            {
                path: ROUTES.PROJECTS_ROUTE,
                element: <ProjectsPage />,
            },
            {
                path: ROUTES.CURRENT_PROJECT_ROUTE,
                element: <CurrentProjectPage />,
                errorElement: <ErrorPage type='withHeader' />,
            },
            {
                path: ROUTES.PRIVACY_ROUTE,
                element: <PrivacyPage />,
            },
            {
                path: ROUTES.TERMS_ROUTE,
                element: <TermsPage />,
            },
        ],
    },
];

export const router = createBrowserRouter(routerObj);
