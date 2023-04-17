import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './AboutProfile.module.scss';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';

interface AboutProfileProps {
    className?: string;
}

export const AboutProfile = ({ className }: AboutProfileProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.AboutProfile, {}, [className, 'section'])}>
            <div className={cls.block}>
                <Subtitle style={{ background: '#005DDF', color: '#fff' }}>{t('our-profile')}</Subtitle>
                <h2 className='title'>{t('our-profile-title')}</h2>
                <p className='text'>{t('our-profile-text')}</p>
            </div>
        </section>
    );
};
