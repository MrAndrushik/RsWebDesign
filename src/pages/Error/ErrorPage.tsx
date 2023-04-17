import { Button } from '@components/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { Link, useRouteError } from 'react-router-dom';
import cls from './ErrorPage.module.scss';
import { ROUTES } from '@utils/const';
import cn from 'classnames';

type ErrorResponse = {
    data?: unknown;
    status: number;
    statusText: string;
    message?: string;
};

interface ErrorPageProps {
    type: 'fullScreen' | 'withHeader';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorCheck = (error: any): error is ErrorResponse => {
    return 'status' in error && 'statusText' in error;
};

export default function ErrorPage({ type }: ErrorPageProps) {
    const error = useRouteError();
    const { t } = useTranslation();

    if (errorCheck(error)) {
        return (
            <div
                className={cn(cls.error, {
                    [cls.errorFullScreen]: type === 'fullScreen',
                    [cls.errorWithHeader]: type === 'withHeader',
                })}
            >
                <div className={cls.block}>
                    <h1 className={'title'}>Oops! Page not found</h1>
                    <p className={'text'}>Sorry the route you are looking for does not exist.</p>
                    <p className={cls.errorText}>{`${error.statusText} - ${error.status}`}</p>
                    <Button className='errorPage' as={Link} to={ROUTES.MAIN_ROUTE}>
                        {t('back-to-main')}
                    </Button>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}
