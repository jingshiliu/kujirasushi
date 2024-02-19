import { VscClose } from "react-icons/vsc";
import {useMemo, useState} from "react";

const NotificationPopUp = () => {
    const shouldDisplay = useMemo(()=>{
        const lastDisplayedTime = localStorage.getItem('lastDisplayedTime')
        return lastDisplayedTime !== undefined && (Date.now() - lastDisplayedTime > 1000 * 60 * 60 * 24 * 7)
    }, [])

    const [isVisible, setIsVisible] = useState(shouldDisplay)
    const closePopUp = () => {
        localStorage.setItem('lastDisplayedTime', Date.now())
        setIsVisible(false)
    }

    const visibilityStyle = isVisible ? '' : 'hidden'

    return (
        <section className={`${visibilityStyle} fixed text-center z-50 md:top-1/4 top-1/2 left-1/2 max-md:w-3/4 -translate-x-1/2 -translate-y-1/2 max-[]`}>

            <button
                className={`absolute font-bold z-10 top-0 right-0 p-2 text-slate-700 hover:text-slate-500 transition duration-300 ease-in-out`}
                onClick={closePopUp}
            >
                <VscClose />
            </button>

            <div className={`px-10 py-4 animate__animated animate__fadeInDown bg-opacity-90 
                            shadow-md bg-slate-50 border rounded border-slate-300 shadow-slate-300 text-slate-700 `}>
                <h2 className={`font-bold text-xl`}>Note</h2>
                <ul>
                    <li>
                        <p>
                            Please make a reservation before you joining us for dinner. And reservation is highly
                            recommended. Walk in customer expecting waiting time between 30 to 60 mins. Thank you!
                        </p>
                    </li>
                    <li className={'mt-5'}>
                        <p>
                            Post Gazette wrote about us!
                        </p>
                        <a className={'inline-block mt-1 border border-slate-400 px-5 py-2 hover:bg-slate-400 hover:text-slate-50 transition duration-500 '}
                           href={'https://www.post-gazette.com/life/dining/2024/01/02/kujira-all-you-can-eat-sushi-shadyside-pittsburgh/stories/202312220079?fbclid=PAAaZxoBUx5LF9mH3iyloscdLenmT9fgLbB4OJxTsDsbKqGTZQ8yCN__F68hU_aem_AdN4-G0Yd27jKX7JxEcwkJX7CgN84UQ5aJ808zNLcnI-q9M0_0H3PBv2OuluBvWYO60'}
                           target={'_blank'}>
                            Let&apos;s read.
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default NotificationPopUp;