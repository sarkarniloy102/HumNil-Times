/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { containerVariants, itemVariants, fadeInUp } from '../Shared/MotionVarient';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_USER_ID
            );



            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl text-teal-600" />,
            title: "Phone",
            details: "+1 (555) 123-4567",
            description: "Mon to Fri 9am to 6pm"
        },
        {
            icon: <FaEnvelope className="text-2xl text-teal-600" />,
            title: "Email",
            details: "contact@humniltimes.com",
            description: "Send us your query anytime!"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl text-teal-600" />,
            title: "Address",
            details: "123 News Street, Media City",
            description: "Press District, PC 10001"
        },
        {
            icon: <FaClock className="text-2xl text-teal-600" />,
            title: "Office Hours",
            details: "Monday - Friday",
            description: "9:00 AM - 6:00 PM EST"
        }
    ];

    return (
        <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Hero Section */}
            <div className="text-center py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-8">
                            Contact Information
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-gray-600 mb-8 text-lg">
                            Have questions about our reporting? Want to share a news tip?
                            Reach out to us through any of the following channels.
                        </motion.p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="mr-4 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                        <p className="text-gray-700 font-medium">{item.details}</p>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl shadow-xl p-8"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-6">
                            Send us a Message
                        </motion.h2>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                            >
                                Thank you! Your message has been sent successfully.
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
                            >
                                Sorry, there was an error sending your message. Please try again.
                            </motion.div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="What is this regarding?"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                                    placeholder="Tell us how we can help you..."
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message
                                            <FaPaperPlane className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="max-w-7xl mx-auto px-4 py-16"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Find Us Here</h2>
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                        <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-teal-600" />
                        <p className="text-lg">Interactive Map Would Appear Here</p>
                        <p className="text-sm">123 News Street, Media City, Press District</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;