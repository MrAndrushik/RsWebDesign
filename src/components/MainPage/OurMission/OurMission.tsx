import { Button } from '@components/UI/Button/Button';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { useModal } from '@hooks/useModal';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './OurMission.module.scss';

interface OurMissionProps {
    className?: string;
}

export const OurMission = ({ className }: OurMissionProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={cn(cls.OurMission, {}, [className, 'section'])}>
            <div className={cls.block}>
                <Subtitle style={{ background: '#00DFCE', color: '#fff' }}>{t('our-mission')}</Subtitle>
                <h2 className={`title`}>
                    {t('our-mission-title')} <br /> <span className={cls.span}>{t('our-mission-title-span')}</span>
                </h2>
                <p className={`${cls.text} text`}>{t('our-mission-text')}</p>
                <Button onClick={() => setIsOpen(true)} className='ourMission'>
                    {t('contact-with-us')}
                </Button>
            </div>
        </section>
    );
};
