// GLOBALS
export type ValueOf<T> = T[keyof T];
export interface IStepBlock {
    step: number;
    text: string;
    caption: string;
}
export interface ITarrif {
    title: string;
    text: string[];
}

// PROJECTS
export interface ProjectType {
    id: string;
    bgColor: string;
    projectCategories?: string[];
    textColor: string;
    title: string;
    description: string;
    firstScreenImg: string;
    previewImg: string;
    googlePlayLink?: string;
    appStoreLink?: string;
    websiteLink?: string;
    task: string;
    steps: ProjectStep[];
    gallery: ProjectGallery;
    technicalPart: ProjectTechnicalPart[];
}

export interface ProjectStep {
    title: string;
    description: string[];
}

export interface ProjectGallery {
    title: string;
    description: string;
    images: string[];
}

export interface ProjectTechnicalPart {
    name: string;
    value: string;
}
