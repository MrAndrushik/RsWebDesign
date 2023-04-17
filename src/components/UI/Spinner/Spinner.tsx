import { CSSProperties } from 'react';
import cls from './Spinner.module.scss';

interface SpinnerProps {
    type?: 'absolute' | 'withHeader' | 'single';
    style?: CSSProperties;
}

export const Spinner = ({ type = 'single', style }: SpinnerProps) => {
    if (type === 'withHeader') {
        return (
            <div className={cls.wrapper}>
                <span style={style} className={cls.Spinner}></span>
            </div>
        );
    }

    if (type === 'absolute') {
        return (
            <div className={cls.wrapperAbsolute}>
                <span style={style} className={cls.Spinner}></span>
            </div>
        );
    }

    return <span style={style} className={cls.Spinner}></span>;
};
