/* eslint-disable no-unused-vars */
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingParticles from "../../Shared/FloatingParticle";
import SideBar from "./SideBar";

const SingleBlogDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { title, image, category, author, published_date, reading_time, content } = data[0];

    return (
        <div className="mt-16">
            {/* Banner Section */}
            <div className="relative py-16 bg-gradient-to-r from-teal-50 to-teal-100 border-b border-teal-200">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-4 mb-6">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center text-teal-700 hover:text-teal-900 font-medium transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Blogs
                    </motion.button>
                </div>
                
                {/* Floating Particles */}
                <FloatingParticles numberOfParticles={500} />
                
                {/* Banner content*/}
                <div className="max-w-7xl mx-auto text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1 bg-teal-600 text-white text-sm rounded-full mb-6 font-medium"
                    >
                        {category}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-gray-600"
                    >
                        <div className="flex items-center">
                            <FaUser className="mr-2 text-teal-600" />
                            <span className="font-medium">{author}</span>
                        </div>

                        <div className="flex items-center">
                            <FaCalendarAlt className="mr-2 text-teal-600" />
                            <span className="font-medium">{published_date}</span>
                        </div>

                        <div className="flex items-center">
                            <FaClock className="mr-2 text-teal-600" />
                            <span className="font-medium">{reading_time}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 my-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Blog Content - 2/3 width on large screens */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"
                        >
                            <img
                                src={image}
                                className="w-full h-64 md:h-96 object-cover"
                                alt={title}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="prose prose-lg max-w-none"
                        >
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                {content.split('\n').map((paragraph, index) => (
                                    <p key={index} className="text-lg text-gray-700 leading-8">
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Sample content styling */}
                                <p className="text-lg text-gray-700 leading-8">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore, maiores, illo similique totam ipsam, saepe tempore hic maxime ea minus minima iure quidem. Aperiam, voluptatum voluptate ipsa omnis quis, blanditiis veritatis praesentium deserunt nostrum eaque architecto molestiae ad iste facilis quia repudiandae sunt quod aspernatur, doloribus asperiores temporibus laborum.
                                </p>

                                <blockquote className="border-l-4 border-teal-500 pl-6 italic text-gray-600 text-xl my-8">
                                    "The future belongs to those who believe in the beauty of their dreams."
                                </blockquote>

                                <p className="text-lg text-gray-700 leading-8">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore explicabo incidunt, tenetur animi libero facilis reiciendis quasi voluptatibus officia nam laboriosam iure vel nihil at quibusdam exercitationem. Similique, earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>

                                <div className="bg-teal-50 p-6 rounded-lg my-8 border-l-4 border-teal-400">
                                    <h3 className="text-xl font-semibold text-teal-800 mb-3">Key Takeaways</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Renewable energy is transforming urban infrastructure</li>
                                        <li>Sustainable cities reduce carbon footprint significantly</li>
                                        <li>Community engagement is crucial for successful implementation</li>
                                        <li>New technologies are making green energy more accessible</li>
                                    </ul>
                                </div>

                                <p className="text-lg text-gray-700 leading-8">
                                    Recusandae ipsum adipisci praesantium, optio error commodi distinctio repellat voluptate inventore necessitatibus! Quisquam est omnis consequatur a laudantium laboriosam similique id accusantium cupiditate beatae saepe aspernatur ab consequuntur eos nesciunt, sequi, explicabo expedita.
                                </p>
                            </div>

                            {/* Author Bio */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        {author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900">{author}</h4>
                                        <p className="text-gray-600">Senior Writer at HumNil Times</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-700">
                                    {author} is a passionate writer with expertise in sustainable technologies and urban development. With over 10 years of experience, they bring insightful perspectives on modern environmental solutions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Sidebar - 1/3 width on large screens, full width on small screens */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogDetails;