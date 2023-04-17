import Logo from '@assets/img/logo.svg';
import { ROUTES } from '@utils/const';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';
import cn from 'classnames';
import { Button } from '@components/UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useMobile } from '@hooks/useMobile';
import { useModal } from '@hooks/useModal';

export const Header = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    const { setIsOpen: openModal } = useModal();
    const [isOpen, setIsOpen] = useState(false);

    interface HeaderLinks {
        link: typeof ROUTES[keyof typeof ROUTES];
        text: string;
    }

    const handleClose = () => {
        setIsOpen(false);
    };

    const headerLinks: HeaderLinks[] = useMemo(
        () => [
            {
                link: ROUTES.MAIN_ROUTE,
                text: t('main-page'),
            },
            {
                link: ROUTES.ABOUT_ROUTE,
                text: t('about-us'),
            },
            {
                link: ROUTES.PROJECTS_ROUTE,
                text: t('our-projects'),
            },
            {
                link: ROUTES.SERVICES_ROUTE,
                text: t('services'),
            },
            {
                link: ROUTES.CONTACT_ROUTE,
                text: t('contacts'),
            },
        ],
        [t]
    );

    const mobileHeaderLinks: HeaderLinks[] = useMemo(
        () => [
            {
                link: ROUTES.PRIVACY_ROUTE,
                text: t('privacy-policy'),
            },
            {
                link: ROUTES.TERMS_ROUTE,
                text: t('terms-of-service'),
            },
        ],
        [t]
    );

    const location = useLocation();

    return (
        <>
            <header
                className={cn(cls.container, {
                    // [cls.containerOpenModal]: isModalOpen,
                })}
            >
                <div className={cls.block}>
                    <Link to={ROUTES.MAIN_ROUTE}>
                        <img loading='lazy' src={Logo} alt='RocketSoft' />
                    </Link>
                    {isMobile && (
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className={cn(cls.burger, {
                                [cls.burgerActive]: isOpen,
                            })}
                        >
                            <div className={cls.burgerLine}></div>
                            <div className={cls.burgerLine}></div>
                            <div className={cls.burgerLine}></div>
                        </button>
                    )}
                    <nav
                        className={cn(cls.nav, {
                            [cls.navActive]: isOpen,
                        })}
                    >
                        <ul className={cls.list}>
                            {headerLinks.map((item) => (
                                <li key={item.link} className={cls.item}>
                                    <Link
                                        onClick={() => handleClose()}
                                        className={cn(cls.link, {
                                            [cls.activeLink]: location.pathname === item.link,
                                        })}
                                        to={item.link}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            {isMobile &&
                                mobileHeaderLinks.map((item) => (
                                    <li key={item.link} className={`${cls.item} ${cls.itemMobile}`}>
                                        <Link
                                            onClick={() => handleClose()}
                                            className={cn(cls.link, {
                                                [cls.activeLink]: location.pathname === item.link,
                                            })}
                                            to={item.link}
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                        <Button onClick={() => openModal(true)} className='header'>
                            {t('send-request')}
                        </Button>
                    </nav>
                </div>
            </header>
            <div className={cls.mockHeader}></div>
        </>
    );
};
