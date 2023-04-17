import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectTechnicalPart.module.scss';
import { ProjectType } from 'types/types';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';

type ProjectTechnicalPartProps = Pick<ProjectType, 'technicalPart' | 'textColor' | 'bgColor'>;

export const ProjectTechnicalPart = ({ technicalPart, bgColor, textColor }: ProjectTechnicalPartProps) => {
    const { t } = useTranslation();

    return (
        <section style={{ background: bgColor }} className={cn(cls.ProjectTechnicalPart, {}, [])}>
            <div className={cls.block}>
                <Subtitle style={{ color: bgColor, background: textColor }}>{t('technical-part')}</Subtitle>
                <ul className={cls.grid}>
                    {technicalPart.map((item) => (
                        <li style={{ color: textColor }} className={cls.item} key={item.name}>
                            <span>{item.name}:</span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
