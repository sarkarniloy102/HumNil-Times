import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";


const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const BlogPerPage = 12;

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${BlogPerPage}`;

            // filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);

        }
        fetchBlogs();
    }, [currentPage, BlogPerPage, selectedCategory])

    // page changing 
    const handlePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    return (
        <div>
            {/* category section */}
            <CategorySelection
                onSelectCategory={handleCategory}
                selectedCategory={selectedCategory}
                activeCategory={activeCategory} />

            {/* Blog Cards */}
            <div className="flex flex-col lg:flex-row gap-12">
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