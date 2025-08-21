const Pagination = ({ onPageChange, blogs, currentPage, BlogPerPage }) => {

    const totalPages = Math.ceil(blogs.length / BlogPerPage);
    console.log(totalPages);
    const renderPaginationsLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li
                key={pageNumber}
                className={pageNumber === currentPage ? "bg-orange-500 " : ""} >
                <a href="#"
                className="inline-block border border-zinc-400 px-5 py-2 hover:bg-zinc-400"
                    onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li >
        ))
    }
    return (
        <div>
            <ul className="flex justify-center items-center list-none m-0 p-0 my-8 flex-wrap gap4">
                <li className="border border-zinc-400 px-5 py-2 cursor-pointer hover:bg-zinc-400">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="cursor-pointer">Previous</button>
                </li>
                <div className="flex gap-0 justify-center items-center">{renderPaginationsLinks()}</div>
                <li className="border border-zinc-400 px-5 py-2  cursor-pointer hover:bg-zinc-400">
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer">Next</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;