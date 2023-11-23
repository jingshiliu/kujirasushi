import Background from "../components/Background.jsx";
import HomeBackgroundImage from '../assets/images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg';
import Nav from "../components/Nav.jsx";
import KujiraSushiMenu  from '../assets/kujirasushi.pdf'
const Home = () => {
    return (
        <main className={'relative overscroll-x-hidden h-screen'}>
            <Nav/>
            <div className={'flex justify-center items-center h-screen'}>
                <Background className={' overflow-hidden -z-10 brightness-75  max-md:scale-80'} image={HomeBackgroundImage}/>

                <a className={'text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 hover:bg-opacity-90 transition duration-300 ease-in-out rounded-lg shadow-md shadow-slate-100 bg-opacity-60 bg-slate-500'}
                   href={KujiraSushiMenu}
                   target={'_blank'}
                >
                    See Menu
                </a>
            </div>
        </main>
    );
};

export default Home;