import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectSteps.module.scss';
import { ProjectType } from 'types/types';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { ReactComponent as Arrow } from '@assets/icons/arrow.svg';

type ProjectStepsProps = Pick<ProjectType, 'steps' | 'textColor' | 'bgColor'>;
export const ProjectSteps = ({ steps, textColor, bgColor }: ProjectStepsProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectSteps, {}, [])}>
            <div className={cls.block}>
                <h2 className='title'>{t('project-steps-title')}</h2>
                <Tab.Group vertical>
                    <div className={cls.tabGroup}>
                        <Tab.List className={cls.tabList}>
                            {steps.map((step, index) => (
                                <Tab as={Fragment} key={step.title}>
                                    {({ selected }) => (
                                        <div className={cls.tabBlock}>
                                            <button style={selected ? { color: bgColor } : {}} className={cls.tab}>
                                                {step.title}
                                            </button>
                                            {index !== steps.length - 1 && <Arrow />}
                                        </div>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {steps.map((step) => (
                                <Tab.Panel
                                    style={{ background: bgColor }}
                                    className={cls.list}
                                    as='ul'
                                    key={step.title}
                                >
                                    {step.description.map((text, index) => (
                                        <li style={{ color: textColor }} className={cls.text} key={index}>
                                            <span className={cls.dot} style={{ background: textColor }}></span>
                                            <p>{text}</p>
                                        </li>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </section>
    );
};
