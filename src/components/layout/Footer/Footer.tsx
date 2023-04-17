import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './Footer.module.scss';
import Logo from '@assets/img/footer-logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/const';
import { Input } from '@components/UI/Input/Input';
import { Button } from '@components/UI/Button/Button';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { t } = useTranslation();

    return (
        <footer className={cn(cls.Footer, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.wrapper}>
                    <div className={cls.column1}>
                        <img src={Logo} alt='RocketSoft' />
                        <div className={cls.contactData}>
                            <p>email@rs.com</p>
                            <p>Россия, г. Москва ул. Производственная 11/8</p>
                        </div>
                    </div>
                    <nav className={cls.column2}>
                        <p className={cls.caption}>{t('navigation')}</p>
                        <ul className={cls.navigationList}>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.MAIN_ROUTE}>
                                    {t('main-page')}
                                </Link>
                            </li>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.PROJECTS_ROUTE}>
                                    {t('portfolio')}
                                </Link>
                            </li>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.SERVICES_ROUTE}>
                                    {t('services')}
                                </Link>
                            </li>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.CONTACT_ROUTE}>
                                    {t('contacts')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className={cls.column3}>
                        <p className={cls.caption}>{t('maintenance')}</p>
                        <ul className={cls.navigationList}>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.PRIVACY_ROUTE}>
                                    {t('privacy-policy')}
                                </Link>
                            </li>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.TERMS_ROUTE}>
                                    {t('terms-of-service')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={cls.column4}>
                        <p className={cls.caption}>{t('connect-with-us')}</p>
                        <form className={cls.form}>
                            <div className={cls.inputsBlock}>
                                <label>
                                    <p className={cls.inputText}>{t('name')}</p>
                                    <Input type='light' placeholder={t('name')!} required />
                                </label>
                                <label>
                                    <p className={cls.inputText}>e-mail</p>
                                    <Input type='light' placeholder={t('name')!} required />
                                </label>
                            </div>
                            <Button className='footerBtn'>{t('send')}</Button>
                        </form>
                    </div>
                </div>
                <p className={cls.company}>
                    © {t('rocketsoft')} {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
