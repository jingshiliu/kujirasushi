import KujiraSushiMenu  from '../../assets/kujirasushi.pdf'
import LunchMenu  from '../../assets/lunch_menu.pdf'


const Welcome = () => {
    return (
        <section className={'flex justify-center items-center h-screen text-slate-200'}>

            <div className={'flex justify-center items-center flex-col'}>
                <div className={`mb-28 text-center animate__animated animate__fadeInDown`}>
                    <h1
                        className={'text-[60px] font-mono tracking-widest underline'}
                    >
                        Kujira
                    </h1>
                    <h4 className={'tracking-widest -translate-y-2 text-lg'}>Pittsburgh</h4>
                </div>

                <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp block mb-10 w-100`}
                   href={KujiraSushiMenu}
                   target={'_blank'}
                >
                    Full Menu
                </a>

                <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp`}
                   href={LunchMenu}
                   target={'_blank'}
                >
                    Lunch Menu
                </a>
            </div>
        </section>
    );
};

export default Welcome;