import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="w-24">
                    <img src={headerLogo} alt="Logo" width={120} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-none text-lg text-slate-gray">
                                {item.label}
                            </a>
                        </li>

                    ))}
                </ul>
                <p className="font-montserrat leading-none text-slate-700 text-lg cursor-pointer max-lg:hidden padding-x">Explore Now</p>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="Menu" width={24} height={24} />
                </div>
            </nav>
        </header>
    )
};

export default Nav;
