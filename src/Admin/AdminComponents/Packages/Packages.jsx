import { useDispatch, useSelector } from "react-redux";
import PackageCard from "./PackageCard";
import SearchInput from "../Common/SearchInput";
import { useMemo, useState } from "react";
import Button from "../Common/Button";
import { FaPlus } from "react-icons/fa";
import ConfirmationModal from "../../../Components/Common/ConfirmationModal";
import { toast } from "react-toastify";
import { handleApiError } from "../../../Services/handleApiError";
import { setIsPackagesLoaded } from "../../../Redux/slices/packagesSlice";
import { packagesApis } from "../../../Services/api/packages/packagesApis";
import {
    CreatePackageModal,
    EditPackageModal,
    ViewPackageModal,
} from "./PackageAddEditPreviewModal";
import { uploadFile } from "../../../Services/apiConnector";

const AdminPackages = () => {
    const packagesData = useSelector((state) => state.packages.packages);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [modalData, setModalData] = useState(null);
    const [isViewing, setIsViewing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const filteredServices = useMemo(() => {
        if (!searchQuery.trim()) return packagesData; //  Show all services if search is empty

        return packagesData
            .filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => a.title.localeCompare(b.title)); //  Alphabetically sorted
    }, [searchQuery, packagesData]);
    // Handlers
    const handlePreview = (packageData) => {
        setIsViewing(packageData);
    };
    // Delete Package Handler
    const handleDelete = (packageData) => {
        setModalData({
            text1: "Delete Confirmation",
            text2: "Are you sure you want to delete this Package? This action cannot be undone.",
            btn1Text: "Yes, Delete",
            btn1Handler: async () => {
                const toastId = toast.loading(
                    "Deleting Service. Please wait !"
                );
                try {
                    const res = await packagesApis.deletePackageById(
                        packageData._id
                    );
                    toast.success("Package deleted successfully.");
                    dispatch(setIsPackagesLoaded(false));
                    setModalData(null); // Close modal after deletion
                } catch (error) {
                    const err = handleApiError(
                        error,
                        "error while  deleting the Package"
                    );
                    toast.error(
                        `Error While Deleting The Package Due To ${err}`
                    );
                } finally {
                    toast.dismiss(toastId);
                }
            },
            btn2Text: "Cancel",
            btn2Handler: () => setModalData(null),
        });
    };

    // Create New Package Handler
    const handleCreate = async (data) => {
        const toastId = toast.loading("Creating Packges. Please Wait !");
        try {
            const ImageUrl = await uploadFile(data.ImageUrl[0]);
            const res = await packagesApis.createPackage({ ...data, ImageUrl });
            if (res) {
                toast.success("Package Created successfully.");
                dispatch(setIsPackagesLoaded(false));
                setIsCreating(false);
            }
        } catch (error) {
            const err = handleApiError(
                error,
                "error while creating the package"
            );
            toast.error(`Error while creating the Package due to ${err}`);
        } finally {
            toast.dismiss(toastId);
        }
    };

    const isPackageUpdated = (newFormData, oldFormData) => {
        if (!newFormData.ImageUrl)
            return toast.error("Please Update Image or Cancel.");

        if (
            newFormData.ImageUrl !== oldFormData.ImageUrl &&
            newFormData.ImageUrl.length === 1
        ) {
            return true;
        }
        if (newFormData.title.trim() !== oldFormData.title.trim()) {
            return true;
        }
        if (newFormData.content.trim() !== oldFormData.content.trim()) {
            return true;
        }
        if (newFormData.days.trim() !== oldFormData.days.trim()) {
            return true;
        }

        // Safely compare destination arrays
        const newDestinations = newFormData.destination || [];
        const oldDestinations = oldFormData.destination || [];

        if (newDestinations.length !== oldDestinations.length) {
            return true;
        }

        for (let i = 0; i < newDestinations.length; i++) {
            if (newDestinations[i]?.trim() !== oldDestinations[i]?.trim()) {
                return true;
            }
        }

        return false;
    };

    const handleEdit = async (newServiceData) => {
        if (newServiceData.ImageUrl.length < 1) {
            return toast.error("Please Update Image Or Cancel The Task.");
        }
        if (!isPackageUpdated(newServiceData, isEditing))
            return toast.error("Opps ! Please update something.");

        const toastId = toast.loading("Updating  your service. Please wait!");

        try {
            const res = await packagesApis.editPackageById(
                isEditing._id,
                newServiceData
            );
            toast.success("Package updated successfully.");
            dispatch(setIsPackagesLoaded(false));
            setIsEditing(false);
        } catch (error) {
            const err = handleApiError(
                error,
                "Error While Updating The Package.."
            );
            toast.error(`Error While Updating The Package Due To ${err}`);
        } finally {
            toast.dismiss(toastId);
        }
    };
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
                    onClick={() => setIsCreating(true)}
                >
                    Add Packages
                </Button>
            </div>
            <hr className="mt-2" />
            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-4 py-4">
                {filteredServices?.map((item) => (
                    <PackageCard
                        packageData={item}
                        onEdit={() => setIsEditing(item)}
                        onDelete={handleDelete}
                        onPreview={handlePreview}
                    />
                ))}
            </div>

            {modalData && <ConfirmationModal modalData={modalData} />}
            {isViewing && (
                <ViewPackageModal
                    onClose={() => setIsViewing(false)}
                    packageData={isViewing}
                />
            )}
            {isEditing && (
                <EditPackageModal
                    onClose={() => setIsEditing(false)}
                    defaultValues={isEditing}
                    onSubmit={handleEdit}
                />
            )}

            {isCreating && (
                <CreatePackageModal
                    onClose={() => setIsCreating(false)}
                    onSubmit={handleCreate}
                />
            )}
        </div>
    );
};

export default AdminPackages;
