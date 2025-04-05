import { FaPlus } from "react-icons/fa";
import Button from "../Common/Button";
import SearchInput from "../Common/SearchInput";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../../Components/Common/ConfirmationModal";
import { toast } from "react-toastify";
import { blogApis } from "../../../Services/api/blogs/blogsApis";
import { handleApiError } from "../../../Services/handleApiError";
import { setIsBlogsLoaded } from "../../../Redux/slices/blogsSlice";

const AdminBlog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const blogData = useSelector((state) => state.blogs.blogs);
    // Searched Filtred Blog Data
    const filteredBlogs = useMemo(() => {
        if (!searchQuery.trim()) return blogData; //  Show all services if search is empty

        return blogData
            .filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => a.title.localeCompare(b.title)); //  Alphabetically sorted
    }, [searchQuery, blogData]);

    const [confirmationModal, setConfirmationModal] = useState(null);
    return (
        <div>
            {/* Search Input */}
            <div className="flex items-center justify-between">
                <SearchInput onSearch={setSearchQuery} />
                <Button
                    icon={FaPlus}
                    iconPosition="left"
                    variant="primary"
                    size="md"
                    onClick={() => navigate("/admin/blog/create")}
                >
                    Add Blog
                </Button>
            </div>
            <hr className="mt-2" />
            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-4 py-4">
                {filteredBlogs.map((blog) => (
                    <BlogCard
                        key={blog._id}
                        blogData={blog}
                        onPreview={() =>
                            navigate(`/admin/blog/preview/${blog?._id}`, {
                                state: { blog: blog },
                            })
                        }
                        onDelete={() => {
                            setConfirmationModal({
                                text1: "Are you sure you want to delete this blog?",
                                text2: `Once deleted, the blog titled "${blog.title}" will be permanently removed.`,
                                btn1Text: "Delete",
                                btn2Text: "Cancel",
                                btn1Handler: async () => {
                                    const toastId =
                                        toast.loading("Please Wait!");
                                    try {
                                        const res =
                                            await blogApis.deleteBlogById(
                                                blog?._id
                                            );
                                        if (res) {
                                            dispatch(setIsBlogsLoaded(false));
                                            toast.success(
                                                "Blog post deleted successfully."
                                            );
                                            setConfirmationModal(null);
                                        }
                                    } catch (error) {
                                        const err = handleApiError(
                                            error,
                                            `Error While Deleting The Blog Post Due TO ${error}`
                                        );
                                        toast.error(err);
                                    } finally {
                                        toast.dismiss(toastId);
                                    }
                                },
                                btn2Handler: () => setConfirmationModal(null),
                            });
                        }}
                        onEdit={() =>
                            navigate(`/admin/blog/edit/${blog._id}`, {
                                state: { blog: blog },
                            })
                        }
                    />
                ))}
            </div>
            {confirmationModal && (
                <ConfirmationModal modalData={confirmationModal} />
            )}
        </div>
    );
};

export default AdminBlog;
