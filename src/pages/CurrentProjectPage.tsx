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
    const currentData = useMemo(() => data.filter((project) => project.title === params.slug)[0], [data, params.slug]);

    if (isLoading) return <Spinner type='withHeader' />;

    if (!currentData && !isLoading) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        });
    }

    return (
        <>
            <ProjectTop
                title={currentData.title}
                short_description={currentData.short_description}
                web_link={currentData.web_link}
                app_store_link={currentData.app_store_link}
                google_play_link={currentData.google_play_link}
                header_image={currentData.header_image}
                bg_color={currentData.bg_color}
                bg_text_color={currentData.bg_text_color}
            />
            <ProjectTask
                bg_color={currentData.bg_color}
                bg_text_color={currentData.bg_text_color}
                long_description={currentData.long_description}
            />
            <ProjectSteps
                stages={currentData.stages}
                bg_color={currentData.bg_color}
                bg_text_color={currentData.bg_text_color}
            />
            <ProjectGallery
                bg_color={currentData.bg_color}
                bg_text_color={currentData.bg_text_color}
                images={currentData.images}
            />
            {currentData.tech && (
                <ProjectTechnicalPart
                    bg_color={currentData.bg_color}
                    bg_text_color={currentData.bg_text_color}
                    tech={currentData.tech}
                />
            )}
            <Contacts />
        </>
    );
}
