import DefaultButton from "./DefaultButton";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const RegisterForm = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-[#31363F]">
            <form className="bg-[#222831] p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-10">
                <h2 className="text-2xl font-bold text-white text-center">Register</h2>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-white" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#76ABAE] text-black"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-white" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#76ABAE] text-black"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-white" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full p-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#76ABAE] text-black"
                        placeholder="Confirm your password"
                    />
                </div>

                {/* Submit Button */}
                <DefaultButton text={'Register'} />

                <Link to="/" className="flex items-center justify-center gap-2 text-white">
                    <MdArrowBack size={24} />
                    <span className="text-lg">Back</span>
                </Link>
            </form>
        </div>

    );
};

export default RegisterForm;
