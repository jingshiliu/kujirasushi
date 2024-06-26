import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import menu from "../../assets/menu.json";
import MenuSection from "./MenuSection.jsx";

import ExperienceSection from "./ExperienceSection.jsx";
import Welcome from "./Welcome.jsx";
import PdfMenu from "./PDFMenu.jsx";


const Menu = () => {
    return (
        <main className={" overflow-x-hidden "}>
            <Nav className={`text-slate-200`}/>
            <Welcome/>
            <section className={`py-32 px-20 lg:px-40 max-sm:px-10 tracking-wide bg-white` }>
                <PdfMenu/>
                <ExperienceSection/>
                <MenuSection id={'pacific_experience'} className={`text-xl`}
                             sectionMenu={menu.featured.pacific_experience}/>
                <MenuSection id={`appetizer`} sectionMenu={menu.menu.shareable_appetizers}/>
                <MenuSection id={`soup_salad`} sectionMenu={menu.menu.soup_salad}/>
                <MenuSection id={`kids_menu`} sectionMenu={menu.menu.kids_menu}/>
                <MenuSection id={`tempura_katsu`} sectionMenu={menu.menu.tempura_katsu}/>

                <MenuSection id={`teriyaki_bowl`} sectionMenu={menu.featured.teriyaki_bowl}/>
                <MenuSection id={`japanese_noodle_soup`}  sectionMenu={menu.featured.japanese_noodle_soup}/>

                <MenuSection id={`sushi`} sectionMenu={menu.menu.sushi}/>
                <MenuSection id={`roll`} sectionMenu={menu.menu.roll}/>
                <MenuSection id={`special_roll`} sectionMenu={menu.menu.special_roll}/>
                <MenuSection id={`desert`} sectionMenu={menu.menu.desert}/>

                <MenuSection id={'tokyo'} sectionMenu={menu.featured.tokyo_experience}/>
                <MenuSection id={`small_plates`} sectionMenu={menu.menu.small_plates}/>
                <MenuSection id={`tokyo_sushi`} sectionMenu={menu.menu.tokyo_sushi}/>
                <MenuSection id={`sashimi`} sectionMenu={menu.menu.sashimi}/>
                <MenuSection id={`tokyo_desert`} sectionMenu={menu.menu.tokyo_desert}/>

            </section>
            <Footer/>
        </main>
    );
};

export default Menu;