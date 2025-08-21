import BlogPage from "./BlogPage";

const Blogs = () => {

    return (
        <div>
            <div className="py-40 bg-teal-700 text-center text-zinc-200 px-4">
                <h2 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog Page </h2>
            </div>
            {/* all blogs container */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    );
};

export default Blogs;