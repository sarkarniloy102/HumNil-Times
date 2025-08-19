import { NavLink } from "react-router-dom";
// react icon
import { } from "react-icons/fa6";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";


const Navbar = () => {
    // navitems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]

    return (
        <header className="bg-blue-950 text-zinc-200">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-zinc-200">HumNil <span className="text-orange-400">Times</span></a>

                {/* navitem for lg screen */}
                <ul className="hidden md:flex gap-12 text-lg">
                    {
                        navItems.map(({ path, link }) => (
                            <li key={path} className="text-zinc-300">
                                <NavLink to={path}>{link}</NavLink> </li>))
                    }
                </ul>
                {/* menu icons */}
                <div className="text-zinc-100 hidden lg:flex gap-4 items-center ">

                    <a href="/" className="hover:text-blue-500"> <FaFacebook /> </a>
                    <a href="/" className="hover:text-purple-400"> <FaDribbble /> </a>
                    <a href="/" className="hover:text-blue-300"> <FaTwitter /> </a>

                    <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-zinc-300 hover:text-orange-700 cursor-pointer transition-all duration-300 ease-in">Log in</button>
                </div>

                
            </nav>
        </header>
    );
};

export default Navbar;