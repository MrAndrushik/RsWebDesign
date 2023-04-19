import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useMobile } from '@hooks/useMobile';
import cn from 'classnames';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectType } from 'types/types';
import cls from './ProjectsFullScreen.module.scss';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import { useTranslation } from 'react-i18next';

interface ProjectsFullScreenProps {
    className?: string;
    data: ProjectType[];
    title: string;
}

export const ProjectsFullScreen = ({ className, data, title }: ProjectsFullScreenProps) => {
    const { isMobile } = useMobile();
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectsFullScreen, {}, [className])}>
            {isMobile && (
                <div className={cls.subtitleMobile}>
                    <Subtitle style={{ background: '#D66300', color: '#fff' }}>{title}</Subtitle>
                </div>
            )}
            <Swiper
                speed={1000}
                grabCursor={true}
                className={cls.swiper}
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}
                // mousewheel={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {data.map((project) => (
                    <SwiperSlide
                        style={!isMobile ? { background: project.bg_color } : {}}
                        key={project.id}
                        className={cls.slide}
                    >
                        <ProjectCard
                            type='large'
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
