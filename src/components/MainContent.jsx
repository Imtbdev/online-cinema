import FilmsGrid from "./FilmsGrid";
import NewFilms from "./NewFilms";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";


const MainContent = () => {
    return (
        <div className="bg-[#31363F] max-w-screen-xl mx-auto">
            <NewFilms />
            <SearchBar />
            <FilmsGrid />
            <Pagination />
        </div >
    );
};

export default MainContent;
