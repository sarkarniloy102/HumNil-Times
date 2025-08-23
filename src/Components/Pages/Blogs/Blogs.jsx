import FloatingParticles from "../../Shared/FloatingParticle";
import BlogPage from "./BlogPage";

const Blogs = () => {
    return (
        <div>
            {/*  Blog Banner */}
            <div className="relative py-40 bg-gradient-to-t
         from-teal-950 via-teal-800 to-teal-500 text-center text-white px-4 overflow-hidden">

                {/* Animated circles */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 border-4 border-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-4 border-white/10 rounded-full animate-ping"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 font-serif tracking-tight">
                        HumNil <span className="text-teal-300">Times</span>
                    </h2>
                    <p className="text-xl lg:text-2xl max-w-2xl mx-auto font-light mb-8 text-teal-100">
                        Insights, Stories, and Perspectives
                    </p>
                    <div className="flex justify-center space-x-4">
                        <div className="w-12 h-1 bg-teal-300 rounded-full"></div>
                        <div className="w-6 h-1 bg-teal-400 rounded-full"></div>
                        <div className="w-3 h-1 bg-teal-500 rounded-full"></div>
                    </div>

                </div>

                {/* Scrolling indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                    </div>
                </div>
                <FloatingParticles numberOfParticles={100} />

            </div>


            {/* all blogs container */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>

        </div>
    );
};

export default Blogs;