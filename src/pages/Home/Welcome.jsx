import ScrollableNotification from "../../components/ScrollableNotification.jsx";


const Welcome = () => {
    return (
        <section className={'flex justify-center items-center h-screen text-slate-200 relative'}>
            <div className={'flex justify-center items-center flex-col'}>
                <div className={`mb-28 text-center animate__animated animate__fadeInDown`}>
                    <h1
                        className={'text-[60px] font-mono tracking-widest underline'}
                    >
                        Kujira
                    </h1>
                    <h4 className={'tracking-widest -translate-y-2 text-lg'}>Pittsburgh</h4>
                </div>

                <div className={'text-center space-y-4'}>
                    <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp block w-100`}
                       href={'https://order.toasttab.com/online/captain-sushi-shadyside-736-bellefonte-st'}
                       target={'_blank'}
                    >
                        Order Online
                    </a>
                    <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp block w-100`}
                       href={'https://tables.toasttab.com/restaurants/2753653b-5a1e-4668-8f46-6af4d49e50df/findTime'}
                       target={'_blank'}
                    >
                        Reservation
                    </a>
                    <a className={`text-slate-50 border px-10 py-4 border-slate-300 hover:bg-slate-200 hover:text-slate-500 
                                hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md shadow-slate-100 
                                bg-opacity-60 bg-slate-500 animate__animated animate__fadeInUp block mb-10 w-100`}
                       href={'https://tables.toasttab.com/restaurants/2753653b-5a1e-4668-8f46-6af4d49e50df/joinWaitlist'}
                       target={'_blank'}
                    >
                        Join Waitlist
                    </a>
                </div>
            </div>
            <ScrollableNotification/>
        </section>
    );
};

export default Welcome;