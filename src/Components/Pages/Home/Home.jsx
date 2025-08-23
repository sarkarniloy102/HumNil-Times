
import BlogPage from "../Blogs/BlogPage";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    );
};

export default Home;