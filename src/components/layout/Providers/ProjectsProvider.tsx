import { ReactNode, createContext, useEffect, useState } from 'react';
import { ProjectType } from 'types/types';

interface ProjectsContextType {
    data: ProjectType[];
    categories: string[];
    isLoading: boolean;
    error?: number;
}

const defaultValue: ProjectsContextType = {
    data: [],
    categories: [],
    isLoading: false,
};

interface ProjectsProviderProps {
    children: ReactNode;
}

export const ProjectsContext = createContext<ProjectsContextType>(defaultValue);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<ProjectType[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [error, setError] = useState<number>();

    useEffect(() => {
        setIsLoading(true);

        Promise.allSettled<[ProjectType[], string[]]>([
            fetch(`${import.meta.env.VITE_API_URL_PROJECTS}`).then((res) => {
                if (res.ok) {
                    return res.json();
                } else setError(res.status);
            }),
            fetch(`${import.meta.env.VITE_API_URL_CATEGORIES}`).then((res) => {
                if (res.ok) {
                    return res.json();
                } else setError(res.status);
            }),
        ])
            .then(([fetchedData, fetchedCategories]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: error message
                setData(fetchedData.value as ProjectType[]);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: error message
                setCategories(fetchedCategories.value as string[]);
            })
            .then(() => setIsLoading(false));
    }, []);

    return (
        <ProjectsContext.Provider value={{ data, isLoading, categories, error }}>{children}</ProjectsContext.Provider>
    );
};
