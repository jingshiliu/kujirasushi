import { GiSushis } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState} from "react";
import useScrolled from "../hook/useScrolled.js";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = ({className}) => {
    const [showMenu, setShowMenu] = useState(false);
    const scrolled = useScrolled()

    return (
        <header className={`lg:px-20 px-12 p-10 flex justify-between items-center fixed w-screen z-50 max-sm:h-[30px]
                            ${className}
                            ${scrolled && !showMenu? "bg-opacity-90 bg-slate-500":""}`}>
            <Link to="/#home" className={`z-20 ${scrolled? 'text-slate-200':''}`}>
                <h1 className={'flex items-center'}>
                    <GiSushis className={'w-10 h-10'}/>
                    <span className={'text-lg font-mono ml-2'}>
                    Kujira
                </span>
                </h1>
            </Link>
            <nav
                className={`text-base flex justify-between lg:space-x-14 font-light max-sm:hidden sm:space-x-8 items-center
                            ${scrolled? 'text-slate-200':''}
                            `}
            >
                <Link to="/#home">Home</Link>
                <Link to="/#about">About Us</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/#contact">Contact Us</Link>
            </nav>

            <button
                className={'sm:hidden object-contain w-8 z-20'}
                onClick={() => setShowMenu(!showMenu)}
            >
                <RxHamburgerMenu className={'w-full h-full'} />
            </button>

            {showMenu ? (
                <nav
                    className={`z-10 text-base flex flex-col justify-between text-slate-300 font-light sm:hidden items-center
                                absolute left-0 top-0 border-b w-full space-y-5 text-center animate__animated animate__fadeInDown
                                ${showMenu? "max-sm:bg-opacity-80 max-sm:bg-slate-500 translate-y-10 pt-20":""}`}
                >
                    <a className={'hover:text-slate-400'} href="/#home">Home</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400'} href="/#about">About Us</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400'} href="/menu">Menu</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400 pb-4'} href="/#contact">Contact Us</a>
                </nav>
            ) : <></>}
        </header>
    );
};

export default Nav;