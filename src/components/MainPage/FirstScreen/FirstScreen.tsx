import { Button } from '@components/UI/Button/Button';

import { useTranslation } from 'react-i18next';
import cls from './FirstScreen.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/const';
import { useModal } from '@hooks/useModal';

interface FirstScreenProps {
    className?: string;
}

export const FirstScreen = ({ className }: FirstScreenProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={`${cls.section}`}>
            <div className={cls.block}>
                <h1 className={cls.title}>
                    {t('main-title-1')} <span className={cls.span}>{t('main-title-span-1')}</span> {t('main-title-2')}{' '}
                    <span className={cls.span}>{t('main-title-span-2')}</span>
                </h1>
                <div className={cls.buttons}>
                    <Button as={Link} to={ROUTES.PROJECTS_ROUTE} className='mainProjects'>
                        {t('move-to-projects')}
                    </Button>
                    <Button onClick={() => setIsOpen(true)} className='mainRequest'>
                        {t('send-request')}
                    </Button>
                </div>
            </div>
        </section>
    );
};
