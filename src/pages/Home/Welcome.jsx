import HomeBackgroundImage from '../../assets/images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg';
import Background from "../../components/Background.jsx";
import KujiraSushiMenu  from '../../assets/kujirasushi.pdf'
const Welcome = () => {
    return (
        <section className={'flex justify-center items-center h-screen text-slate-200'}>
            <Background className={'overflow-hidden brightness-75'} image={HomeBackgroundImage}/>

            <div className={'flex justify-center items-center flex-col'}>
                <h1
                    className={'text-[60px] mb-32 animate__animated animate__fadeInDown font-mono'}
                >
                    Kujira
                </h1>
                <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp`}
                   href={KujiraSushiMenu}
                   target={'_blank'}
                >
                    See Menu
                </a>
            </div>
        </section>
    );
};

export default Welcome;