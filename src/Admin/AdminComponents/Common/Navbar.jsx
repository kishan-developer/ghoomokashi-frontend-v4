import { FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center border-b border-gray-300">
            <h1 className="text-xl font-extrabold  text-gray-700 uppercase italic flex items-center gap-2">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700">
                    <img
                        src="/logo/GH_Logo.png"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>{" "}
                Ghoomo Kashi
            </h1>

            {/* Admin Profile & Logout */}
            <div className=" items-center ">
                <button
                    onClick={handleLogout}
                    className="flex items-center  text-[#E8464B] font-semibold hover:scale-105 transition"
                >
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
