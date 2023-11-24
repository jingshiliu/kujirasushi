import {useRef} from "react";
import useAnimatedOnce from "../hook/useAnimatedOnce.js";

// eslint-disable-next-line react/prop-types
const AnimateOnce = ({className, animation, children}) => {
    const ref = useRef(null)
    const hasAnimated = useAnimatedOnce(ref)
    if(className === undefined) className = ''
    if(animation === undefined) animation = ''

    return (
        <div ref={ref} className={`${className} ${hasAnimated? animation: ""}`}>
            {children}
        </div>
    );
};

export default AnimateOnce;