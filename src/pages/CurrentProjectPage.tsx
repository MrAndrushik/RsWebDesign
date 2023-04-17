import { ProjectGallery } from '@components/CurrentProjectPage/ProjectGallery/ProjectGallery';
import { ProjectSteps } from '@components/CurrentProjectPage/ProjectSteps/ProjectSteps';
import { ProjectTask } from '@components/CurrentProjectPage/ProjectTask/ProjectTask';
import { ProjectTechnicalPart } from '@components/CurrentProjectPage/ProjectTechnicalPart/ProjectTechnicalPart';
import { ProjectTop } from '@components/CurrentProjectPage/ProjectTop/ProjectTop';
import { Spinner } from '@components/UI/Spinner/Spinner';
import { Contacts } from '@components/modules/Contacts/Contacts';
import { useProjectsData } from '@hooks/useProjectsData';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function CurrentProjectPage() {
    const params = useParams<{ slug: string }>();
    const { data, isLoading } = useProjectsData();
    const currentData = useMemo(() => data.filter((project) => project.id === params.slug)[0], [data, params.slug]);

    if (isLoading) return <Spinner type='withHeader' />;
    if (!currentData)
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });

    return (
        <>
            <ProjectTop
                title={currentData.title}
                description={currentData.description}
                websiteLink={currentData.websiteLink}
                appStoreLink={currentData.appStoreLink}
                googlePlayLink={currentData.googlePlayLink}
                firstScreenImg={currentData.firstScreenImg}
                bgColor={currentData.bgColor}
                textColor={currentData.textColor}
            />
            <ProjectTask bgColor={currentData.bgColor} textColor={currentData.textColor} task={currentData.task} />
            <ProjectSteps steps={currentData.steps} bgColor={currentData.bgColor} textColor={currentData.textColor} />
            <ProjectGallery
                bgColor={currentData.bgColor}
                textColor={currentData.textColor}
                gallery={currentData.gallery}
            />
            <ProjectTechnicalPart
                bgColor={currentData.bgColor}
                textColor={currentData.textColor}
                technicalPart={currentData.technicalPart}
            />
            <Contacts />
        </>
    );
}
