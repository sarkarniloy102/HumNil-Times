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
        async function fetchBlogs() {
            setLoading(true);
            let url = `https://hum-nil-times-server.vercel.app/blogs?page=${currentPage}&limit=${BlogPerPage}`;

            // filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            try {
                const response = await axios.get(url);
                setBlogs(response.data);
            } catch (err) {
                setError(err);
                console.error("Error fetching blogs:", err);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, [currentPage, BlogPerPage, selectedCategory,error]);


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