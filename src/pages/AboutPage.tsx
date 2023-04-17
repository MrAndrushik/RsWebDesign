import { AboutProfile } from '@components/AboutPage/AboutProfile/AboutProfile';
import { AboutTop } from '@components/AboutPage/AboutTop/AboutTop';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { Questions } from '@components/modules/Questions/Questions';
import { Reviews } from '@components/modules/Reviews/Reviews';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <>
            <AboutTop />
            <AboutProfile />
            <ProjectsList title={t('our-projects')} type='gallery' />
            <Reviews />
            <Questions title={t('still-have-questions')} description={t('have-questions-description')} />
        </>
    );
}
