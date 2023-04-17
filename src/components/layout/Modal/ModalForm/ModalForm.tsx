import { ReactComponent as CloseIcon } from '@assets/icons/close-modal.svg';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './ModalForm.module.scss';
import { Button } from '@components/UI/Button/Button';
import { useModal } from '@hooks/useModal';

// interface ModalFromProps {
//     className?: string;
// }

type Inputs = {
    name: string;
    surname: string;
    email: string;
    tel: string;
    description: string;
};

export default function ModalForm() {
    const { t } = useTranslation();
    const { isOpen, setIsOpen } = useModal();
    const completeInputRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                static
                initialFocus={completeInputRef}
                className={cls.dialog}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter={cls.transition}
                    enterFrom={cls.enterFrom}
                    enterTo={cls.enterTo}
                    leave={cls.transition}
                    leaveFrom={cls.enterTo}
                    leaveTo={cls.enterFrom}
                >
                    <div aria-hidden='true' className={cls.overlay}></div>
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter={cls.transition}
                    enterFrom={cls.enterFrom}
                    enterTo={cls.enterTo}
                    leave={cls.transition}
                    leaveFrom={cls.enterTo}
                    leaveTo={cls.enterFrom}
                >
                    <div className={cls.block}>
                        <Dialog.Panel className={cls.panel}>
                            <Dialog.Title className={cls.title}>{t('modal-request-title')}</Dialog.Title>
                            <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={cls.row}>
                                    <label className={cls.label}>
                                        <p className={`${cls.labelText} ${cls.labelTextRequired}`}>{t('name')}</p>
                                        <input
                                            placeholder={t('name')!}
                                            className={cls.input}
                                            type='text'
                                            {...register('name', { required: true })}
                                            ref={completeInputRef}
                                        />
                                        {errors.name?.type === 'required' && (
                                            <span className={cls.error}>{t('required-field')}</span>
                                        )}
                                    </label>
                                    <label className={cls.label}>
                                        <p className={cls.labelText}>{t('surname')}</p>
                                        <input
                                            placeholder={t('surname')!}
                                            className={cls.input}
                                            type='text'
                                            {...(register('surname'), {})}
                                        />
                                    </label>
                                </div>
                                <div className={cls.row}>
                                    <label className={cls.label}>
                                        <p className={`${cls.labelText} ${cls.labelTextRequired}`}>e-mail</p>
                                        <input
                                            placeholder='e-mail'
                                            className={cls.input}
                                            type='text'
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            })}
                                        />
                                        {(errors.email?.type === 'required' && (
                                            <span className={cls.error}>{t('required-field')}</span>
                                        )) ||
                                            (errors.email?.type === 'pattern' && (
                                                <span className={cls.error}>{t('incorrect-email')}</span>
                                            ))}
                                    </label>
                                    <label className={cls.label}>
                                        <p className={`${cls.labelText} ${cls.labelTextRequired}`}>
                                            {t('telephone-number')}
                                        </p>
                                        <input
                                            placeholder={t('telephone-number')!}
                                            className={cls.input}
                                            type='text'
                                            {...register('tel', {
                                                required: true,
                                                // eslint-disable-next-line no-useless-escape
                                                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                            })}
                                        />
                                        {(errors.tel?.type === 'required' && (
                                            <span className={cls.error}>{t('required-field')}</span>
                                        )) ||
                                            (errors.tel?.type === 'pattern' && (
                                                <span className={cls.error}>{t('incorrect-tel')}</span>
                                            ))}
                                    </label>
                                </div>
                                <div className={cls.row}>
                                    <textarea
                                        placeholder={t('project-description')!}
                                        {...register('description', {})}
                                        className={cls.textarea}
                                    />
                                </div>
                                <Button className='modalBtn' type='submit'>
                                    {t('send')}
                                </Button>
                            </form>
                            <button onClick={() => setIsOpen(false)} className={cls.closeBtn}>
                                <CloseIcon />
                            </button>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
