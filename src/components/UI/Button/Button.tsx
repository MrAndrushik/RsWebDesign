import cn from 'classnames';
import { ComponentProps, ElementType, ReactNode } from 'react';
import cls from './Button.module.scss';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  // Можно прокинуть класс и определить его в соседнем файле, крокидывать как обычную строку: ourCommentsBtn, firstBtn и т.д.
  className?: string;
  children: ReactNode;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export const Button = <E extends ElementType = typeof defaultElement>({
  className,
  children,
  as,
  ...props
}: ButtonProps<E>) => {
  const TagName = as || defaultElement;
  return (
    <TagName
      className={cn(cls.default, {
        [cls[className!]]: className,
      })}
      {...props}
    >
      {children}
    </TagName>
  );
};
