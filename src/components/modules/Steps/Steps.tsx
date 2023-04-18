import cn from 'classnames';
import cls from './Steps.module.scss';
import { IStepBlock } from 'types/types';
import { useTranslation } from 'react-i18next';
import { Text } from '@components/UI/Text/Text';
import { ElementType } from 'react';

interface StepsProps {
    className?: string;
    data: IStepBlock[];
    title?: string;
    titleTag?: ElementType;
    description?: string;
    color?: string;
}

export const Steps = ({ className, data, title, description, color, titleTag = 'h2' }: StepsProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.Steps, {}, [className, 'section'])}>
            <div className={cls.block}>
                <div className={cls.content}>
                    {title && (
                        <Text as={titleTag} className='title'>
                            {title}
                        </Text>
                    )}
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
