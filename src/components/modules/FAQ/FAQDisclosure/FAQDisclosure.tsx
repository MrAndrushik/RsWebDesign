import cn from 'classnames';
import cls from './FAQDisclosure.module.scss';
import { Disclosure, Transition } from '@headlessui/react';
import { ReactComponent as Plus } from '@assets/icons/plus.svg';
import { ReactComponent as Minus } from '@assets/icons/minus.svg';

interface FAQDisclosureData {
    id: number;
    title: string;
    body: string;
    categories: string[];
}

interface FAQDisclosureProps {
    className?: string;
    data: FAQDisclosureData;
}

export const FAQDisclosure = ({ className, data }: FAQDisclosureProps) => {
    return (
        <div className={cn(cls.FAQDisclosure, {}, [className])}>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className={cls.button}>
                            <div className={cls.icon}>{!open ? <Plus /> : <Minus />}</div>
                            <p className={cls.text}>{data.title}</p>
                        </Disclosure.Button>

                        <Transition
                            show={open}
                            enter={cls.transition}
                            enterFrom={cls.enterFrom}
                            enterTo={cls.enterTo}
                            leave={cls.transition}
                            leaveFrom={cls.enterTo}
                            leaveTo={cls.enterFrom}
                        >
                            <Disclosure.Panel static className={cls.body}>
                                {data.body}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
};
