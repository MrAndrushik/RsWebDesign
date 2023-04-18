import { Button } from '@components/UI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './FooterForm.module.scss';

interface FooterFormProps {
    className?: string;
}

type Inputs = {
    name: string;
    email: string;
};

export const FooterForm = ({ className }: FooterFormProps) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <div className={cls.inputsBlock}>
                <label>
                    <p className={cls.inputText}>{t('name')}</p>
                    <input className={cls.input} placeholder={t('name')!} {...register('name', { required: true })} />
                    {errors.name && <span className={cls.error}>{t('required-field')}</span>}
                </label>
                <label>
                    <p className={cls.inputText}>e-mail</p>
                    <input
                        className={cls.input}
                        placeholder='e-mail'
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {(errors.email?.type === 'required' && <span className={cls.error}>{t('required-field')}</span>) ||
                        (errors.email?.type === 'pattern' && <span className={cls.error}>{t('incorrect-email')}</span>)}
                </label>
            </div>
            <Button type={'submit'} className='footerBtn'>
                {t('send')}
            </Button>
        </form>
    );
};
