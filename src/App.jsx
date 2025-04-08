import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useLocation, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";

// Lazy Load Pages and Components
const Home = lazy(() => import("./Pages/Home"));
const Navbar = lazy(() => import("./Components/Common/Navbar"));
const Footer = lazy(() => import("./Components/Common/Footer"));
const ComingSoon = lazy(() => import("./Pages/ComingSoon"));
const BlogPage = lazy(() => import("./Pages/Blog_Page/BlogPage"));
const Services_Page = lazy(() => import("./Pages/Services_Page"));
const ContactPage = lazy(() => import("./Pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./Pages/About_Page/AboutPage"));
const Package_Page = lazy(() => import("./Pages/Package/Package_Page"));
const PackageView = lazy(() =>
    import("./Pages/Package/PK_Components/PackageView")
);
const BlogView = lazy(() => import("./Pages/Blog_Page/Blog_Com/BlogView"));
const PageNotFound = lazy(() => import("./Components/Common/PageNotFound"));
const ProtectedRoute = lazy(() => import("./Components/Common/ProtectedRoute"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout/AdminLayout"));
const AdminDashboard = lazy(() => import("./Admin/AdminComponents/Dashboard"));
const AdminPackages = lazy(() =>
    import("./Admin/AdminComponents/Packages/Packages")
);
const AdminBlog = lazy(() => import("./Admin/AdminComponents/Blog/Blog"));
const BlogCreate = lazy(() =>
    import("./Admin/AdminComponents/Blog/BlogCreate")
);
const BlogEdit = lazy(() => import("./Admin/AdminComponents/Blog/BlogEdit"));
const AdminServices = lazy(() =>
    import("./Admin/AdminComponents/Services/Services")
);
const AdminLoginForm = lazy(() => import("./Admin/LoginForm/LoginForm"));
const AdminWelcome = lazy(() => import("./Admin/AdminComponents/Welcome"));
const AdminProfile = lazy(() => import("./Admin/AdminComponents/Profile"));
const AdminContact = lazy(() => import("./Admin/AdminComponents/Contact"));

import { servicesApi } from "./Services/api/services/servicesApi";
import { setServices, setIsServicesLoaded } from "./Redux/slices/servicesSlice";
import { packagesApis } from "./Services/api/packages/packagesApis";
import { setIsPackagesLoaded, setPackages } from "./Redux/slices/packagesSlice";
import { blogApis } from "./Services/api/blogs/blogsApis";
import { setBlogs, setIsBlogsLoaded } from "./Redux/slices/blogsSlice";
import { handleApiError } from "./Services/handleApiError";

function App() {
    const isServicesLoaded = useSelector((state) => state?.services?.isLoaded);
    const isPackagesLoaded = useSelector((state) => state?.packages?.isLoaded);
    const isBlogsLoaded = useSelector((state) => state?.blogs?.isLoaded);

    const dispatch = useDispatch();
    const location = useLocation();
    const isAdminRoute = useMemo(
        () => location.pathname.startsWith("/admin"),
        [location.pathname]
    );

    const fetchServices = async () => {
        try {
            const res = await servicesApi.getAllServices();
            dispatch(setServices(res));
            dispatch(setIsServicesLoaded(true));
        } catch (error) {
            toast.error(
                `Error While Fetching Services Due To ${handleApiError(error)}`
            );
        }
    };
    const fetchBlogs = async () => {
        try {
            const res = await blogApis.getAllBlogs();
            dispatch(setBlogs(res));
            dispatch(setIsBlogsLoaded(true));
        } catch (error) {
            toast.error(
                `Error While Fetching Blogs Due To ${handleApiError(error)}`
            );
        }
    };
    const fetchPackages = async () => {
        try {
            const res = await packagesApis.getAllPackages();
            dispatch(setPackages(res));
            dispatch(setIsPackagesLoaded(true));
        } catch (error) {
            toast.error(
                `Error While Fetching Packages Due To ${handleApiError(error)}`
            );
        }
    };

    useEffect(() => {
        if (!isPackagesLoaded) fetchPackages();
    }, [isPackagesLoaded]);

    useEffect(() => {
        if (!isServicesLoaded) fetchServices();
    }, [isServicesLoaded]);

    useEffect(() => {
        if (!isBlogsLoaded) fetchBlogs();
    }, [isBlogsLoaded]);

    const Loading = () => {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-white z-50">
                <img
                    src="/loading.gif"
                    alt="Loading animation"
                    className="w-40 h-40 object-contain"
                />
                <p className="text-xl font-semibold text-gray-700 mt-4">
                    Loading your adventure...
                </p>
            </div>
        );
    };

    return (
        <div className="w-full h-screen bg-transparent">
            <Suspense fallback={<Loading />}>
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
                    <Route path="/admin/login" element={<AdminLoginForm />} />
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
                        <Route
                            path="blog/preview/:id"
                            element={
                                <div className="-mt-14 py-6 bg-white ">
                                    <BlogView />
                                </div>
                            }
                        />
                    </Route>
                </Routes>

                {!isAdminRoute && (
                    <div className="fixed bottom-10 right-10 z-40 h-[70px] cursor-pointer px-5 flex items-center justify-center text-black rounded-lg">
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

                {!isAdminRoute && <Footer />}
            </Suspense>
        </div>
    );
}

export default App;
