// utils/blogLoader.js
import axios from 'axios';

export const blogLoader = async ({ params }) => {
    try {
        // Fetch all blogs from GitHub using axios
        const response = await axios.get(
            'https://raw.githubusercontent.com/sarkarniloy102/HumNil-Times-server/main/api/blogsData.json'
        );

        // Find the specific blog by ID
        const blog = response.data.find(blog => blog.id === parseInt(params.id));

        if (!blog) {
            throw new Response('Blog not found', {
                status: 404,
                statusText: `Blog with ID ${params.id} not found`
            });
        }

        return blog;
    } catch (error) {
        console.error('Loader error:', error);

        // Handle axios specific errors
        if (error.response) {
            // Server responded with error status
            throw new Response('Server error', {
                status: error.response.status,
                statusText: error.response.statusText
            });
        } else if (error.request) {
            // Network error
            throw new Response('Network error', {
                status: 503,
                statusText: 'Unable to connect to server'
            });
        } else {
            // Other errors
            throw new Response('Failed to load blog', {
                status: 500,
                statusText: error.message
            });
        }
    }
};