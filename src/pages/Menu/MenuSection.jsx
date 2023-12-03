import MenuItemCard from "./MenuItemCard.jsx";

// eslint-disable-next-line react/prop-types
const MenuSection = ({sectionMenu, className="", id="", children}) => {
    // eslint-disable-next-line react/prop-types
    const {english_title, japanese_title, description, price, image, items} = sectionMenu;

    const isFeatured = items === undefined;

    return (
        <section id={id} className={`mb-20 ${className}`} >
            <div className={`mb-6`}>
                <h2 className={`font-bold text-4xl ${isFeatured? 'lg:text-6xl': ''}`}>
                    {english_title}
                </h2>

                <h2 className={`font-bold text-3xl ${isFeatured? 'lg:text-4xl': ''}`}>
                    {japanese_title}
                </h2>

                <div className={`flex max-2xl:flex-col justify-start items-center max-2xl:items-start 2xl:space-x-10 `}>
                    {image?
                        (<img
                            className={`object-cover rounded-lg shadow-xl my-4`}
                            loading={"lazy"}
                            src={`/images/${image}`}
                            alt={english_title}
                        />)
                        : null}


                    <div className={`w-200 space-y-10`}>
                        {description?
                            <p className={`block max-w-200 text-2xl max-w-100`}>
                                {description}
                            </p>: null}

                        {price?
                            <span className={`block text-2xl`}>$ {price}</span>
                            : null}
                    </div>
                </div>
            </div>
            <section className={`grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 w-auto gap-x-14 gap-y-20`}>
                {/* eslint-disable-next-line react/prop-types */}
                {items? items.map((item, index) =>
                    <MenuItemCard
                        menuItem={item}
                        imageWidth={400}
                        imageHeight={400}
                        key={index}
                    />
                ): null}
            </section>
            {children}
        </section>
    );
};

export default MenuSection;