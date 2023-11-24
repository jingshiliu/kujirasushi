import {useRef} from "react";
import useOnScreenOnce from "../hook/useOnScreenOnce.js";

// eslint-disable-next-line react/prop-types
const AnimateOnce = ({className, animation, children, rootMargin='-10px'}) => {
    const ref = useRef(null)
    const hasAnimated = useOnScreenOnce(ref, rootMargin)
    if(className === undefined) className = ''
    if(animation === undefined) animation = ''

    return (
        <section ref={ref} className={`${className} ${hasAnimated? animation: ""}`}>
            {children}
        </section>
    );
};

export default AnimateOnce;