import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ placeholder = "Search services...", onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    return (
        <div className="relative w-full max-w-lg">
            <div className="flex items-center bg-white/80 backdrop-blur-md shadow-md border border-gray-300 rounded-full px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-red-400">
                <FaSearch className="text-gray-500" size={18} />
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-transparent px-3 text-gray-700 focus:outline-none"
                    pattern="[A-Za-z0-9]+"
                />
            </div>
        </div>
    );
};

export default SearchInput;
