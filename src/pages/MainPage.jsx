import FilmsGrid from "../components/FilmsGrid";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";


const MainPage = () => {
    return (
        <Layout>
            <SearchBar />
            <FilmsGrid />
            <Pagination />
        </Layout>
    );
};

export default MainPage;
