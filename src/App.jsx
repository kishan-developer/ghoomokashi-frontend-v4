import { useEffect, useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ComingSoon from "./Pages/ComingSoon";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaPhoneAlt } from "react-icons/fa";
import {
    useNavigate,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import BlogPage from "./Pages/Blog_Page/BlogPage";
import Services_Page from "./Pages/Services_Page";
import ContactPage from "./Pages/Contact/ContactPage";
import AboutPage from "./Pages/About_Page/AboutPage";
import Package_Page from "./Pages/Package/Package_Page";

import PackageView from "./Pages/Package/PK_Components/PackageView";
import PageNotFound from "./Components/Common/PageNotFound";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import AdminDashboard from "./Admin/AdminComponents/Dashboard";

import AdminPackages from "./Admin/AdminComponents/Packages/Packages";
import AdminBlog from "./Admin/AdminComponents/Blog/Blog";
import AdminProfile from "./Admin/AdminComponents/Profile";
import AdminContact from "./Admin/AdminComponents/Contact";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import AdminLoginForm from "./Admin/LoginForm/LoginForm";
import AdminWelcome from "./Admin/AdminComponents/Welcome";

import AdminServices from "./Admin/AdminComponents/Services/Services";
import { toast } from "react-toastify";

import { servicesApi } from "./Services/api/services/servicesApi";
import { setServices, setIsServicesLoaded } from "./Redux/slices/servicesSlice";
import { handleApiError } from "./Services/handleApiError";
import { packagesApis } from "./Services/api/packages/packagesApis";
import { setIsPackagesLoaded, setPackages } from "./Redux/slices/packagesSlice";
import BlogView from "./Pages/Blog_Page/Blog_Com/BlogView";
import { setBlogs, setIsBlogsLoaded } from "./Redux/slices/blogsSlice";
import { blogApis } from "./Services/api/blogs/blogsApis";
import BlogCreate from "./Admin/AdminComponents/Blog/BlogCreate";
import BlogEdit from "./Admin/AdminComponents/Blog/BlogEdit";
function App() {
    const isServicesLoaded = useSelector((state) => state?.services?.isLoaded);
    const isPackagesLoaded = useSelector((state) => state?.packages?.isLoaded);
    const isBlogsLoaded = useSelector((state) => state?.blogs?.isLoaded);

    const dispatch = useDispatch();
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    // ON First Render Fetch Services For Shere Data Of Serviced To Amdin And Public
    const fetchServices = async () => {
        try {
            const res = await servicesApi.getAllServices();
            dispatch(setServices(res));
            dispatch(setIsServicesLoaded(true));
        } catch (error) {
            const err = handleApiError(
                error,
                "error While Fetching The Services"
            );
            toast.error(`Error While Fetching Services Due To ${err}`);
        }
    };
    const fetchBlogs = async () => {
        try {
            const res = await blogApis.getAllBlogs();
            dispatch(setBlogs(res));
            dispatch(setIsBlogsLoaded(true));
        } catch (error) {
            const err = handleApiError(error, "error While Fetching The Blog");
            toast.error(`Error While Fetching Blogs Due To ${err}`);
        }
    };
    const fetchPackages = async () => {
        try {
            const res = await packagesApis.getAllPackages();
            dispatch(setPackages(res));
            dispatch(setIsPackagesLoaded(true));
        } catch (error) {
            const err = handleApiError(
                error,
                "error While Fetching The Packages"
            );
            toast.error(`Error While Fetching Packages Due To ${err}`);
        }
    };

    // ON First Render Fetch Packages
    useEffect(() => {
        if (!isPackagesLoaded) {
            fetchPackages();
        }
    }, [isPackagesLoaded]);
    // ON First Render Fetch Services
    useEffect(() => {
        if (!isServicesLoaded) {
            fetchServices();
        }
    }, [isServicesLoaded]);

    // ON First Render Fetch  All Blogs
    useEffect(() => {
        if (!isBlogsLoaded) {
            fetchBlogs();
        }
    }, [isBlogsLoaded]);
    return (
        <div className="w-full h-screen bg-transparent ">
            {!isAdminRoute && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/service" element={<Services_Page />} />

                <Route path="/package" element={<Package_Page />} />

                <Route path="/packag/:id" element={<PackageView />} />

                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogView />} />

                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />

                {/* Admin Login Page */}
                <Route path="/admin/login" element={<AdminLoginForm />} />

                {/* Admin Dashboard Routes */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="" element={<AdminWelcome />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="services" element={<AdminServices />} />
                    <Route path="packages" element={<AdminPackages />} />
                    <Route path="blog" element={<AdminBlog />} />
                    <Route path="blog/create" element={<BlogCreate />} />
                    <Route path="blog/edit/:id" element={<BlogEdit />} />
                    <Route path="blog/preview/:id" element={<BlogView />} />
                </Route>
            </Routes>

            {/* Private Admin Routes */}

            {/* <a href="tel:+6199942413" className="fixed bottom-30 right-8 z-40 h-[70px] cursor-pointer px-5 flex items-center justify-center bg-gray-800  text-white rounded-full ">
        <FaPhoneAlt className="nav-linker text-[30px]" />
      </a> */}

            {!isAdminRoute && (
                <div
                    onClick={() => alert("Open Whatsapp")}
                    className="fixed bottom-10 right-10 z-40 h-[70px] cursor-pointer px-5 flex items-center justify-center  text-black rounded-lg "
                >
                    {/* <ImWhatsapp /> */}

                    <FloatingWhatsApp
                        phoneNumber="+91 9235171660"
                        accountName="Ghoomo Kashi"
                        statusMessage="Online"
                        avatar="/logo/GH_Logo[1].png"
                        allowEsc
                        allowClickAway
                        notification
                        notificationSound
                    />
                </div>
            )}

            {/* footer section with responsive */}
            {!isAdminRoute && <Footer />}
        </div>
    );
}

export default App;
