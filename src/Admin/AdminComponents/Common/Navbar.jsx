import { FaSignOutAlt } from "react-icons/fa";

import logo from "../../../../public/logo/GH_Logo.png";
const Navbar = ({ handleLogout }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-extrabold text-gray-700 uppercase italic ">
                Ghumo Kashi
            </h1>

            {/* Admin Profile & Logout */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700">
                    <img
                        src={logo}
                        alt="ghoomokashi logo"
                        className="object-cover w-full h-full"
                    />
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-[#E8464B] font-semibold hover:scale-105 transition"
                >
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
