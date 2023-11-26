import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section
            className={`bg-[#003049] h-[300px] flex items-center justify-center md:space-x-28 tracking-widest` }
        >
            <Link className={`text-center`} to={"/#home"}>
                <h1
                    className={'text-[40px] font-mono tracking-widest underline'}
                >
                    Kujira
                </h1>
                <h4 className={'tracking-widest -translate-y-2 text-sm'}>Pittsburgh</h4>
            </Link>

            <ul className={`flex items-center md:space-x-14`}>
                <li>
                    <Link to={'/#home'}>Home</Link>
                </li>
                <li><Link to={"#about"}>About</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/#contact'}>Contact</Link></li>
            </ul>

            <a
                className={`hover:underline hover:cursor-pointer hover:text-slate-400`}
                target={'_blank'}
                href={"https://www.google.com/maps/place/736+Bellefonte+St,+Pittsburgh,+PA+15232/@40.451308,-79.9341518,17z/data=!4m6!3m5!1s0x8834f2111db3ddcd:0x1ae321dd70615799!8m2!3d40.451308!4d-79.9341518!16s%2Fg%2F11bw3yrbt6?source=lnms"}
            >
                <p>
                    736 Bellefonte St <br/>
                    Pittsburgh <br/>
                    PA 15232
                </p>
            </a>

        </section>
    );
};

export default Footer;