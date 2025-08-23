

const CategorySelection = ({ onSelectCategory, activeCategory }) => {

    const categories = ["Health", "Startups", "AI", "Security", "Enterprise", "Apps", "Tech",]
    return (
        <div className=" mb-8 flex flex-wrap items-center border-b-2 border-zinc-200 py-5 text-zinc-800 font-semibold space-x-10">
            <button
                onClick={() => onSelectCategory(null)}
                className={`lg:ml-12 cursor-pointer ${activeCategory ? "" : "text-teal-700"}`}>All</button>
            {
                categories.map((category, idx) => (
                    <button
                        onClick={() => onSelectCategory(category)}
                        key={idx}
                        className={`mr-10 cursor-pointer  ${activeCategory === category ? "text-teal-600" : ""}`}>{category}</button>
                ))
            }

        </div>
    );
};

export default CategorySelection;