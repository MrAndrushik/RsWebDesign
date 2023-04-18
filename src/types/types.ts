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
// export interface ProjectType {
//     id: string;
//     bgColor: string;
//     categories: string[];
//     textColor: string;
//     title: string;
//     description: string;
//     firstScreenImg: string;
//     previewImg: string;
//     googlePlayLink?: string;
//     appStoreLink?: string;
//     websiteLink?: string;
//     task: string;
//     steps: ProjectStep[];
//     gallery: ProjectGallery;
//     technicalPart: ProjectTechnicalPart[];

// }

// export interface ProjectStep {
//     title: string;
//     description: string[];
// }

// export interface ProjectGallery {
//     title: string;
//     description: string;
//     images: string[];
// }

// export interface ProjectTechnicalPart {
//     name: string;
//     value: string;
// }

export interface ProjectType {
    id: string;
    categories: string[];
    title: string;
    short_description: string;
    long_description: string;
    preview_image: string;
    header_image: string;
    app_store_link: string;
    google_play_link: string;
    bg_color: string;
    bg_text_color: string;
    stages: Stage[];
    images: Images;
    tech?: Tech;
    web_link?: string;
}

export interface Stage {
    title: string;
    content: string[];
}

export interface Images {
    title: string;
    description: string;
    links: string[];
}

export interface Tech {
    title: string;
    items: TechItem[];
}

export interface TechItem {
    title: string;
    value: string;
}

export interface ProjectCategory {
    id: string;
    title: string;
}
