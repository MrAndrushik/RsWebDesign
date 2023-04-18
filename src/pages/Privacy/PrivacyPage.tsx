import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './PrivacyPage.module.scss';

export default function PrivacyPage() {
    const { t } = useTranslation('privacy');

    return (
        <section className={cn(cls.PrivacyPage, {}, ['section'])}>
            <div className={cls.block}>
                <h1 className='title'>{t('privacy-policy')}</h1>
                <p className='text'>{t('privacy-text')}</p>
            </div>
        </section>
    );
}
