import { useEffect, useState } from "react";


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

            </div>
            {/* paginition section will be here */}
            <div>

            </div>

        </div>
    );
};

export default BlogPage;