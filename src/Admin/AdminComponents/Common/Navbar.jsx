import { FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-extrabold text-gray-700 uppercase italic ">
                GhumoKashi
            </h1>

            {/* Admin Profile & Logout */}
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700">
                    A
                </div>
                <span className="text-gray-700 font-semibold hidden md:inline">
                    Admin
                </span>

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
