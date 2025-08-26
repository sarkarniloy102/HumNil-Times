import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Health", "Startups", "AI", "Security", "Enterprise", "Apps", "Tech"];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="mb-8 w-full mt-5">
            {/* Desktop View - Horizontal Layout */}
            <div className="hidden md:flex flex-wrap items-center border-b-2 border-zinc-200 py-5 text-zinc-800 font-semibold space-x-4 lg:space-x-8">
                <button
                    onClick={() => onSelectCategory(null)}
                    className={`px-3 py-1 rounded-lg transition-all duration-200 ${!activeCategory
                        ? "bg-teal-600 text-white shadow-md"
                        : "hover:bg-gray-100 hover:text-teal-700"
                        }`}
                >
                    All
                </button>

                {categories.map((category, idx) => (
                    <button
                        onClick={() => onSelectCategory(category)}
                        key={idx}
                        className={`px-3 py-1 rounded-lg transition-all duration-200 ${activeCategory === category
                            ? "bg-teal-600 text-white shadow-md"
                            : "hover:bg-gray-100 hover:text-teal-700"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Mobile View - Dropdown Layout */}
            <div className="md:hidden w-full">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-teal-600 text-white rounded-lg shadow-md font-semibold"
                >
                    <span>{activeCategory || "Select Category"}</span>
                    {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isDropdownOpen && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => {
                                onSelectCategory(null);
                                setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 transition-colors duration-200 ${!activeCategory
                                ? "bg-teal-100 text-teal-700 font-semibold"
                                : "hover:bg-gray-50"
                                }`}
                        >
                            All Categories
                        </button>

                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    onSelectCategory(category);
                                    setIsDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 transition-colors duration-200 border-t border-gray-100 ${activeCategory === category
                                    ? "bg-teal-100 text-teal-700 font-semibold"
                                    : "hover:bg-gray-50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategorySelection;