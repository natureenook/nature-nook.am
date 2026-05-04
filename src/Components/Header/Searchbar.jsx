import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative h-10 w-52 mt-1 ">

            {/* Expanding input */}
            <form
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`absolute right-0 flex items-center border rounded-full h-10 pr-10 pl-3
        transition-all duration-700 ease-in-out
        ${isOpen ? "w-52 opacity-100" : "w-10 opacity-0"}`}
            >
                <input
                    type="search"
                    placeholder="Որոնել..."
                    className="w-full bg-transparent outline-none text-white placeholder-white"
                />
            </form>

            <div
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
            >
                <FaSearch className="text-white text-lg" />
            </div>
        </div>
    );
}