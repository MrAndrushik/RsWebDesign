import { Contacts } from '@components/modules/Contacts/Contacts';
import { ProjectsList } from '@components/modules/Projects/ProjectList/ProjectsList';
import { useTranslation } from 'react-i18next';

export default function ProjectsPage() {
    const { t } = useTranslation();

    return (
        <>
            <ProjectsList titleTag={'h1'} cardTitleTag={'h2'} type='grid' title={t('our-projects')} />
            <Contacts />
        </>
    );
}
