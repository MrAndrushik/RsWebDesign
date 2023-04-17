import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './AboutTop.module.scss';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import AboutImg from '@assets/img/about-bg-2.png';

interface AboutTopProps {
    className?: string;
}

export const AboutTop = ({ className }: AboutTopProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.AboutTop, {}, [className])}>
            <div className={cls.block}>
                <div className={cls.content}>
                    <Subtitle style={{ background: '#D66300', color: '#FFFFFF' }}>{t('about-us')}</Subtitle>
                    <h1 className={`${cls.title} title`}>{t('rocketsoft')}</h1>
                    <p className={`${cls.text} text`}>{t('about-us-text')}</p>
                </div>
                <img loading='lazy' className={cls.img} src={AboutImg} alt='about-presentation' />
            </div>
        </section>
    );
};
