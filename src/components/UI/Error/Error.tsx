import cn from 'classnames';
import cls from './Error.module.scss';

interface ErrorProps {
    className?: string;
    children: string;
}

export const Error = ({ className, children }: ErrorProps) => {
    return (
        <div className={cn(cls.Error, {}, [className])}>
            <div className={cls.content}>{children}</div>
        </div>
    );
};
