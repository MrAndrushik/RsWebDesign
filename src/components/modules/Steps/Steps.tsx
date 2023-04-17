import cn from 'classnames';
import cls from './Steps.module.scss';
import { IStepBlock } from 'types/types';
import { useTranslation } from 'react-i18next';

interface StepsProps {
    className?: string;
    data: IStepBlock[];
    title?: string;
    description?: string;
    color?: string;
}

export const Steps = ({ className, data, title, description, color }: StepsProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.Steps, {}, [className, 'section'])}>
            <div className={cls.block}>
                <div className={cls.content}>
                    {title && <h2 className='title'>{title}</h2>}
                    {description && <p className='text'>{description}</p>}
                </div>
                <div className={cls.grid}>
                    {data.map((step) => (
                        <div key={step.step} className={cls.step}>
                            <div style={color ? { background: color } : {}} className={cn(cls.number)}>
                                {step.step}
                            </div>
                            <div className={cls.body}>
                                <p style={color ? { color: color } : {}} className={cls.stepCaption}>
                                    {step.caption}
                                </p>
                                <p className='text'>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
