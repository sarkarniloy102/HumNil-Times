import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const BlogCard = ({ blogs,currentPage,selectedCategory,BlogPerPage }) => {

    const filteredBlogs = blogs
    .filter((blogs)=>!selectedCategory || blogs.category===selectedCategory)
    .slice((currentPage-1)*BlogPerPage,currentPage*BlogPerPage)

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {
                filteredBlogs.map((blog) => (
                    <Link to={`/blogs/${blog.id}`}
                    key={blog.id}
                    className="p-5 shadow-lg rounded">
                        <div>
                            <img
                                src={blog.image}
                                alt="blog image"
                                className="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 font-bold hover:text-teal-700 cursor-pointer">{blog.title}</h3>
                        <p className="mb-2text-gray-600">
                            <FaUser className="inline-flex items-center mr-2" />
                            {blog.author}</p>
                        <p className="text-sm text-gray-500">Published: {blog.published_date}</p>
                    </Link>

                ))
            }
        </div>
    );
};

export default BlogCard;