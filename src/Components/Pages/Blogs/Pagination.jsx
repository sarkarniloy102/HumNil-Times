import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Pagination = ({ onPageChange, blogs, currentPage, BlogPerPage }) => {

    const totalPages = Math.ceil(blogs.length / BlogPerPage);
    console.log(totalPages);
    const renderPaginationsLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li
                key={pageNumber}
                className={pageNumber === currentPage ? "bg-orange-500 rounded-md " : ""} >
                <a href="#"
                    className="inline-block border border-zinc-400 px-3 py-1 rounded-md hover:bg-zinc-400"
                    onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li >
        ))
    }
    return (
        <div>
            <ul className="flex justify-center items-center list-none m-0 p-0 my-8 flex-wrap gap4">
                <li className=" cursor-pointer flex justify-center items-center gap-1 mr-3 hover:font-semibold">
                    <FaAnglesLeft />
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="cursor-pointer">Previous</button>
                </li>
                <div className="flex gap-2 justify-center items-center">{renderPaginationsLinks()}</div>
                <li className="  cursor-pointer flex justify-center items-center gap-1 ml-3 hover:font-semibold">

                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer">Next</button>
                    <FaAnglesRight />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;