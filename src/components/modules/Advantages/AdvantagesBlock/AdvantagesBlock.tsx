import { Button } from '@components/UI/Button/Button';
import { Subtitle, SubtitleProps } from '@components/UI/Subtitle/Subtitle';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AdvantagesDisclosure } from '../AdvantagesDisclosure/AdvantagesDisclosure';
import cls from './AdvantagesBlock.module.scss';
import { useModal } from '@hooks/useModal';

interface ListItem {
    title: string;
    text: string;
}

interface AdvantagesProps {
    className?: string;
    data: ListItem[];
    subtitle?: SubtitleProps;
    title?: string;
    button?: boolean;
}

export const AdvantagesBlock = ({ className, data, title, subtitle, button = true }: AdvantagesProps) => {
    const { t } = useTranslation();
    const { setIsOpen } = useModal();

    return (
        <section className={cn(cls.Advantages, {}, [className, 'section'])}>
            <div className={cls.block}>
                {subtitle && <Subtitle style={subtitle.style}>{subtitle.children}</Subtitle>}

                {title && <h2 className={`title`}>{title}</h2>}
                <ul className={cls.list}>
                    {data.map((item) => (
                        <li className={cls.item} key={item.title}>
                            <AdvantagesDisclosure title={item.title} text={item.text} />
                        </li>
                    ))}
                </ul>
                {button && (
                    <Button onClick={() => setIsOpen(true)} className='ourAdvantages'>
                        {t('send-request')}
                    </Button>
                )}
            </div>
        </section>
    );
};
