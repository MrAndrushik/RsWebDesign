import cn from 'classnames';
import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: 'light' | 'dark';
}

export const Input = ({ className, type = 'dark', ...props }: InputProps) => {
    return (
        <input
            {...props}
            className={cn(
                cls.Input,
                {
                    [cls.light]: type === 'light',
                    [cls.dark]: type === 'dark',
                },
                [className]
            )}
        ></input>
    );
};
