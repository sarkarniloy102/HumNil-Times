/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBullseye, FaEye, FaHandshake, FaAward, FaNewspaper } from 'react-icons/fa';
import { containerVariants, fadeInUp, itemVariants } from '../Shared/MotionVarient';
import FloatingParticles from '../Shared/FloatingParticle';

const About = () => {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Editor-in-Chief",
            experience: "15+ years in journalism",
            specialty: "Political Analysis"
        },
        {
            name: "Michael Chen",
            role: "Senior Reporter",
            experience: "12+ years in investigative journalism",
            specialty: "Business & Economy"
        },
        {
            name: "Elena Rodriguez",
            role: "Foreign Correspondent",
            experience: "10+ years in international reporting",
            specialty: "Global Affairs"
        },
        {
            name: "David Kim",
            role: "Technology Editor",
            experience: "8+ years in tech journalism",
            specialty: "Innovation & Startups"
        }
    ];

    const values = [
        {
            icon: <FaEye className="text-3xl text-teal-600" />,
            title: "Transparency",
            description: "We believe in open and honest reporting, showing our sources and methods whenever possible."
        },
        {
            icon: <FaBullseye className="text-3xl text-teal-600" />,
            title: "Accuracy",
            description: "Every story undergoes rigorous fact-checking to ensure the information we provide is reliable."
        },
        {
            icon: <FaHandshake className="text-3xl text-teal-600" />,
            title: "Integrity",
            description: "We maintain ethical standards and independence in all our reporting endeavors."
        }
    ];

    const milestones = [
        { year: "2010", event: "Founded with a vision for independent journalism" },
        { year: "2014", event: "Reached 1 million monthly readers" },
        { year: "2018", event: "Won National Journalism Award for investigative reporting" },
        { year: "2022", event: "Expanded to international coverage with correspondents in 15 countries" },
        { year: "2023", event: "Launched mobile app with 500k+ downloads" }
    ];

    return (
        <div className="">
            {/* Hero Section */}
            <div className="pt-40 pb-25 text-center bg-gradient-to-t
         from-teal-950 via-teal-800 to-teal-500 text-white">
               
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About HumNil Times</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        Delivering truth, transparency, and trusted journalism since 2010
                    </p>
                     <FloatingParticles numberOfParticles={200}/>
                </motion.div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-8">
                        Our Mission
                    </motion.h2>
                    <motion.p 
                        variants={itemVariants}
                        className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        At HumNil Times, we are committed to delivering accurate, unbiased, and comprehensive 
                        news coverage that empowers our readers to make informed decisions. We believe in the 
                        power of journalism to drive positive change and hold power to account.
                    </motion.p>
                </motion.div>
            </div>

            {/* Values Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
                <motion.h2 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Our Core Values
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-3 gap-8"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center p-6 bg-teal-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-teal-800 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.h2 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Our Leadership Team
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                            <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                            <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                            <p className="text-sm text-gray-500">{member.specialty}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <motion.h2 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    Our Journey
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-start"
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                {milestone.year}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                                <p className="text-gray-700">{milestone.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl"
                >
                    <FaNewspaper className="text-4xl mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-teal-100 mb-6 text-lg">
                        Be part of our mission to deliver quality journalism. Subscribe to stay informed 
                        and support independent reporting.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                        Subscribe Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;