import { Steps } from '@components/modules/Steps/Steps';
import { IStepBlock, ITarrif } from 'types/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AdvantagesBlock } from '@components/modules/Advantages/AdvantagesBlock/AdvantagesBlock';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { Tarrifs } from '@components/modules/Tarrifs/Tarrifs';
import { Contacts } from '@components/modules/Contacts/Contacts';

export default function AnalysisPage() {
    const { t } = useTranslation();
    const stepsData: IStepBlock[] = useMemo(
        () => [
            { step: 1, text: t('analysis-steps-description-1'), caption: t('analysis-steps-caption-1') },
            { step: 2, text: t('analysis-steps-description-2'), caption: t('analysis-steps-caption-2') },
            { step: 3, text: t('analysis-steps-description-3'), caption: t('analysis-steps-caption-3') },
            { step: 4, text: t('analysis-steps-description-4'), caption: t('analysis-steps-caption-4') },
        ],
        [t]
    );
    const advantagesData = useMemo(
        () => [
            { title: t('advantages-caption-1'), text: t('advantages-text-1') },
            { title: t('advantages-caption-2'), text: t('advantages-text-2') },
            { title: t('advantages-caption-3'), text: t('advantages-text-3') },
        ],
        [t]
    );
    const tarrifData: ITarrif[] = useMemo(
        () => [
            {
                title: t('analysis-tarrif-1-title'),
                text: [t('analysis-tarrif-1-text-1'), t('analysis-tarrif-1-text-2')],
            },
            {
                title: t('analysis-tarrif-2-title'),
                text: [t('analysis-tarrif-2-text-1'), t('analysis-tarrif-2-text-2')],
            },
            {
                title: t('analysis-tarrif-3-title'),
                text: [t('analysis-tarrif-3-text-1'), t('analysis-tarrif-3-text-2')],
            },
            {
                title: t('analysis-tarrif-4-title'),
                text: [t('analysis-tarrif-4-text-1'), t('analysis-tarrif-4-text-2')],
            },
        ],
        [t]
    );
    return (
        <>
            <Steps
                data={stepsData}
                title={t('pre-project-analysis')!}
                description={t('pre-project-analysis-description')!}
            />
            <AdvantagesBlock data={advantagesData} title={t('advantages')!} button={false} />
            <ProjectsList title={t('example-of-same-work')} type='gallery' />
            <Tarrifs data={tarrifData} title={t('price-and-term')} />
            <Contacts />
        </>
    );
}
