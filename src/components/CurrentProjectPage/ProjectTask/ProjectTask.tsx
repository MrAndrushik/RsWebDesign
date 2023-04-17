import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectTask.module.scss';
import { ProjectType } from 'types/types';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';

type ProjectTaskProps = Pick<ProjectType, 'bgColor' | 'textColor' | 'task'>;

export const ProjectTask = ({ bgColor, task, textColor }: ProjectTaskProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectTask, {}, [])}>
            <div className={cls.block}>
                <Subtitle style={{ background: bgColor, color: textColor }}>{t('task')}</Subtitle>
                <p className={cls.text}>{task}</p>
            </div>
        </section>
    );
};
