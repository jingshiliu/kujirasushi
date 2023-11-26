export const scrollToHash = (hash) => {
    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
    }
};