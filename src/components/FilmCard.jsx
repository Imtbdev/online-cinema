const MovieCard = ({ posterSrc, title, year, genre }) => {
    return (
        <div className="rounded-lg max-w-xs mx-auto p-4"> {/* Убедитесь, что max-w соответствует вашим требованиям */}
            <img src={posterSrc} alt={title} className="rounded-md my-4 w-full" />
            <div className="flex justify-between text-white text-sm">
                <h3 className="font-semibold">{title}</h3>
                <span className="text-gray-400">{year}</span>
                <span className="text-gray-400">{genre}</span>
            </div>
        </div>
    );
};

export default MovieCard;
