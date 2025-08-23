import { Link } from "react-router-dom";
import trendingImg from "../../../assets/about.png";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import TopicsTicker from "./TopicsTicker";
import FloatingParticles from "../../Shared/FloatingParticle";

const Banner = ({ title = "Stay ahead of the story.",
    subtitle = "Breaking news, deep dives, and daily briefs — curated for you.",
    Primary = "Start Reading",
    Secondary = "Subscribe", }) => {

    return (

        <section className="  text-zinc-200 overflow-hidden relative bg-gradient-to-t
         from-teal-950 via-teal-800 to-teal-700">
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:gap-10 lg:px-8">
                {/* Left: Text */}
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.05 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur-sm"
                    >
                        <span className="relative inline-flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                        </span>
                        LIVE UPDATES
                    </motion.span>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl "
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 max-w-xl text-base/7 text-zinc-300 sm:text-lg/8"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <Link to="/about" className="bg-teal-800 px-4 py-2 rounded-lg hover:bg-zinc-200 hover:text-black transition-all duration-200 ease-in">{Primary}</Link>
                        <Link to="/about" className="bg-teal-800 px-4 py-2 rounded-lg hover:bg-zinc-200 hover:text-black transition-all duration-200 ease-in">{Secondary}</Link>

                    </motion.div>

                    {/* Scrolling topics ticker */}
                    <TopicsTicker />

                </div>

                {/* Right side : image*/}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="relative mt-12 h-64 w-full max-w-xl flex-1 self-stretch rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:h-72 lg:mt-0 lg:h-96"
                >
                    <div className="grid h-full place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                        <span className="text-sm text-zinc-300/80">
                            <img src={trendingImg} alt="" />
                        </span>

                    </div>

                    {/* Floating badges */}
                    <motion.div
                        initial={{ y: -6 }}
                        animate={{ y: 6 }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
                        className="absolute -left-3 -top-3 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur"
                    >
                        Trending
                    </motion.div>
                    <motion.div
                        initial={{ y: 6 }}
                        animate={{ y: -6 }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.4 }}
                        className="absolute -right-3 -bottom-3 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs backdrop-blur"
                    >
                        Editor's Pick
                    </motion.div>
                </motion.div>

            </div>
            <FloatingParticles numberOfParticles={100} />

        </section>

    );
};

export default Banner;