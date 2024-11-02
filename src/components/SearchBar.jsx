import React from 'react';

const SearchBar = () => {
    return (
        <div className="rounded-lg bg-[#222831]">
            <form className="flex items-center gap-4 p-4 rounded-lg w-full justify-center mt-8">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search"
                    className="w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />

                {/* Genre Dropdown */}
                <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>

                {/* Year Dropdown */}
                <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>

                {/* Country Dropdown */}
                <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                </select>

                {/* Search Button */}
                <button
                    type="submit"
                    className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Find it
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
