import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Pagination = () => {
    const { number } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(Number(number) || 1);

    useEffect(() => {
        if (number) {
            setCurrentPage(Number(number));
        }
    }, [number]);

    const handlePageClick = (page) => {
        if (typeof page === 'number') {
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
                            disabled={typeof page !== 'number'}
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
