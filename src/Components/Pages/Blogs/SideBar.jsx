/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const SideBar = () => {
    const [popularNews, setPopularNews] = useState([]);

    useEffect(() => {
        async function fetchPopularNews() {
            try {
                const response = await axios.get(
                    "https://hum-nil-times-server.vercel.app/blogs"
                );
                // take first 15 items
                setPopularNews(response.data.slice(0, 15));
            } catch (err) {
                console.error("Error fetching popular news:", err);
            }
        }

        fetchPopularNews();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Latest news */}
            <div>
                <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl font-semibold px-4 text-teal-800 mb-4"
                >
                    Latest News
                </motion.h3>
                <div>
                    {popularNews.slice(0, 5).map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="my-5 border-b border-gray-200 px-4 pb-4"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                            <h4 className="font-medium mb-2 text-gray-800 leading-tight">
                                {blog.title}
                            </h4>
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="text-base hover:text-teal-600 inline-flex items-center text-zinc-500 font-medium transition-colors duration-200"
                            >
                                Read now
                                <motion.span
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaRegArrowAltCircleRight className="ml-2" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Popular news */}
            <div>
                <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-2xl font-semibold px-4 text-teal-800 mb-4 mt-8"
                >
                    Popular News
                </motion.h3>
                <div>
                    {popularNews.slice(6, 10).map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            className="my-5 border-b border-gray-200 px-4 pb-4"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                            <h4 className="font-medium mb-2 text-gray-800 leading-tight">
                                {blog.title}
                            </h4>
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="text-base hover:text-teal-600 inline-flex items-center text-zinc-500 font-medium transition-colors duration-200"
                            >
                                Read now
                                <motion.span
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaRegArrowAltCircleRight className="ml-2" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SideBar;