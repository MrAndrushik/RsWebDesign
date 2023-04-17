import { Button } from '@components/UI/Button/Button';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { ServicesList } from '@components/modules/ServicesList/ServicesList';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Services.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/const';

interface ServicesProps {
    className?: string;
}

export const Services = ({ className }: ServicesProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.Services, {}, [className, 'section'])}>
            <div className={cls.block}>
                <div className={cls.content}>
                    <Subtitle style={{ color: '#fff', background: '#005DDF' }}>{t('services')}</Subtitle>
                    <h2 className='title'>{t('services-title')}</h2>
                    <p className={`${cls.text} text`}>{t('services-text')}</p>
                </div>
                <ServicesList />
                <Button as={Link} to={ROUTES.SERVICES_ROUTE} className='services'>
                    {t('all-services')}
                </Button>
            </div>
        </section>
    );
};
