import { useEffect, useState } from "react";
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
import { setIsAdmin } from "../../Redux/slices/authSlice";
import { useDispatch } from "react-redux";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";

const AdminWelcome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modalData, setModalData] = useState(null);
    return (
        <div className="flex items-center justify-center h-full w-full bg-gray-900 text-white rounded-md">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96 text-center">
                {/* Admin Icon */}
                <FaUserShield className="text-[#E8464B] text-6xl mx-auto animate-bounce" />

                {/* Welcome Message */}
                <h1 className="text-3xl font-bold mt-4">Welcome, Admin!</h1>
                <p className="text-gray-400 mt-2">
                    Manage your travel agency with ease.
                </p>

                {/* Management Buttons */}
                <div className="mt-6 space-y-3">
                    <button
                        onClick={() => navigate("/admin/services")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaCog /> Manage Services
                    </button>

                    <button
                        onClick={() => navigate("/admin/packages")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaBox /> Manage Packages
                    </button>

                    <button
                        onClick={() => navigate("/admin/blog")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaBlogger /> Manage Blog
                    </button>

                    <button
                        onClick={() => navigate("/admin/profile")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaUser /> Edit Profile
                    </button>

                    <button
                        onClick={() => navigate("/admin/contact")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaEnvelope /> Manage Contacts
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
                        className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>
            {modalData && <ConfirmationModal modalData={modalData} />}
        </div>
    );
};

export default AdminWelcome;
