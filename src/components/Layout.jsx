import Header from "./Header";
import Footer from "./Footer";
import NewFilms from "./NewFilms";

const Layout = ({ children }) => {
    return (
        <div className="bg-[#31363F]">
            <Header />
            <div className=" max-w-screen-xl mx-auto">
                <NewFilms />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;