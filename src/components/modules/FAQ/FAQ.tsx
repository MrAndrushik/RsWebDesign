import { Input } from '@components/UI/Input/Input';
import cn from 'classnames';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './FAQ.module.scss';
import { FAQDisclosure } from './FAQDisclosure/FAQDisclosure';

interface FAQProps {
    className?: string;
}

export const FAQ = ({ className }: FAQProps) => {
    const { t } = useTranslation();
    const questions = useMemo(
        () => [
            {
                id: 1,
                title: t('faq-question-1-title'),
                body: t('faq-question-1-body'),
                categories: [t('category-development')],
            },
            {
                id: 2,
                title: t('faq-question-2-title'),
                body: t('faq-question-2-body'),
                categories: [t('category-tariff')],
            },
            {
                id: 3,
                title: t('faq-question-3-title'),
                body: t('faq-question-3-body'),
                categories: [],
            },
            {
                id: 4,
                title: t('faq-question-4-title'),
                body: t('faq-question-4-body'),
                categories: [],
            },
        ],
        [t]
    );
    const categories = useMemo(
        () => [t('category-development'), t('category-steps'), t('category-terms'), t('category-tariff')],
        [t]
    );

    const [activeCategory, setActiveCategory] = useState<string | null>(t('category-all'));
    const [searchQuery, setSearchQuery] = useState('');

    const sortedData = useMemo(() => {
        if (activeCategory === 'Все' && searchQuery === '') {
            return questions;
        } else if (activeCategory === 'Все') {
            return questions.filter((question) => question.title.includes(searchQuery));
        } else {
            return questions.filter(
                (question) => question.categories.includes(activeCategory!) && question.title.includes(searchQuery)
            );
        }
    }, [activeCategory, questions, searchQuery]);

    return (
        <section className={cn(cls.FAQ, {}, [className])}>
            <div className={cls.block}>
                <div className={cls.top}>
                    <h2 className='title'>{t('faq-title')}</h2>
                    <div className={cls.searchBlock}>
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Найти ответы'
                        />
                    </div>
                </div>
                <ul className={cls.searchTags}>
                    <li>
                        <button
                            onClick={() => setActiveCategory(t('category-all'))}
                            className={cn(cls.categoryBtn, {
                                [cls.categoryBtnActive]: activeCategory === t('category-all'),
                            })}
                        >
                            {t('category-all')}
                        </button>
                    </li>
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => setActiveCategory(category)}
                                className={cn(cls.categoryBtn, {
                                    [cls.categoryBtnActive]: category === activeCategory,
                                })}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={cls.questions}>
                    {sortedData.length === 0 ? (
                        <div className={cls.notFound}>{t('faq-not-found')}</div>
                    ) : (
                        sortedData.map((question) => <FAQDisclosure key={question.id} data={question} />)
                    )}
                </div>
            </div>
        </section>
    );
};
