/* eslint-disable no-unused-vars */
import React from 'react';
import { FaNewspaper, FaPenFancy, FaChartLine, FaUsers, FaGlobe, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../Shared/MotionVarient';
import FloatingParticles from '../Shared/FloatingParticle';

const Services = () => {
    const services = [
        {
            icon: <FaNewspaper className="text-4xl text-teal-600" />,
            title: "News Reporting",
            description: "Comprehensive and unbiased news coverage from around the world, delivered with accuracy and timeliness.",
            features: ["Breaking News", "In-depth Analysis", "24/7 Coverage", "Expert Journalists"]
        },
        {
            icon: <FaPenFancy className="text-4xl text-teal-600" />,
            title: "Editorial Content",
            description: "Thought-provoking opinion pieces and editorials that shape public discourse and provide diverse perspectives.",
            features: ["Opinion Pieces", "Editorials", "Guest Columns", "Critical Analysis"]
        },
        {
            icon: <FaChartLine className="text-4xl text-teal-600" />,
            title: "Business Insights",
            description: "Market analysis, economic trends, and business news that helps readers make informed financial decisions.",
            features: ["Market Analysis", "Economic Trends", "Company Profiles", "Investment Tips"]
        },
        {
            icon: <FaUsers className="text-4xl text-teal-600" />,
            title: "Community Stories",
            description: "Highlighting local communities, human interest stories, and initiatives that make a difference in society.",
            features: ["Local News", "Human Interest", "Community Events", "Social Initiatives"]
        },
        {
            icon: <FaGlobe className="text-4xl text-teal-600" />,
            title: "Global Coverage",
            description: "International news and affairs coverage that connects readers to important global events and developments.",
            features: ["International News", "Diplomatic Affairs", "Global Events", "Cultural Exchange"]
        },
        {
            icon: <FaMobileAlt className="text-4xl text-teal-600" />,
            title: "Digital Platform",
            description: "Access our content anywhere, anytime through our responsive website and mobile applications.",
            features: ["Mobile App", "Web Platform", "Newsletters", "Social Media Integration"]
        }
    ];


    return (
        <div className=" pb-16 ">
            {/* Header Section */}
            <div className="text-center pt-40 py-16 bg-gradient-to-t
         from-teal-950 via-teal-800 to-teal-500 text-white">
                <FloatingParticles numberOfParticles={200}/>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        Delivering quality journalism and comprehensive news coverage across various domains
                    </p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="p-6">
                                <div className="flex justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-teal-50 px-6 py-4 border-t border-teal-100">
                                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Stay Informed?</h2>
                    <p className="text-teal-100 mb-6 text-lg">
                        Subscribe to our premium service for exclusive content, ad-free experience, and early access to special reports.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                            Subscribe Now
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-800 text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
                            Free Trial
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6"
                    >
                        <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
                        <div className="text-gray-600">Daily Readers</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6"
                    >
                        <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
                        <div className="text-gray-600">Journalists</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-6"
                    >
                        <div className="text-4xl font-bold text-teal-600 mb-2">25+</div>
                        <div className="text-gray-600">Countries Covered</div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-6"
                    >
                        <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                        <div className="text-gray-600">News Coverage</div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;