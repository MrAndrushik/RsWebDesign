import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectCard.module.scss';
import { useMobile } from '@hooks/useMobile';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { ProjectType } from 'types/types';
import { Button } from '@components/UI/Button/Button';
import { ROUTES } from '@utils/const';
import { Link } from 'react-router-dom';
import { useHover } from '@hooks/useHover';
import { Transition } from '@headlessui/react';
import { ElementType } from 'react';
import { Text } from '@components/UI/Text/Text';

interface ProjectCardProps {
    className?: string;
    type?: 'large' | 'small';
    project: Pick<
        ProjectType,
        'title' | 'short_description' | 'bg_text_color' | 'bg_color' | 'preview_image' | 'header_image' | 'id'
    >;
    titleTag?: ElementType;
}

export const ProjectCard = ({ className, type = 'small', project, titleTag = 'h3' }: ProjectCardProps) => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    if (type === 'large') {
        return (
            <div className={cls.wrapperLarge}>
                <div style={{ background: project.bg_color }} className={cls.blockLarge}>
                    <div style={{ color: project.bg_text_color }} className={cls.contentLarge}>
                        {!isMobile && (
                            <Subtitle style={{ background: '#D66300', color: '#fff' }}>{t('projects')}</Subtitle>
                        )}
                        <h2 className={cls.titleLarge}>{project.title}</h2>
                        <p className={cls.textLarge}>{project.short_description}</p>
                    </div>
                    {!isMobile && (
                        <Button as={Link} to={`${ROUTES.PROJECTS_ROUTE}/${project.title}`} className='moveToProject'>
                            {t('move-to-project')}
                        </Button>
                    )}
                    {isMobile ? (
                        <img loading='lazy' className={cls.imgLarge} src={project.preview_image} alt='Background' />
                    ) : (
                        <img loading='lazy' className={cls.imgLarge} src={project.header_image} alt='Background' />
                    )}
                </div>
                {isMobile && (
                    <div className={cls.btnWrapper}>
                        <Button
                            style={{ color: project.bg_color, border: `2px solid ${project.bg_color}` }}
                            as={Link}
                            to={`${ROUTES.PROJECTS_ROUTE}/${project.title}`}
                            className='moveToProject'
                        >
                            {t('move-to-project')}
                        </Button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div ref={hoverRef} className={cls.wrapperSmall}>
            <div style={{ background: project.bg_color }} className={cls.blockSmall}>
                <div style={{ color: project.bg_text_color }} className={cls.contentSmall}>
                    <Text as={titleTag} className={cls.titleSmall}>
                        {project.title}
                    </Text>
                    <p className={cls.textSmall}>{project.short_description}</p>
                </div>
                <img loading='lazy' className={cls.imgSmall} src={project.preview_image} alt='Background' />
                {!isMobile && (
                    <Transition
                        show={isHovered}
                        enter={cls.transition}
                        enterFrom={cls.enterFrom}
                        enterTo={cls.enterTo}
                        leave={cls.transition}
                        leaveFrom={cls.enterTo}
                        leaveTo={cls.enterFrom}
                    >
                        <Button
                            as={Link}
                            to={`${ROUTES.PROJECTS_ROUTE}/${project.title}`}
                            style={{
                                background: project.bg_text_color,
                                color: project.bg_color,
                                border: `2px solid ${project.bg_color}`,
                            }}
                            className='moveToProjectStick'
                        >
                            {t('move-to-project')}
                        </Button>
                    </Transition>
                )}
            </div>
            {isMobile && (
                <div className={cls.btnWrapper}>
                    <Button
                        style={{ color: project.bg_color, border: `2px solid ${project.bg_color}` }}
                        as={Link}
                        to={`${ROUTES.PROJECTS_ROUTE}/${project.title}`}
                        className='moveToProject'
                    >
                        {t('move-to-project')}
                    </Button>
                </div>
            )}
        </div>
    );
};
