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
        'title' | 'description' | 'textColor' | 'bgColor' | 'previewImg' | 'firstScreenImg' | 'id'
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
                <div style={{ background: project.bgColor }} className={cls.blockLarge}>
                    <div style={{ color: project.textColor }} className={cls.contentLarge}>
                        {!isMobile && (
                            <Subtitle style={{ background: '#D66300', color: '#fff' }}>{t('projects')}</Subtitle>
                        )}
                        <h2 className={cls.titleLarge}>{project.title}</h2>
                        <p className={cls.textLarge}>{project.description}</p>
                    </div>
                    {!isMobile && (
                        <Button as={Link} to={`${ROUTES.PROJECTS_ROUTE}/${project.id}`} className='moveToProject'>
                            {t('move-to-project')}
                        </Button>
                    )}
                    {isMobile ? (
                        <img loading='lazy' className={cls.imgLarge} src={project.previewImg} alt='Background' />
                    ) : (
                        <img loading='lazy' className={cls.imgLarge} src={project.firstScreenImg} alt='Background' />
                    )}
                </div>
                {isMobile && (
                    <div className={cls.btnWrapper}>
                        <Button
                            style={{ color: project.bgColor, border: `2px solid ${project.bgColor}` }}
                            as={Link}
                            to={`${ROUTES.PROJECTS_ROUTE}/${project.id}`}
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
            <div style={{ background: project.bgColor }} className={cls.blockSmall}>
                <div style={{ color: project.textColor }} className={cls.contentSmall}>
                    <Text as={titleTag} className={cls.titleSmall}>
                        {project.title}
                    </Text>
                    <p className={cls.textSmall}>{project.description}</p>
                </div>
                <img loading='lazy' className={cls.imgSmall} src={project.previewImg} alt='Background' />
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
                            to={`${ROUTES.PROJECTS_ROUTE}/${project.id}`}
                            style={{
                                background: project.textColor,
                                color: project.bgColor,
                                border: `2px solid ${project.bgColor}`,
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
                        style={{ color: project.bgColor, border: `2px solid ${project.bgColor}` }}
                        as={Link}
                        to={`${ROUTES.PROJECTS_ROUTE}/${project.id}`}
                        className='moveToProject'
                    >
                        {t('move-to-project')}
                    </Button>
                </div>
            )}
        </div>
    );
};
