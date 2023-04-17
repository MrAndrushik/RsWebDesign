import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import cls from './Subtitle.module.scss';

type AlowedCSSProperties = Pick<CSSProperties, 'color' | 'background'>;

export interface SubtitleProps {
    style?: Pick<CSSProperties, 'color' | 'background'>;
    className?: string;
    children: ReactNode;
}

const defaultStyle: AlowedCSSProperties = { background: '#FFA220', color: '#fff' };

export const Subtitle = ({ className, children, style = defaultStyle }: SubtitleProps) => {
    return (
        <div
            style={style}
            className={cn(
                cls.Subtitle,
                {
                    [cls[className!]]: className,
                },
                []
            )}
        >
            {children}
        </div>
    );
};
