import Background from "../../components/Background.jsx";
import BackGroundImage from "../../assets/images/mahmoud-fawzy-YnVaHqgpPLA-unsplash.jpg";
import ScrollableNotification from "../../components/ScrollableNotification.jsx";

const Welcome = () => {
    return (
        <section className={`flex justify-center items-center h-screen text-slate-200 relative`}>
            <Background className={'overflow-hidden brightness-75 fixed'} image={BackGroundImage}/>

            <div className={'flex justify-center items-center flex-col'}>
                <div className={`mb-28 text-center animate__animated animate__fadeInDown`}>
                    <h1
                        className={'text-[60px] font-mono tracking-widest underline'}
                    >
                        Menu
                    </h1>
                    <h4 className={'tracking-widest -translate-y-2 text-lg'}>Kujira</h4>
                </div>

                <ScrollableNotification/>
            </div>
        </section>
    );
};

export default Welcome;