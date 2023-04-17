import { Disclosure, Transition } from '@headlessui/react';
import cls from './AdvantagesDisclosure.module.scss';
import { ReactComponent as Dropdown } from '@assets/icons/dropdown.svg';
import cn from 'classnames';
import { useMobile } from '@hooks/useMobile';

interface AdvantagesDisclosureProps {
    title: string;
    text: string;
}

export const AdvantagesDisclosure = ({ title, text }: AdvantagesDisclosureProps) => {
    const { isMobile } = useMobile();

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className={cls.button}>
                        {title}
                        {
                            <Dropdown
                                className={cn(cls.dropdown, {
                                    [cls.open]: open,
                                })}
                            />
                        }
                    </Disclosure.Button>
                    <Transition
                        className={cls.transitionBlock}
                        show={isMobile ? true : open}
                        enter={cls.transition}
                        enterFrom={cls.opacity0}
                        enterTo={cls.opacity100}
                        leave={cls.transition}
                        leaveFrom={cls.opacity100}
                        leaveTo={cls.opacity0}
                    >
                        <Disclosure.Panel static className={cls.pannel}>
                            {text}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};
