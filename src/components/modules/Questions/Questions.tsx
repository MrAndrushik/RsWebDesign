import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './Questions.module.scss';
import { Button } from '@components/UI/Button/Button';
import { useModal } from '@hooks/useModal';

interface QuestionsProps {
    className?: string;
    title: string;
    description: string;
}

export const Questions = ({ className, title, description }: QuestionsProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={cn(cls.Questions, {}, [className])}>
            <div className={cn(cls.block)}>
                <div className={cn(cls.content)}>
                    <h2 className='title'>{title}</h2>
                    <p className='text'>{description}</p>
                </div>
                <Button onClick={() => setIsOpen(true)} className='questionsBlock'>
                    {t('send-request')}
                </Button>
            </div>
        </section>
    );
};
