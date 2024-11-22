import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#222831] py-5">
            <div className="flex justify-between items-center text-white font-sans px-8 max-w-screen-xl mx-auto">
                <div className="text-left">
                    <div className="text-2xl font-bold">Bearfilms</div>
                    <div className="flex gap-2 text-lg">
                        <MdEmail size={28} />
                        <span>Contact me - <a href="mailto:bearfilms@violated.com">bearfilms@violated.com</a></span>
                    </div>
                </div>

                <div className="text-2xl font-bold text-right">
                    All rights are violated
                </div>
            </div>
        </footer>
    );
};

export default Footer;
