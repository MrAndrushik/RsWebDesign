import { Steps } from '@components/modules/Steps/Steps';
import { IStepBlock, ITarrif } from 'types/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AdvantagesBlock } from '@components/modules/Advantages/AdvantagesBlock/AdvantagesBlock';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { Tarrifs } from '@components/modules/Tarrifs/Tarrifs';
import { Contacts } from '@components/modules/Contacts/Contacts';

export default function DesignPage() {
    const { t } = useTranslation();
    const stepsData: IStepBlock[] = useMemo(
        () => [
            { step: 1, text: t('design-steps-description-1'), caption: t('design-steps-caption-1') },
            { step: 2, text: t('design-steps-description-2'), caption: t('design-steps-caption-2') },
            { step: 3, text: t('design-steps-description-3'), caption: t('design-steps-caption-3') },
            { step: 4, text: t('design-steps-description-4'), caption: t('design-steps-caption-4') },
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
                title: t('design-tarrif-1-title'),
                text: [t('design-tarrif-1-text-1'), t('design-tarrif-1-text-2')],
            },
            {
                title: t('design-tarrif-2-title'),
                text: [t('design-tarrif-2-text-1'), t('design-tarrif-2-text-2')],
            },
            {
                title: t('design-tarrif-3-title'),
                text: [t('design-tarrif-3-text-1'), t('design-tarrif-3-text-2')],
            },
            {
                title: t('design-tarrif-4-title'),
                text: [t('design-tarrif-4-text-1'), t('design-tarrif-4-text-2')],
            },
        ],
        [t]
    );
    return (
        <>
            <Steps
                titleTag={'h1'}
                color={'#00DFCE'}
                data={stepsData}
                title={t('design')!}
                description={t('design-description')!}
            />
            <AdvantagesBlock data={advantagesData} title={t('advantages')!} button={false} />
            <ProjectsList title={t('example-of-same-work')} type='gallery' />
            <Tarrifs data={tarrifData} title={t('price-and-term')} />
            <Contacts />
        </>
    );
}
