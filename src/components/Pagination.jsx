import React, { useState } from 'react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <nav className="flex justify-center py-16">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a
                        href="#"
                        onClick={() => handlePageClick(currentPage - 1)}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-e-0 border-gray-300 rounded-s-lg hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>

                {[1, 2, 3, '...', 44, 45, 46].map((page, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            onClick={() => typeof page === 'number' && handlePageClick(page)}
                            className={`flex items-center justify-center px-4 h-10 leading-tight border ${currentPage === page
                                ? 'bg-[#76ABAE] text-white border-[#76ABAE]'
                                : 'text-gray-500 border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            {page}
                        </a>
                    </li>
                ))}

                <li>
                    <a
                        href="#"
                        onClick={() => handlePageClick(currentPage + 1)}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 rounded-e-lg hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
