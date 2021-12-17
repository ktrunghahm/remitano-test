export function extractId(url: string) {
    const eqIndex = url.indexOf('=');
    return url.substring(eqIndex + 1);
}