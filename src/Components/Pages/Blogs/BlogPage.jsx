import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import axios from "axios";


const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BlogPerPage = 12;

    useEffect(() => {
        async function fetchAllBlogs() {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(
                    "https://raw.githubusercontent.com/sarkarniloy102/HumNil-Times-server/main/api/blogsData.json"
                );

                setBlogs(response.data);
            } catch (err) {
                setError("Failed to fetch blogs. Please try again later.");
                console.error("Error fetching blogs:", err);
                alert(error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllBlogs();
    }, [error])

    // page changing 
    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
            </div>
        );
    }
    return (
        <div>
            {/* category section */}
            <CategorySelection
                onSelectCategory={handleCategory}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory} />

            {/* Blog Cards */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* card component */}
                <div>
                    <BlogCard
                        blogs={blogs}
                        currentPage={currentPage}
                        selectedCategory={selectedCategory}
                        BlogPerPage={BlogPerPage} />
                </div>

                {/* Sidebar Component */}
                <div>
                    <SideBar />
                </div>
            </div>
            {/* pagination section will be here */}
            <div>
                <Pagination
                    onPageChange={handlePage}
                    blogs={blogs}
                    currentPage={currentPage}
                    BlogPerPage={BlogPerPage} />
            </div>

        </div>
    );
};

export default BlogPage;