
export const capitalize = (s) => s[0].toUpperCase() + s.substr(1);
export const toClass = (title) => title.toLowerCase().replace(' ', '-');
export const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
