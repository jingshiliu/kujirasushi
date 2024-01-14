import Nav from "../../components/Nav.jsx";
import Welcome from "./Welcome.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "../../components/Footer.jsx";
import {useEffect} from "react";
import {scrollToHash} from "../../util.js";
import {useLocation} from "react-router-dom";
import Background from "../../components/Background.jsx";
import HomeBackgroundImage from "../../assets/images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg";
import NotificationPopUp from "./NotificationPopUp.jsx";
const Home = () => {
    const location = useLocation()

    useEffect(()=>{
        scrollToHash(location.hash)
    }, [location.hash])
    return (
        <main id={'home'} className={'text-slate-200 overflow-x-hidden'}>
            <Nav />
            <Background className={'overflow-hidden brightness-75 fixed'} image={HomeBackgroundImage}/>
            <NotificationPopUp />
            <Welcome/>
            <About/>
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;