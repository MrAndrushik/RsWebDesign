export const useMobile = (): { isMobile: boolean } => {
    const res = document.documentElement.clientWidth;

    if (res > 1024) return { isMobile: false };
    return { isMobile: true };
};
