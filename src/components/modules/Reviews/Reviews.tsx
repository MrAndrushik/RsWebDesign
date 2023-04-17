import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './Reviews.module.scss';
import { Subtitle } from '@components/UI/Subtitle/Subtitle';
import Reviewer from '@assets/img/review.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useMemo } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

interface ReviewsProps {
    className?: string;
}

interface ReviewsData {
    img: string;
    name: string;
    position: string;
    company: string;
    companyLink?: string;
    review: string;
}

export const Reviews = ({ className }: ReviewsProps) => {
    const { t } = useTranslation();

    const reviewsData = useMemo<ReviewsData[]>(
        () => [
            {
                img: Reviewer,
                name: t('kiselev-aleksandr'),
                position: t('manager'),
                company: 'Academy',
                companyLink: 'https://www.google.ru',
                review: t('review-1'),
            },
            {
                img: Reviewer,
                name: t('kiselev-aleksandr'),
                position: t('manager'),
                company: 'Academy',
                companyLink: 'https://www.google.ru',
                review: t('review-1'),
            },
            {
                img: Reviewer,
                name: t('kiselev-aleksandr'),
                position: t('manager'),
                company: 'Academy',
                companyLink: 'https://www.google.ru',
                review: t('review-1'),
            },
            {
                img: Reviewer,
                name: t('kiselev-aleksandr'),
                position: t('manager'),
                company: 'Academy',
                companyLink: 'https://www.google.ru',
                review: t('review-1'),
            },
            {
                img: Reviewer,
                name: t('kiselev-aleksandr'),
                position: t('manager'),
                company: 'Academy',
                companyLink: 'https://www.google.ru',
                review: t('review-1'),
            },
        ],
        [t]
    );

    return (
        <section className={cn(cls.Reviews, {}, [className, 'section sectionDark sectionUnpaddedLeftRight'])}>
            <div className={cls.block}>
                <Subtitle style={{ background: '#FFA220', color: '#fff' }}>{t('reviews')}</Subtitle>
                <Swiper
                    className={cls.swiper}
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    grabCursor={true}
                    navigation
                >
                    {reviewsData.map((item, index) => (
                        <SwiperSlide key={index} className={cls.defSlide}>
                            <div className={cls.slide}>
                                <img
                                    className={`${cls.imgDesktop} ${cls.img}`}
                                    src={item.img}
                                    alt={`${item.name}-photo`}
                                />
                                <div className={cls.content}>
                                    <div className={cls.mobileBlock}>
                                        <img
                                            className={`${cls.imgMobile} ${cls.img}`}
                                            src={item.img}
                                            alt={`${item.name}-photo`}
                                        />
                                        <div>
                                            <p className={cls.name}>{item.name}</p>
                                            <p className={cls.position}>{item.position}</p>
                                            {item.companyLink ? (
                                                <a className={cls.company} href={item.companyLink}>
                                                    {item.company}
                                                </a>
                                            ) : (
                                                <p className={cls.company}>{item.company}</p>
                                            )}
                                        </div>
                                    </div>
                                    <p className={cls.review}>{item.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
