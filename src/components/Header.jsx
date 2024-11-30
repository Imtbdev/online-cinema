import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={`/`}>
                <div className="text-center font-sans text-8xl font-bold text-white bg-[#222831] py-5">
                    BEAR FILMS
                </div>
            </Link>
        </header>
    )
}

export default Header;