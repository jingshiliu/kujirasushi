import MenuItemCard from "./MenuItemCard.jsx";

// eslint-disable-next-line react/prop-types
const MenuSection = ({sectionMenu}) => {
    // eslint-disable-next-line react/prop-types
    const {english_title, japanese_title, description, items} = sectionMenu;

    return (
        <section className={`mb-20`} >
            <div className={`mb-6`}>
                <h2 className={`font-bold text-4xl`}>
                    {english_title}
                </h2>

                <h2 className={`font-bold text-3xl`}>
                    {japanese_title}
                </h2>

                <p>
                    {description}
                </p>
            </div>
            <section className={`grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 w-auto gap-x-14 gap-y-20`}>
                {/* eslint-disable-next-line react/prop-types */}
                {items.map((item, index) =>
                    <MenuItemCard
                        menuItem={item}
                        imageWidth={400}
                        imageHeight={400}
                        key={index}
                    />
                )}
            </section>
        </section>
    );
};

export default MenuSection;