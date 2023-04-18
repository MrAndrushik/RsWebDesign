import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useMobile } from '@hooks/useMobile';
import cn from 'classnames';
import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectType } from 'types/types';
import cls from './ProjectsGallery.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface ProjectsGalleryProps {
    className?: string;
    data: ProjectType[];
    title: string;
}

export const ProjectsGallery = ({ className, data, title }: ProjectsGalleryProps) => {
    const { isMobile } = useMobile();

    return (
        <section className={cn(cls.ProjectsGallery, {}, [className, 'section'])}>
            <h2 className={`${cls.title} title`}>{title}</h2>
            <Swiper
                mousewheel={true}
                className={cls.swiper}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                modules={[Navigation, Mousewheel]}
                navigation
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
