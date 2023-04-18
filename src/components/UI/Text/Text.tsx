import { ComponentProps, ElementType, ReactNode } from 'react';

type TextOwnProps<E extends ElementType = ElementType> = {
    className?: string;
    children: ReactNode;
    as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>;

const defaultElement = 'p';

export const Text = <E extends ElementType = typeof defaultElement>({
    children,
    as,
    className,
    ...props
}: TextProps<E>) => {
    const TagName = as || defaultElement;
    return (
        <TagName {...props} className={className}>
            {children}
        </TagName>
    );
};
