import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectsGallery.module.scss';
import { ProjectType } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useMobile } from '@hooks/useMobile';

interface ProjectsGalleryProps {
    className?: string;
    data: ProjectType[];
    title: string;
}

export const ProjectsGallery = ({ className, data, title }: ProjectsGalleryProps) => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    return (
        <section className={cn(cls.ProjectsGallery, {}, [className, 'section'])}>
            <h2 className={`${cls.title} title`}>{title}</h2>
            <Swiper
                className={cls.swiper}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 40,
                    },
                }}
            >
                {data.map((project) => (
                    <SwiperSlide
                        style={!isMobile ? { background: project.bgColor } : {}}
                        key={project.id}
                        className={cls.slide}
                    >
                        <ProjectCard
                            type='small'
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
