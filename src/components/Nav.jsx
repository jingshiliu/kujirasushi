import { GiSushis } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="xl:px-36 lg:px-20 px-12 p-10  flex justify-between items-center fixed w-screen">
            <h1 className={'flex items-center text-slate-100'}>
                <GiSushis className={'w-10 h-10'}/>
                <span className={'text-lg font-mono ml-2'}>
                    Kujira
                </span>
            </h1>
            <nav
                className={'text-base flex justify-between lg:space-x-14 text-slate-300 font-light max-sm:hidden sm:space-x-8 items-center'}
            >
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Menu</a>
                <a href="">Contact Us</a>
            </nav>

            <button
                className={'sm:hidden object-contain w-8 text-slate-200'}
                onClick={() => setShowMenu(!showMenu)}
            >
                <RxHamburgerMenu className={'w-full h-full'} />
            </button>

            {showMenu ? (
                <nav
                    className={'text-base flex flex-col justify-between text-slate-300 font-light md:hidden items-center absolute left-0 top-2/3 border-b-2 w-full space-y-5 text-center '}
                >
                    <a href="">Home</a>
                    <a className={'w-1/3 border-t-2 border-slate-500 pt-4 hover:text-slate-400'} href="">About Us</a>
                    <a className={'w-1/3 border-t-2 border-slate-500 pt-4 hover:text-slate-400'} href="">Menu</a>
                    <a className={'w-1/3 border-t-2 border-slate-500 pt-4 hover:text-slate-400 pb-4'} href="">Contact Us</a>
                </nav>
            ) : <></>}
        </header>
    );
};

export default Nav;