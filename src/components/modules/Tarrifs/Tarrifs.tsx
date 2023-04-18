import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ITarrif } from 'types/types';
import cls from './Tarrifs.module.scss';

interface TarrifsProps {
    className?: string;
    data: ITarrif[];
    title: string;
}

export const Tarrifs = ({ className, data, title }: TarrifsProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.Tarrifs, {}, [className, 'section'])}>
            <div className={cls.block}>
                <h2 className='title'>{title}</h2>
                <div className={cls.grid}>
                    {data.map((item, index) => (
                        <div className={cls.item} key={index}>
                            <h3 className={cls.caption}>{item.title}</h3>
                            <div className={cls.textBlock}>
                                {item.text.map((content, index) => (
                                    <p key={index} className='text'>
                                        {content}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
