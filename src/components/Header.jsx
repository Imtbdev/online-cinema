import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#222831] py-5">
            <div className="flex justify-between items-center text-white font-sans max-w-screen-xl mx-auto">
                <div className="text-4xl font-bold text-right">
                    <Link to={`/`}>
                        BEAR FILMS
                    </Link>
                </div>
                <div className="text-xl text-left">
                    <Link to={`/register`} className="hover:underline">
                        Register
                    </Link>

                </div>


            </div>
        </header>
    );
};

export default Header;
