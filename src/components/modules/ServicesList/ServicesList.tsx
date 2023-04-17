import cn from 'classnames';
import cls from './ServicesList.module.scss';
import { Button } from '@components/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/const';

interface ServicesListProps {
    className?: string;
}

export const ServicesList = ({ className }: ServicesListProps) => {
    const { t } = useTranslation();
    const servicesData = useMemo(
        () => [
            {
                title: t('pre-project-analysis'),
                description: t('pre-project-analysis-description'),
                link: ROUTES.ANALYSIS_ROUTE,
            },
            { title: t('design'), description: t('design-description'), link: ROUTES.DESIGN_ROUTE },
            {
                title: t('mobile-development'),
                description: t('mobile-development-description'),
                link: ROUTES.MOBILE_DEVELOPMENT_ROUTE,
            },
            {
                title: t('web-development'),
                description: t('web-development-description'),
                link: ROUTES.WEB_DEVELOPMENT_ROUTE,
            },
        ],
        [t]
    );

    return (
        <div className={cn(cls.ServicesList, {}, [className])}>
            {servicesData.map((service) => (
                <div key={service.link} className={cls.service}>
                    <div className={cls.content}>
                        <h3 className={cls.title}>{service.title}</h3>
                        <p className={cls.description}>{service.description}</p>
                    </div>
                    <Button as={Link} to={service.link} className='serviceList'>
                        {t('more')}
                    </Button>
                </div>
            ))}
        </div>
    );
};
