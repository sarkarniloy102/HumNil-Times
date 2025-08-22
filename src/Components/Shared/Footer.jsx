import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-teal-950 text-white pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Brand section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <BiNews className="text-teal-400 text-3xl mr-2" />
                            <h3 className="text-2xl font-bold text-teal-400">HumNil Times</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Delivering quality journalism and insightful perspectives on the world's most important stories.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-teal-900">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-teal-900">
                                <FaTwitter size={16} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-teal-900">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-teal-900">
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links and categoris */}
                    <div className='grid grid-cols-2 justify-around items-center'>
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-teal-300 flex items-center">
                                <IoIosSend className="mr-2" /> Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Categories
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Latest News
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Categories */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-teal-300 flex items-center">
                                <BiNews className="mr-2" /> Categories
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Politics
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Technology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Business
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Culture
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        Science
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>




                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-teal-300 flex items-center">
                            <FaEnvelope className="mr-2" /> Stay Updated
                        </h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors flex items-center justify-center"
                            >
                                Subscribe <IoIosSend className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright and bottom links */}
                <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} HumNil Times. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;