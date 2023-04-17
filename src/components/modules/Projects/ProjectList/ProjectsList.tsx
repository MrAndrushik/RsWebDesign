import { Spinner } from '@components/UI/Spinner/Spinner';
import { useProjectsData } from '@hooks/useProjectsData';
import { ProjectsFullScreen } from '../ProjectsFullScreen/ProjectsFullScreen';
import { ProjectsGallery } from '../ProjectsGallery/ProjectsGallery';
import { ProjectsGrid } from '../ProjectsGrid/ProjectsGrid';
import { Error } from '@components/UI/Error/Error';

interface ProjectsListProps {
    className?: string;
    type: 'fullScreen' | 'gallery' | 'grid';
    title: string;
}

export const ProjectsList = ({ className, type = 'gallery', title }: ProjectsListProps) => {
    const { data, isLoading, error } = useProjectsData();
    if (isLoading) return <Spinner type='withHeader' />;
    if (!data || error) return <Error>{`Error status: ${error}`}</Error>;

    switch (type) {
        case 'fullScreen':
            return <ProjectsFullScreen data={data} title={title} />;
        case 'gallery':
            return <ProjectsGallery data={data} title={title} />;
        case 'grid':
            return <ProjectsGrid data={data} title={title} />;
    }
};
