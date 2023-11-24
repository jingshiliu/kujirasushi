import Nav from "../../components/Nav.jsx";
import Welcome from "./Welcome.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
const Home = () => {
    return (
        <main id={'home'} className={'text-slate-200 overflow-x-hidden'}>
            <Nav />
            <Welcome/>
            <About/>
            <Contact />
        </main>
    );
};

export default Home;