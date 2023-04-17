import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './Contacts.module.scss';
import { Button } from '@components/UI/Button/Button';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { useModal } from '@hooks/useModal';

interface ContactsProps {
    className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={cn(cls.Contacts, {}, [className, 'section'])}>
            <div className={cls.container}>
                <div className={cls.contentColumn}>
                    <h2 className={`${cls.title} title`}>
                        {t('contact-title')} <span className={cls.span}>{t('contact-span')}</span>
                    </h2>
                    <p className={`${cls.text} text`}>{t('contact-text')}</p>
                    <Button onClick={() => setIsOpen(true)} className='contactsBtn'>
                        {t('send-request')}
                    </Button>
                </div>
                <div className={cls.contactColumns}>
                    <Subtitle style={{ background: '#00DFCE', color: '#fff' }}>{t('contacts')}</Subtitle>
                    <div className={cls.contactBlock}>
                        <div className={cls.contactData}>
                            <p className={cls.caption}>E-mail</p>
                            <p className='text'>email@rs.com</p>
                        </div>
                        <div className={cls.contactData}>
                            <p className={cls.caption}>{t('address')}</p>
                            <p className='text'>{t('contact-adress')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
