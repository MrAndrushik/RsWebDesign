import { ServicesTop } from '@components/ServicesPage/ServicesTop/ServicesTop';
import { Contacts } from '@components/modules/Contacts/Contacts';
import { FAQ } from '@components/modules/FAQ/FAQ';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { Steps } from '@components/modules/Steps/Steps';
import { Tarrifs } from '@components/modules/Tarrifs/Tarrifs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStepBlock, ITarrif } from 'types/types';

export default function ServicesPage() {
    const { t } = useTranslation();
    const stepsData: IStepBlock[] = useMemo(
        () => [
            { step: 1, text: t('services-steps-description-1'), caption: t('services-steps-caption-1') },
            { step: 2, text: t('services-steps-description-2'), caption: t('services-steps-caption-2') },
            { step: 3, text: t('services-steps-description-3'), caption: t('services-steps-caption-3') },
            { step: 4, text: t('services-steps-description-4'), caption: t('services-steps-caption-4') },
        ],
        [t]
    );

    const tarrifData: ITarrif[] = useMemo(
        () => [
            {
                title: t('services-tarrif-1-title'),
                text: [t('services-tarrif-1-text-1'), t('services-tarrif-1-text-2')],
            },
            {
                title: t('services-tarrif-2-title'),
                text: [t('services-tarrif-2-text-1'), t('services-tarrif-2-text-2')],
            },
            {
                title: t('services-tarrif-3-title'),
                text: [t('services-tarrif-3-text-1'), t('services-tarrif-3-text-2')],
            },
            {
                title: t('services-tarrif-4-title'),
                text: [t('services-tarrif-4-text-1'), t('services-tarrif-4-text-2')],
            },
        ],
        [t]
    );

    return (
        <>
            <ServicesTop />
            <Steps color={'#D66300'} data={stepsData} title={t('services-steps-title')!} />
            <ProjectsList title={t('services-our-results')} type='gallery' />
            <Tarrifs title={t('service-tarrif-title')} data={tarrifData} />
            <Contacts />
            <FAQ />
        </>
    );
}
