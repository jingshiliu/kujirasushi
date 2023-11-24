import Nav from "../../components/Nav.jsx";
import Welcome from "./Welcome.jsx";
import About from "./About.jsx";
const Home = () => {
    return (
        <main className={'text-slate-200 overflow-hidden'}>
            <Nav/>
            <Welcome/>
            <About/>
        </main>
    );
};

export default Home;