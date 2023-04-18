import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectGallery.module.scss';
import { ProjectType } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

type ProjectGalleryProps = Pick<ProjectType, 'bg_color' | 'bg_text_color' | 'images'>;

export const ProjectGallery = ({ bg_color, bg_text_color, images }: ProjectGalleryProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectGallery, {}, [])}>
            <div className={cls.block}>
                <Swiper
                    effect={'coverflow'}
                    className={cls.swiper}
                    modules={[Navigation, EffectCoverflow]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 100,
                        depth: 100,
                        modifier: 3,
                        slideShadows: false,
                    }}
                    initialSlide={0}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    grabCursor={true}
                    navigation
                    breakpoints={{
                        768: {
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 100,
                                depth: 200,
                                modifier: 4,
                                slideShadows: false,
                            },
                        },
                    }}
                >
                    {images.links.map((item, index) => (
                        <SwiperSlide key={index} className={cls.defSlide}>
                            <div className={cls.slide}>
                                <img className={`${cls.img}`} src={item} alt={`${item}-photo`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cls.content}>
                    <h2 className='title'>{images.title}</h2>
                    <p className='text'>{images.description}</p>
                </div>
            </div>
        </section>
    );
};
