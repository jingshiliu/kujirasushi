
const MenuItemCard = ({menuItem, className}) => {
    // eslint-disable-next-line react/prop-types
    const {title, japanese_title , description, price, image} = menuItem;
    if(className === undefined) className = "";

    return (
        <div className={`inline-block text-slate-700 ${className}`}>
            {image?
                (<img
                    className={`w-full object-cover rounded-lg shadow-xl my-4`}
                    loading={"lazy"}
                    src={`/images/${image}`}
                    alt={title}
                />)
                : null}
            {title?
                (<h3
                    className={`font-bold text-2xl `}
                >
                    {title}
                </h3>)
                : null}

            <div className={`flex justify-between w-full`}>
                {japanese_title?
                    <h3
                        className={`font-bold text-xl `}
                    >
                        {japanese_title}
                    </h3>
                    : null}

                {price?
                    <span className={`inline-block text-xl mr-2 justify-self-end`}>$ {price}</span>
                    : null}
            </div>

            {description?
                <p>{description}</p>
                : null}




        </div>
    );
};

export default MenuItemCard;