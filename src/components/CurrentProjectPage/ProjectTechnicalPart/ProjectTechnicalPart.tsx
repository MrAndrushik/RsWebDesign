import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectTechnicalPart.module.scss';
import { ProjectType } from 'types/types';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';

type ProjectTechnicalPartProps = Pick<ProjectType, 'tech' | 'bg_text_color' | 'bg_color'>;

export const ProjectTechnicalPart = ({ tech, bg_text_color, bg_color }: ProjectTechnicalPartProps) => {
    const { t } = useTranslation();

    return (
        <section style={{ background: bg_color }} className={cn(cls.ProjectTechnicalPart, {}, [])}>
            <div className={cls.block}>
                <Subtitle style={{ color: bg_color, background: bg_text_color }}>{t('technical-part')}</Subtitle>
                <ul className={cls.grid}>
                    {tech?.items.map((item) => (
                        <li style={{ color: bg_text_color }} className={cls.item} key={item.title}>
                            <span>{item.title}:</span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
