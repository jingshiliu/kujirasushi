import React, {useEffect, useState} from 'react';
import useOnScreen from "./useOnScreen.js";

const useOnScreenOnce = (ref, rootMargin='-10px') => {
    const isVisible = useOnScreen(ref, rootMargin);
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(()=>{
        if(isVisible && !animatedOnce){
            setAnimatedOnce(true);
        }
    }, [isVisible, animatedOnce]);
    return animatedOnce;
};

export default useOnScreenOnce;