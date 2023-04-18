import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './Contacts.module.scss';
import { Button } from '@components/UI/Button/Button';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { useModal } from '@hooks/useModal';
import { ElementType } from 'react';
import { Text } from '@components/UI/Text/Text';

interface ContactsProps {
    className?: string;
    titleTag?: ElementType;
}

export const Contacts = ({ className, titleTag = 'h2' }: ContactsProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={cn(cls.Contacts, {}, [className, 'section'])}>
            <div className={cls.container}>
                <div className={cls.contentColumn}>
                    <Text as={titleTag} className={`${cls.title} title`}>
                        {t('contact-title')} <span className={cls.span}>{t('contact-span')}</span>
                    </Text>
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
                            <a className={cls.email} href={'mailto:email@email.com'}>
                                email@rs.com
                            </a>
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
