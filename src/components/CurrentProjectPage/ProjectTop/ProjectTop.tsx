import { ReactComponent as AppStore } from '@assets/icons/appstore.svg';
import GooglePlay from '@assets/icons/google-play.png';
import { ReactComponent as WebApp } from '@assets/icons/webapp.svg';
import cn from 'classnames';
import { ProjectType } from 'types/types';
import cls from './ProjectTop.module.scss';

type ProjectTopProps = Pick<
    ProjectType,
    | 'app_store_link'
    | 'google_play_link'
    | 'web_link'
    | 'title'
    | 'short_description'
    | 'header_image'
    | 'bg_text_color'
    | 'bg_color'
>;

export const ProjectTop = ({
    app_store_link,
    google_play_link,
    web_link,
    title,
    short_description,
    bg_color,
    header_image,
    bg_text_color,
}: ProjectTopProps) => {
    return (
        <section style={{ background: bg_color }} className={cn(cls.ProjectTop, {}, [])}>
            <div className={cls.block}>
                <div style={{ color: bg_text_color }} className={cls.content}>
                    <h1 className={cls.title}>{title}</h1>
                    <p className={cls.text}>{short_description}</p>
                    <div className={cls.linksWrapper}>
                        {app_store_link && (
                            <a href={app_store_link} target='blank' className={cls.appLink}>
                                <AppStore className={`${cls.appleIcon} ${cls.icon}`} />
                            </a>
                        )}
                        {google_play_link && (
                            <a href={google_play_link} target='blank' className={cls.appLink}>
                                <img className={`${cls.googleIcon} ${cls.icon}`} src={GooglePlay} alt='googlePlay' />
                            </a>
                        )}
                        {web_link && (
                            <a href={web_link} target='blank' className={cls.appLink}>
                                <WebApp className={`${cls.webIcon} ${cls.icon}`} />
                            </a>
                        )}
                    </div>
                </div>
                <img loading='lazy' className={cls.img} src={header_image} alt='Background' />
            </div>
        </section>
    );
};
