export const scrollToHash = (hash) => {
    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
    }
};

/**
 *
 * @returns {Promise< image >}
 * @param imageName
 */
export const fetchAsset = async (imageName) => {
    try{
        const response = await import(`./assets/images/${imageName}`)
        return response.default
    }catch (err){
        console.error('Error on importing images from: ' + imageName)
        throw err
    }
}
