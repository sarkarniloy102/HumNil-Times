/* eslint-disable no-unused-vars */
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from "../../Shared/MotionVarient";


const BlogCard = ({ blogs, currentPage, selectedCategory, BlogPerPage }) => {

    const filteredBlogs = blogs
        .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
        .slice((currentPage - 1) * BlogPerPage, currentPage * BlogPerPage)

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
        >
            {
                filteredBlogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        variants={scaleIn}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="p-5 shadow-lg rounded cursor-pointer bg-white border border-gray-100"
                    >
                        <Link to={`/blogs/${blog.id}`} className="block">
                            <div className="overflow-hidden rounded-t-lg">
                                <motion.img
                                    src={blog.image}
                                    alt="blog image"
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2 hover:text-teal-700 transition-colors duration-200">
                                    {blog.title}
                                </h3>
                                <p className="mb-2 text-gray-600 flex items-center">
                                    <FaUser className="mr-2" />
                                    {blog.author}
                                </p>
                                <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))
            }
        </motion.div>
    );
};

export default BlogCard;