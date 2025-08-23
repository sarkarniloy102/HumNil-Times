import { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [popularNews, setPopularNews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setPopularNews(data.slice(0, 15)));
    }, [])
    return (
        <div>
            {/* Latest news */}
            <div>
                <h3 className="text-2xl font-semibold px-4">Latest New's</h3>
                <div>
                    {
                        popularNews.slice(0, 5).map(blog =>
                            <div key={blog.id}
                                className="my-5 border-b-2 border-spacing-2 px-4 border-zinc-300">
                                <h4 className="font-medium mb-1">{blog.title}</h4>
                                <Link to={`/blogs/${blog.id}`}
                                    className="text-base pb-4 hover:text-teal-600 inline-flex items-center text-zinc-700">
                                    Read now
                                    <FaRegArrowAltCircleRight className=" ml-2" />
                                </Link>
                            </div>

                        )
                    }
                </div>
            </div>
            {/* Popular news */}
            <div>
                <h3 className="text-2xl font-semibold px-4 mt-25">Popular New's</h3>
                <div>
                    {
                        popularNews.slice(6, 10).map(blog =>
                            <div key={blog.id}
                                className="my-5 border-b-2 border-spacing-2 px-4 border-zinc-300">
                                <h4 className="font-medium mb-1">{blog.title}</h4>
                                <Link to={`/blogs/${blog.id}`}
                                    className="text-base pb-4 hover:text-teal-600 inline-flex items-center text-zinc-700">
                                    Read now
                                    <FaRegArrowAltCircleRight className=" ml-2" />
                                </Link>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBar;