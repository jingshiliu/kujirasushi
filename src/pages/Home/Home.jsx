import Background from "../components/Background.jsx";
import HomeBackgroundImage from '../assets/images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg';
import Nav from "../components/Nav.jsx";
import KujiraSushiMenu  from '../assets/kujirasushi.pdf'
const Home = () => {
    return (
        <main className={'relative overscroll-x-hidden h-screen'}>
            <Nav/>
            <section className={'flex justify-center items-center h-screen text-slate-200'}>
                <Background className={' overflow-hidden -z-10 brightness-75  max-md:scale-80'} image={HomeBackgroundImage}/>


                <div className={'flex justify-center items-center flex-col'}>
                    <h1
                        className={'text-[60px] mb-32 animate__animated animate__fadeInDown font-mono'}
                    >
                        Kujira
                    </h1>
                    <a className={'text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 bg-opacity-60 bg-slate-500'}
                       href={KujiraSushiMenu}
                       target={'_blank'}
                    >
                        See Menu
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;