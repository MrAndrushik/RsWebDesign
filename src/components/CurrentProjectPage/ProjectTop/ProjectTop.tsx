import { ReactComponent as AppStore } from '@assets/icons/appstore.svg';
import cn from 'classnames';
import { ProjectType } from 'types/types';
import cls from './ProjectTop.module.scss';

type ProjectTopProps = Pick<
    ProjectType,
    | 'appStoreLink'
    | 'googlePlayLink'
    | 'websiteLink'
    | 'title'
    | 'description'
    | 'firstScreenImg'
    | 'textColor'
    | 'bgColor'
>;

export const ProjectTop = ({
    appStoreLink,
    googlePlayLink,
    websiteLink,
    title,
    description,
    bgColor,
    firstScreenImg,
    textColor,
}: ProjectTopProps) => {
    return (
        <section style={{ background: bgColor }} className={cn(cls.ProjectTop, {}, [])}>
            <div className={cls.block}>
                <div style={{ color: textColor }} className={cls.content}>
                    <h2 className={cls.title}>{title}</h2>
                    <p className={cls.text}>{description}</p>
                    {appStoreLink && (
                        <a href={appStoreLink} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )}
                    {googlePlayLink && (
                        <a href={googlePlayLink} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )}
                    {websiteLink && (
                        <a href={websiteLink} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )}
                </div>
                <img loading='lazy' className={cls.img} src={firstScreenImg} alt='Background' />
            </div>
        </section>
    );
};
