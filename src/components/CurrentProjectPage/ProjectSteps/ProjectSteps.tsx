import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './ProjectSteps.module.scss';
import { ProjectType } from 'types/types';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { ReactComponent as Arrow } from '@assets/icons/arrow.svg';

type ProjectStepsProps = Pick<ProjectType, 'stages' | 'bg_text_color' | 'bg_color'>;
export const ProjectSteps = ({ stages, bg_color, bg_text_color }: ProjectStepsProps) => {
    const { t } = useTranslation();

    return (
        <section className={cn(cls.ProjectSteps, {}, [])}>
            <div className={cls.block}>
                <h2 className='title'>{t('project-steps-title')}</h2>
                <Tab.Group vertical>
                    <div className={cls.tabGroup}>
                        <Tab.List className={cls.tabList}>
                            {stages.map((step, index) => (
                                <Tab as={Fragment} key={step.title}>
                                    {({ selected }) => (
                                        <div className={cls.tabBlock}>
                                            <button style={selected ? { color: bg_color } : {}} className={cls.tab}>
                                                {step.title}
                                            </button>
                                            {index !== stages.length - 1 && <Arrow />}
                                        </div>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className={cls.groupOfList}>
                            {stages.map((step) => (
                                <Tab.Panel
                                    style={{ background: bg_color }}
                                    className={cls.list}
                                    as='ul'
                                    key={step.title}
                                >
                                    {step.content.map((text, index) => (
                                        <li style={{ color: bg_text_color }} className={cls.text} key={index}>
                                            <span className={cls.dot} style={{ background: bg_text_color }}></span>
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
