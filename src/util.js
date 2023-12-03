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
    let url;
    if (isLocalhost()) {
        url = `src/assets/images/${imageName}`;
    } else {
        url = `assets/images/${imageName}`;
    }
    if (source === 'netlify') {
        return getNetlifyImageCDNUrl(url, width, height, fit);
    }
    return url;
}

const isLocalhost = () => {
    return  window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1' ||
            window.location.hostname === '::1';
}