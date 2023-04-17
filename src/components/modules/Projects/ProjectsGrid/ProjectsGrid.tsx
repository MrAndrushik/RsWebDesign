import { Spinner } from '@components/UI/Spinner/Spinner';
import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useProjectsData } from '@hooks/useProjectsData';
import cn from 'classnames';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectType } from 'types/types';
import cls from './ProjectsGrid.module.scss';

interface ProjectsGridProps {
    className?: string;
    data: ProjectType[];
    title: string;
}

export const ProjectsGrid = ({ className, data, title }: ProjectsGridProps) => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<string>(t('category-all')!);

    const { categories, isLoading } = useProjectsData();
    const sortedData = useMemo(
        () =>
            data.filter(
                (project) => project.projectCategories?.includes(activeCategory) || activeCategory === t('category-all')
            ),
        [activeCategory, data, t]
    );

    return (
        <section className={cn(cls.ProjectsGrid, {}, [className])}>
            <div className={cls.block}>
                <div className={cls.top}>
                    <h2 className={`${cls.title} title`}>{title}</h2>
                    {isLoading ? (
                        <Spinner style={{ width: '20px', height: '20px' }} type='single' />
                    ) : categories?.length ? (
                        <ul className={cls.list}>
                            <li className={cls.item}>
                                <button
                                    onClick={() => setActiveCategory(t('category-all')!)}
                                    className={
                                        activeCategory === t('category-all')
                                            ? `${cls.categoryBtn} ${cls.categoryBtnActive}`
                                            : cls.categoryBtn
                                    }
                                >
                                    {t('category-all')}
                                </button>
                            </li>
                            {categories.map((category) => (
                                <li key={category} className={cls.item}>
                                    <button
                                        onClick={() => setActiveCategory(category)}
                                        className={
                                            activeCategory === category
                                                ? `${cls.categoryBtn} ${cls.categoryBtnActive}`
                                                : cls.categoryBtn
                                        }
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
                <div className={cls.grid}>
                    {sortedData?.map((project) => (
                        <ProjectCard
                            type='small'
                            key={project.id}
                            project={{
                                bgColor: project.bgColor,
                                title: project.title,
                                description: project.description,
                                id: project.id,
                                textColor: project.textColor,
                                previewImg: project.previewImg,
                                firstScreenImg: project.firstScreenImg,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
