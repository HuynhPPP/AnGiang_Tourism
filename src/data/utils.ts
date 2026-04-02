export const getImgUrl = (path: string) => new URL(`../assets/images/${path}`, import.meta.url).href;
export const getVideoUrl = (path: string) => new URL(`../assets/videos/${path}`, import.meta.url).href;
