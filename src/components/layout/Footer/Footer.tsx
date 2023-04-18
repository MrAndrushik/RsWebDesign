import Logo from '@assets/img/footer-logo.svg';
import { ROUTES } from '@utils/const';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cls from './Footer.module.scss';
import { FooterForm } from './FooterForm/FooterForm';

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
                        <img loading='lazy' src={Logo} alt='RocketSoft' />
                        <div className={cls.contactData}>
                            <a className={cls.email} href={'mailto:email@email.com'}>
                                email@rs.com
                            </a>
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
                                <Link className={cls.link} to={ROUTES.ABOUT_ROUTE}>
                                    {t('about-us')}
                                </Link>
                            </li>
                            <li className={cls.navigationItem}>
                                <Link className={cls.link} to={ROUTES.PROJECTS_ROUTE}>
                                    {t('our-projects')}
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
                        <FooterForm />
                    </div>
                </div>
                <p className={cls.company}>
                    © {t('rocketsoft')} {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
