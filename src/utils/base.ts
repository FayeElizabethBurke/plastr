// Strips trailing slash so hrefs can be written as `${b}/` or `${b}/#section`
export const b = import.meta.env.BASE_URL.replace(/\/$/, '');
