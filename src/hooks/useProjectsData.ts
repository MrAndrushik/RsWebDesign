import { ProjectsContext } from '@components/layout/Providers/ProjectsProvider';
import { useContext } from 'react';

export const useProjectsData = () => {
    const { data, isLoading, categories, error } = useContext(ProjectsContext);
    return { data, isLoading, categories, error };
};
