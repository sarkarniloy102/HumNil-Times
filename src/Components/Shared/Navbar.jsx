import { NavLink } from "react-router-dom";
// react icon
import { FaBlog, FaBlogger, FaNewspaper, FaXmark } from "react-icons/fa6";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {

    const [isBarOpen, setIsBarOpen] = useState(false);

    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    }
    // navitems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 bg-teal-700 text-zinc-200 z-50  shadow-lg">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-zinc-200 flex gap-1 items-center justify-center">
                    <FaNewspaper className="w-6 h-6 text-zinc-300" />       
                    <span>HumNil</span> <span className="text-orange-400">Times</span></a>

                {/* navitem for lg screen */}
                <ul className="hidden md:flex gap-12 text-lg">
                    {
                        navItems.map(({ path, link }) => (
                            <li key={path} className="text-zinc-300">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-400 underline underline-offset-4" : ""
                                    }
                                    to={path}>{link}</NavLink> </li>))
                    }
                </ul>
                {/* social icons */}
                <div className="text-zinc-100 hidden lg:flex gap-4 items-center ">

                    <a href="/" className="hover:text-blue-500"> <FaFacebook /> </a>
                    <a href="/" className="hover:text-purple-400"> <FaDribbble /> </a>
                    <a href="/" className="hover:text-blue-300"> <FaTwitter /> </a>

                    <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-zinc-300 hover:text-orange-700 cursor-pointer transition-all duration-300 ease-in">Log in</button>
                </div>

                {/* for small screen  */}
                <div className="md:hidden">
                    <button
                        onClick={toggleBar}
                        className="cursor-pointer">
                        {
                            isBarOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />
                        }
                    </button>
                </div>
            </nav>
            {/* nav items for small screen */}
            <div>
                <ul className={`md:hidden block space-y-3 px-4 py-6 mt-14 bg-zinc-300   gap-12 text-lg ${isBarOpen ? "fixed top-0 right-0 left-0 w-full transition-all duration-200 ease-out" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) => (
                            <li key={path} className="text-blue-950">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-400 underline underline-offset-4" : ""
                                    }
                                    onClick={toggleBar}
                                    to={path}>{link}</NavLink> </li>))
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;