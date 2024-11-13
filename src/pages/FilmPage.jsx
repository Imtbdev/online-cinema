import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import FilmInfo from "../components/FilmInfo";
import CommentsSection from "../components/CommentsSection";

const FilmPage = () => {
    const { id } = useParams();

    return (
        <Layout>
            <FilmInfo title={`Movie Title for ID ${id}`} />
            <CommentsSection />
        </Layout>
    );
}

export default FilmPage;
