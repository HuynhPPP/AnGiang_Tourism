export const getImgUrl = (path: string) => new URL(`../assets/images/${path}`, import.meta.url).href;
export const getImgUrls = (...paths: string[]) => paths.map(path => getImgUrl(path));
export const getVideoUrl = (path: string) => new URL(`../assets/videos/${path}`, import.meta.url).href;
