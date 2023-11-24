import { GiSushis } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";

const Nav = ({className}) => {
    const [showMenu, setShowMenu] = useState(false);
    if (className === undefined) className = '';
    return (
        <header className={`lg:px-20 px-12 p-10 flex justify-between items-center fixed w-screen z-50 ${className}`}>
            <a href="#home" className={'z-20'}>
                <h1 className={'flex items-center text-slate-100'}>
                    <GiSushis className={'w-10 h-10'}/>
                    <span className={'text-lg font-mono ml-2'}>
                    Kujira
                </span>
                </h1>
            </a>
            <nav
                className={'text-base flex justify-between lg:space-x-14 text-slate-300 font-light max-sm:hidden sm:space-x-8 items-center'}
            >
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="">Menu</a>
                <a href="">Contact Us</a>
            </nav>

            <button
                className={'sm:hidden object-contain w-8 text-slate-200 z-20'}
                onClick={() => setShowMenu(!showMenu)}
            >
                <RxHamburgerMenu className={'w-full h-full'} />
            </button>

            {showMenu ? (
                <nav
                    className={`z-10 text-base flex flex-col justify-between text-slate-300 font-light sm:hidden items-center
                                absolute left-0 top-0 border-b w-full space-y-5 text-center animate__animated animate__fadeInDown
                                ${showMenu? "max-sm:bg-opacity-80 max-sm:bg-slate-700 translate-y-10 pt-20":""}`}
                >
                    <a className={'hover:text-slate-400'} href="#home">Home</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400'} href="#about">About Us</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400'} href="">Menu</a>
                    <a className={'w-1/3 border-t border-slate-500 pt-4 hover:text-slate-400 pb-4'} href="">Contact Us</a>
                </nav>
            ) : <></>}
        </header>
    );
};

export default Nav;