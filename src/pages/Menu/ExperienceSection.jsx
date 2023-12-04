import MenuSection from "./MenuSection.jsx";
import menu from "../../assets/menu.json";
import {scrollToHash} from "../../util.js";
import {FaArrowRightLong} from "react-icons/fa6";

const ExperienceSection = () => {
    return (
        <section className={'grid gap-10  2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 w-auto sm:gap-x-14'}>
            <MenuSection
                className={`border shadow-2xl p-4 rounded-lg`}
                sectionMenu={menu.featured.pacific_experience}
            >
                <button
                    className={'flex items-center border-2 py-4 px-6 hover:bg-slate-500 hover:text-white transition-colors duration-200'}
                    onClick={() => {scrollToHash('#pacific_experience')}}
                >
                    Go Check Out <FaArrowRightLong className={'inline-block ml-4'}/>
                </button>
            </MenuSection>

            <MenuSection
                className={`border shadow-2xl p-4 rounded-lg`}
                sectionMenu={menu.featured.tokyo_experience}
            >
                <button
                    className={'flex items-center border-2 py-4 px-6 hover:bg-slate-500 hover:text-white transition-colors duration-200'}
                    onClick={() => {scrollToHash('#tokyo')}}
                >
                    Go Check Out <FaArrowRightLong className={'inline-block ml-4'}/>
                </button>
            </MenuSection>

            <MenuSection
                className={`border shadow-2xl p-4 rounded-lg`}
                sectionMenu={menu.featured.ryukyu_experience}
            />
            <MenuSection
                className={`border shadow-2xl p-4 rounded-lg`}
                sectionMenu={menu.featured.omakase}
            />
        </section>
    );
};

export default ExperienceSection;