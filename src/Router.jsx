import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import SingleBlogDetails from "./Components/Pages/Blogs/SingleBlogDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blogs/:id",
                element: <SingleBlogDetails />,
                loader: ({ params }) => fetch(`https://raw.githubusercontent.com/sarkarniloy102/HumNil-Times-server/main/api/blogsData.json/blogs/${params.id}`)
            }
        ]
    },
]);