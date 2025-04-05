import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
    FaSignOutAlt,
    FaTachometerAlt,
    FaBox,
    FaBlogger,
    FaUser,
    FaEnvelope,
    FaCog,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Sidebar = ({ handleLogout }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside
            className={` bg-[#E8464B] text-white min-h-screen  p-6 transition-all duration-300 relative ${
                isOpen ? "w-64" : "w-28"
            }`}
        >
            {/* Toggle Button */}
            <button
                className="absolute top-4 right-[-18px] bg-white text-[#E8464B] p-2 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar Links */}
            <ul className="mt-10 space-y-4">
                <SidebarLink
                    to="/admin/dashboard"
                    icon={<FaTachometerAlt />}
                    label="Dashboard"
                    isOpen={isOpen}
                />
                <SidebarLink
                    to="/admin/services"
                    icon={<FaCog />}
                    label="Services"
                    isOpen={isOpen}
                />
                <SidebarLink
                    to="/admin/packages"
                    icon={<FaBox />}
                    label="Packages"
                    isOpen={isOpen}
                />
                <SidebarLink
                    to="/admin/blog"
                    icon={<FaBlogger />}
                    label="Blog"
                    isOpen={isOpen}
                />
            </ul>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className=" mt-64 flex items-center justify-center gap-2 bg-white text-[#E8464B] px-4 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition w-full "
            >
                <FaSignOutAlt /> {isOpen && "Logout"}
            </button>
        </aside>
    );
};

const SidebarLink = ({ to, icon, label, isOpen }) => (
    <li>
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${
                    isActive ? "bg-[#ff6b6b] shadow-lg " : ""
                } flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[#ff6b6b] hover:shadow-lg ${
                    !isOpen && "justify-center"
                }`
            }
        >
            {icon}
            <span
                className={`${
                    isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-all`}
            >
                {label}
            </span>
        </NavLink>
    </li>
);

export default Sidebar;
