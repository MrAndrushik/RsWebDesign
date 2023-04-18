import { Spinner } from '@components/UI/Spinner/Spinner';
import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useProjectsData } from '@hooks/useProjectsData';
import cn from 'classnames';
import { ElementType, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectType } from 'types/types';
import cls from './ProjectsGrid.module.scss';
import { Text } from '@components/UI/Text/Text';

interface ProjectsGridProps {
    className?: string;
    data: ProjectType[];
    title: string;
    titleTag?: ElementType;
    cardTitleTag?: ElementType;
}

export const ProjectsGrid = ({ className, data, title, titleTag = 'h2', cardTitleTag }: ProjectsGridProps) => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<string>(t('category-all')!);

    const { categories, isLoading } = useProjectsData();
    const sortedData = useMemo(
        () =>
            data.filter(
                (project) => project.categories?.includes(activeCategory) || activeCategory === t('category-all')
            ),
        [activeCategory, data, t]
    );

    return (
        <section className={cn(cls.ProjectsGrid, {}, [className])}>
            <div className={cls.block}>
                <div className={cls.top}>
                    <Text as={titleTag} className={`${cls.title} title`}>
                        {title}
                    </Text>
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
                                <li key={category.id} className={cls.item}>
                                    <button
                                        onClick={() => setActiveCategory(category.id)}
                                        className={
                                            activeCategory === category.id
                                                ? `${cls.categoryBtn} ${cls.categoryBtnActive}`
                                                : cls.categoryBtn
                                        }
                                    >
                                        {category.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
                <div className={cls.grid}>
                    {sortedData?.map((project) => (
                        <ProjectCard
                            titleTag={cardTitleTag}
                            type='small'
                            key={project.id}
                            project={{
                                bg_color: project.bg_color,
                                title: project.title,
                                short_description: project.short_description,
                                id: project.id,
                                bg_text_color: project.bg_text_color,
                                preview_image: project.preview_image,
                                header_image: project.header_image,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
