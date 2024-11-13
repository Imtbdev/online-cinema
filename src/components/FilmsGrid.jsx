import FilmCard from "./FilmCard"
import { Link } from "react-router-dom";

const FilmsGrid = () => {
    return (
        <div>
            <div className="text-start font-sans text-4xl text-white pt-8 pb-8">Results:</div>
            <div className="flex flex-row flex-wrap justify-center">
                {/* Movie Cards */}
                {[...Array(18)].map((_, index) => (
                    <Link key={index} to={`/films/${index}`}>
                        <div key={index} className="flex-shrink-0 w-48 justify-center">
                            <FilmCard
                                posterSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                                title="Inception"
                                year="2010"
                                genre="Sci-Fi"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FilmsGrid