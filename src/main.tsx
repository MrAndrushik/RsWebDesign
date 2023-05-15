import { Spinner } from '@components/UI/Spinner/Spinner';
import { ModalProvider } from '@components/layout/Providers/ModalProvider';
import { ProjectsProvider } from '@components/layout/Providers/ProjectsProvider';
import { router } from '@utils/router';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './config/i18n/i18n';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner type='absolute' />}>
      <ProjectsProvider>
        <ModalProvider>
          <RouterProvider router={router} fallbackElement={<Spinner type='absolute' />} />
        </ModalProvider>
      </ProjectsProvider>
    </Suspense>
  </React.StrictMode>
);
