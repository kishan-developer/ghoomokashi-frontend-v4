import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
    FaUserShield,
    FaCog,
    FaBox,
    FaBlogger,
    FaUser,
    FaEnvelope,
    FaSignOutAlt,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setIsAdmin } from "../../Redux/slices/authSlice";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";

const AdminWelcome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modalData, setModalData] = useState(null);

    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-900 text-white">
            <div className="relative bg-gray-800 px-5 py-6 rounded-2xl shadow-2xl w-72 text-center">
                {/* Close Icon */}
                <button
                    onClick={() => navigate("/admin/dashboard")}
                    className="absolute top-2.5 right-2.5 text-gray-300 hover:text-white hover:bg-gray-700 p-1.5 rounded-full transition"
                >
                    <IoClose size={18} />
                </button>

                {/* Icon */}
                <FaUserShield className="text-[#E8464B] text-4xl mx-auto animate-bounce" />

                {/* Title */}
                <h1 className="text-xl font-semibold mt-3">Welcome, Admin!</h1>
                <p className="text-gray-400 text-sm mt-1">
                    Manage your travel agency with ease.
                </p>

                {/* Buttons */}
                <div className="mt-4 space-y-2 text-sm">
                    <button
                        onClick={() => navigate("/admin/services")}
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-[#E8464B] text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaCog size={14} /> Manage Services
                    </button>

                    <button
                        onClick={() => navigate("/admin/packages")}
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-[#E8464B] text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaBox size={14} /> Manage Packages
                    </button>

                    <button
                        onClick={() => navigate("/admin/blog")}
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-[#E8464B] text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaBlogger size={14} /> Manage Blog
                    </button>

                    <button
                        onClick={() => navigate("/admin/profile")}
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-[#E8464B] text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaUser size={14} /> Edit Profile
                    </button>

                    <button
                        onClick={() => navigate("/admin/contact")}
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-[#E8464B] text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaEnvelope size={14} /> Manage Contacts
                    </button>

                    <button
                        onClick={() =>
                            setModalData({
                                text1: "Logout Confirmation",
                                text2: "Are you sure you want to log out?",
                                btn1Text: "Yes, Logout",
                                btn1Handler: () => {
                                    dispatch(setIsAdmin(false));
                                    Cookies.remove("token");
                                    navigate("/");
                                },
                                btn2Text: "Cancel",
                                btn2Handler: () => setModalData(null),
                            })
                        }
                        className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-gray-600 text-white rounded-md font-medium hover:scale-105 transition shadow-md"
                    >
                        <FaSignOutAlt size={14} /> Logout
                    </button>
                </div>
            </div>

            {modalData && <ConfirmationModal modalData={modalData} />}
        </div>
    );
};

export default AdminWelcome;
