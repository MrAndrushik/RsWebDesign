import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ServicesTop.module.scss';
import { ServicesList } from '@components/modules/ServicesList/ServicesList';

interface ServicesTopProps {
    className?: string;
}

export const ServicesTop = ({ className }: ServicesTopProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ServicesTop, {}, [className, 'section'])}>
            <div className={cls.block}>
                <div className={cls.content}>
                    <h1 className='title'>{t('services')}</h1>
                    <p className={'text'}>{t('services-top-description')}</p>
                </div>
                <ServicesList />
            </div>
        </section>
    );
};
