import { Link } from "react-router-dom";
// import trendingImg from "../../../assets/about.png";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Banner = ({ title = "Stay ahead of the story.",
    subtitle = "Breaking news, deep dives, and daily briefs — curated for you.",
    ctaPrimary = "Start Reading",
    ctaSecondary = "Subscribe",
    onPrimaryClick,
    onSecondaryClick, }) => {

    return (

        <section className="bg-blue-950 text-zinc-200 overflow-hidden relative">
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
                        className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
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
                        <button
                            onClick={onPrimaryClick}
                            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 active:scale-[.99]"
                        >
                            <Link to="/about">{ctaPrimary}</Link>


                        </button>
                        <button
                            onClick={onSecondaryClick}
                            className="rounded-2xl border border-white/10 bg-transparent px-5 py-2.5 text-sm font-medium hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 active:scale-[.99]"
                        >
                            {ctaSecondary}
                        </button>
                    </motion.div>

                    {/* Scrolling topics ticker */}

                    
                </div>

                {/* Right: device mock / image placeholder */}
               
            </div>
            

        </section>

    );
};

export default Banner;