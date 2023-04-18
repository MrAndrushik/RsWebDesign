import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectTask.module.scss';
import { ProjectType } from 'types/types';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';

type ProjectTaskProps = Pick<ProjectType, 'bg_text_color' | 'bg_color' | 'long_description'>;

export const ProjectTask = ({ bg_text_color, long_description, bg_color }: ProjectTaskProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectTask, {}, [])}>
            <div className={cls.block}>
                <Subtitle style={{ background: bg_color, color: bg_text_color }}>{t('task')}</Subtitle>
                <p className={cls.text}>{long_description}</p>
            </div>
        </section>
    );
};
