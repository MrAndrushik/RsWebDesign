/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
    readonly VITE_API_URL_PROJECTS: string;
    readonly VITE_API_URL_CATEGORIES: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
