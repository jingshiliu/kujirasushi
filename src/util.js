export const scrollToHash = (hash) => {
    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
    }
};

export const getNetlifyImageCDNUrl = (url, width=800, height=600, fit = 'cover') => {
    return `/.netlify/images?url=${url}&w=${width}&h=${height}&fit=${fit}`
}


export const getImageUrl = (imageName, width=800, height=600, fit = 'cover', source='netlify') => {
    // before deploy to netlify, change url to `assets/images/${imageName}`
    const url = `src/assets/images/${imageName}`;
    if (source === 'netlify') {
        return getNetlifyImageCDNUrl(url, width, height, fit);
    }
    return url;
}