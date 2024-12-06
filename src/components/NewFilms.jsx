import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import MovieCard from './FilmCard';
import { Link } from 'react-router-dom';

const NewFilms = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -192, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 192, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="text-start font-sans text-4xl text-white pt-8">New Films:</div>
            <div className="flex items-center">
                <button onClick={scrollLeft} className="p-2 text-white bg-gray-700 hover:bg-gray-600 rounded-l">
                    <FaChevronLeft />
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide gap-3 py-2"
                >
                    {[...Array(18)].map((_, index) => (
                        <Link key={index} to={`/films/${index}`}>
                            <div key={index} className="flex-shrink-0 w-48 justify-center">
                                <MovieCard
                                    posterSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                                    title="Inception"
                                    year="2010"
                                    genre="Sci-Fi"
                                />
                            </div>
                        </Link>
                    ))}

                </div>
                <button onClick={scrollRight} className="p-2 text-white bg-gray-700 hover:bg-gray-600 rounded-r">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default NewFilms;
