import Nav from '../../components/Nav.jsx'
import Background from '../../components/Background.jsx'
import BackgroundImage from '../../assets/images/ambitious-studio-rick-barrett-UyF3Tal_KXw-unsplash.jpg'
import ScrollableNotification from '../../components/ScrollableNotification.jsx'
import specialMenu from '../../assets/special_menu.json'
import Footer from '../../components/Footer.jsx'

function SpecialMenu() {
    return (
        <>
            <Nav className={'text-slate-200'} />
            <Background image={BackgroundImage} className={'brightness-75'} />
            <main className={'overflow-x-hidden'}>
                <section
                    className={
                        'flex justify-center items-center w-screen h-screen font-mono  text-slate-200 overflow-x-hidden'
                    }
                >
                    <div
                        className={`mb-28 text-center animate__animated animate__fadeInDown`}
                    >
                        <h1
                            className={
                                'text-[60px] font-mono tracking-widest underline'
                            }
                        >
                            Special Menu
                        </h1>
                        <h4
                            className={'tracking-widest -translate-y-2 text-lg'}
                        >
                            Kujira
                        </h4>
                    </div>
                    <ScrollableNotification />
                </section>
                `
                <section className={'w-screen flex justify-center'}>
                    <div className={'container flex flex-col justify-center'}>
                        {specialMenu.menu.map((menuPage) => {
                            return (
                                <img
                                    className={'w-full mb-10'}
                                    src={`/images/${menuPage}`}
                                    alt=""
                                />
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SpecialMenu
