import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


const BlogPage = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);

        }
        fetchBlogs();
    }, [])
    return (
        <div>
            {/* category section */}
            <div>Page Category</div>
            {/* Blog Cards */}
            <div>
                <BlogCard blogs={blogs} />
            </div>
            {/* paginition section will be here */}
            <div>
             <h2>Paginitions</h2>
            </div>

        </div>
    );
};

export default BlogPage;