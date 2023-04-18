import { ProjectCard } from '@components/modules/ProjectCard/ProjectCard';
import { useMobile } from '@hooks/useMobile';
import cn from 'classnames';
import { Pagination, Autoplay, Mousewheel } from 'swiper';
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
                modules={[Pagination, Autoplay, Mousewheel]}
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
                mousewheel={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {data.map((project) => (
                    <SwiperSlide
                        style={!isMobile ? { background: project.bgColor } : {}}
                        key={project.id}
                        className={cls.slide}
                    >
                        <ProjectCard
                            type='large'
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
