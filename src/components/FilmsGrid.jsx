import MovieCard from "./FilmCard"

const FilmsGrid = () => {
    return (
        <div>
            <div className="text-start font-sans text-4xl text-white pt-4 pb-8 pl-8">Results:</div>
            <div className="flex flex-row flex-wrap justify-center">
                {/* Movie Cards */}
                {[...Array(18)].map((_, index) => (
                    <div key={index} className="flex-shrink-0 w-48 justify-center">
                        <MovieCard
                            posterSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                            title="Inception"
                            year="2010"
                            genre="Sci-Fi"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilmsGrid