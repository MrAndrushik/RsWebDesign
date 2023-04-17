import { FirstScreen } from '@components/MainPage/FirstScreen/FirstScreen';
import { OurMission } from '@components/MainPage/OurMission/OurMission';
import { Services } from '@components/MainPage/Services/Services';
import { AdvantagesBlock } from '@components/modules/Advantages/AdvantagesBlock/AdvantagesBlock';
import { Contacts } from '@components/modules/Contacts/Contacts';
import { FAQ } from '@components/modules/FAQ/FAQ';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { Questions } from '@components/modules/Questions/Questions';
import { Reviews } from '@components/modules/Reviews/Reviews';
import { Steps } from '@components/modules/Steps/Steps';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStepBlock } from 'types/types';

export default function MainPage() {
    const { t } = useTranslation();
    const stepsData: IStepBlock[] = useMemo(
        () => [
            { step: 1, text: t('main-steps-caption-1'), caption: t('main-steps-description-1') },
            { step: 2, text: t('main-steps-caption-2'), caption: t('main-steps-description-2') },
            { step: 3, text: t('main-steps-caption-3'), caption: t('main-steps-description-3') },
            { step: 4, text: t('main-steps-caption-4'), caption: t('main-steps-description-4') },
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

    return (
        <>
            <FirstScreen />
            <OurMission />
            <AdvantagesBlock
                button={true}
                data={advantagesData}
                title={t('our-advantages-title')!}
                subtitle={{ children: t('our-advantages'), style: { background: '#FFA220', color: '#fff' } }}
            />
            <Services />
            <Questions title={t('have-questions')} description={t('have-questions-description')} />
            <Steps data={stepsData} title={t('stages-of-development')!} description={t('step-description')!} />
            <ProjectsList type='fullScreen' title={t('projects')} />
            <Reviews />
            <Contacts />
            <FAQ />
        </>
    );
}
