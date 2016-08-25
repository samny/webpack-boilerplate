export const RESIZE = 'RESIZE';
export function resize(window) {
    return {
        type: RESIZE,
        width: window.innerWidth,
        height: window.innerHeight
    };
}