import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Pagination = ({ onPageChange, blogs, currentPage, BlogPerPage }) => {

    const totalPages = Math.ceil(blogs.length / BlogPerPage);
    console.log(totalPages);
    const renderPaginationsLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li
                key={pageNumber}
                className={pageNumber === currentPage ? "bg-teal-600 rounded-md " : ""} >
                <a href="#"
                    className="inline-block border border-zinc-400 px-3 py-1 rounded-md hover:bg-zinc-400"
                    onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li >
        ))
    }
    return (

        <div className="w-full">
            <ul className="flex flex-wrap justify-center items-center list-none m-0 p-0 my-6 gap-2 sm:gap-4 text-sm md:text-base">

                {/* Previous */}
                <li className="cursor-pointer flex items-center hover:font-semibold">
                    <FaAnglesLeft className="hidden sm:inline" />
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                </li>

                {/* Pagination numbers */}
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {renderPaginationsLinks()}
                </div>

                {/* Next */}
                <li className="cursor-pointer flex items-center hover:font-semibold">
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                    <FaAnglesRight className="hidden sm:inline" />
                </li>

            </ul>
        </div>

    );
};

export default Pagination;