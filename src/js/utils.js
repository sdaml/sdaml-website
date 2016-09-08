export const capitalize = function(s) {
    return s[0].toUpperCase() + s.substr(1);
};

export const toClass = function(title) {
    return title.toLowerCase().replace(' ', '-');
};
