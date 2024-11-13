import ReactPlayer from "react-player";

const FilmInfo = ({ title }) => {
    return (
        <div className="p-8">
            <div className="text-start font-sans text-4xl text-white mb-8">{title}</div>
            <div className="flex items-start gap-8">
                <img
                    className="w-64"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
                    alt="Movie Poster"
                />


                <ul className="text-white space-y-2">
                    <li><strong>Ratings:</strong> ⭐⭐⭐⭐</li>
                    <li><strong>Release date:</strong> 2022</li>
                    <li><strong>Country:</strong> USA</li>
                    <li><strong>Producer:</strong> John Doe</li>
                    <li><strong>Genre:</strong> Adventure, Action</li>
                    <li><strong>Age rating:</strong> PG-13</li>
                    <li><strong>Duration:</strong> 120 min</li>
                    <li><strong>Actors:</strong> Jane Smith, Jack Black</li>
                </ul>
            </div>

            <div className="mt-8 text-white">
                <strong>Description:</strong> This is a thrilling adventure movie that takes you on a journey through unknown territories and unforgettable experiences.
            </div>

            <div className="flex w-full justify-center align-center pt-8">
                <ReactPlayer url='https://www.youtube.com/watch?v=YxNFgWsvhFs' width={1280} height={720} controls={true} pip={true} />
            </div>
        </div>
    );
};

export default FilmInfo;
