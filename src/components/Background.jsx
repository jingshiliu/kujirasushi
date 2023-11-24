
// eslint-disable-next-line react/prop-types
const Background = ({image, className}) => {
    if (className === undefined) className = '';

    return (
        <div className={`-z-10 absolute left-0 top-0 w-full h-full ${className}`}>
            <img className={'object-cover w-full h-full'} src={image} alt="background image "/>
        </div>
    );
};

export default Background;