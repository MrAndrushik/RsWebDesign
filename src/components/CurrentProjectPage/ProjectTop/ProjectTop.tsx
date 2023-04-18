import { ReactComponent as AppStore } from '@assets/icons/appstore.svg';
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
                    {app_store_link && (
                        <a href={app_store_link} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )}
                    {/* {google_play_link && (
                        <a href={google_play_link} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )}
                    {web_link && (
                        <a href={web_link} target='blank' className={cls.appLink}>
                            <AppStore />
                        </a>
                    )} */}
                </div>
                <img loading='lazy' className={cls.img} src={header_image} alt='Background' />
            </div>
        </section>
    );
};
