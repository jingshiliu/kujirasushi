
// eslint-disable-next-line react/prop-types
const Background = ({image, className}) => {
    return (
        <div className={`absolute left-0 top-0 w-full h-full ${className}`}>
            <img className={'object-cover w-full h-full'} src={image} alt="background image "/>
        </div>
    );
};

export default Background;