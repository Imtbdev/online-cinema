import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handlePageClick = (page) => {
        if (typeof page === 'number') {
            setCurrentPage(page);
            navigate(`/page/${page}`);
        }
    };

    return (
        <nav className="flex justify-center py-16">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {[1, 2, 3, '...', 44, 45, 46].map((page, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handlePageClick(page)}
                            className={`flex items-center justify-center rounded-lg px-4 h-10 leading-tight ${currentPage === page
                                ? 'bg-[#76ABAE] text-white'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
