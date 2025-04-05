import { FaPlus } from "react-icons/fa";
import Button from "../Common/Button";
import Heading from "../Common/Heading";
import SearchInput from "../Common/SearchInput";
import ServiceCard from "./ServiceCard";
import { useMemo, useState } from "react";
import ConfirmationModal from "../../../Components/Common/ConfirmationModal";
import {
    CreateServiceModal,
    EditServiceModal,
    ViewServiceModal,
} from "./ServiceAddEditPreviewModal";
import { servicesApi } from "../../../Services/api/services/servicesApi";
import { toast } from "react-toastify";
import { setIsServicesLoaded } from "../../../Redux/slices/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleApiError } from "../../../Services/handleApiError";
import { uploadFile } from "../../../Services/apiConnector";

const AdminServices = () => {
    const dispatch = useDispatch();
    const servicesData = useSelector((state) => state.services.services);

    const [modalData, setModalData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isViewing, setIsViewing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    // Preview Services Handler
    const handlePreview = (service) => {
        setIsViewing(service);
    };
    // Edit Services Handler
    const handleEdit = async (newServiceData) => {
        console.log("Edit ");
        if (newServiceData.ImageUrl.length < 1) {
            return toast.error("Please Update Image Or Cancel The Task.");
        }
        if (!isServiceUpdated(newServiceData, isEditing))
            return toast.error("Opps ! Please update something.");

        const toastId = toast.loading("Updating  your service. Please wait!");

        try {
            const res = await servicesApi.editServiceById(
                isEditing._id,
                newServiceData
            );
            toast.success("Service updated successfully.");
            dispatch(setIsServicesLoaded(false));
            setIsEditing(false);
        } catch (error) {
            const err = handleApiError(
                error,
                "Error While Updating The Service.."
            );
            toast.error(`Error While Updating The Services Due To ${err}`);
        } finally {
            toast.dismiss(toastId);
        }
    };
    // Delete Services Handler
    const handleDelete = (service) => {
        setModalData({
            text1: "Delete Confirmation",
            text2: "Are you sure you want to delete this service? This action cannot be undone.",
            btn1Text: "Yes, Delete",
            btn1Handler: async () => {
                const toastId = toast.loading(
                    "Deleting Service. Please wait !"
                );
                try {
                    const res = await servicesApi.deleteServiceById(
                        service._id
                    );
                    toast.success("Service deleted successfully.");
                    dispatch(setIsServicesLoaded(false));
                    setModalData(null); // Close modal after deletion
                } catch (error) {
                    const err = handleApiError(
                        error,
                        "error while  deleting the service"
                    );
                    toast.error(
                        `Error While Deleting The Service Due To ${err}`
                    );
                } finally {
                    toast.dismiss(toastId);
                }
            },
            btn2Text: "Cancel",
            btn2Handler: () => setModalData(null),
        });
    };

    const handleCreate = async (data) => {
        const toastId = toast.loading("Creating Service. Please Wait !");
        try {
            const ImageUrl = await uploadFile(data.ImageUrl);
            const res = await servicesApi.createServices({ ...data, ImageUrl });
            if (res) {
                toast.success("Services Created successfully.");
                dispatch(setIsServicesLoaded(false));
                setIsCreating(false);
            }
        } catch (error) {
            const err = handleApiError(
                error,
                "error while creating the services"
            );
            toast.error(`Error while creating the services due to ${err}`);
        } finally {
            toast.dismiss(toastId);
        }
    };

    const isServiceUpdated = (newFormData, oldFormData) => {
        if (!newFormData.ImageUrl)
            return toast.error("Please Updated Images Or Cancel.");
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
        return false;
    };

    const filteredServices = useMemo(() => {
        if (!searchQuery.trim()) return servicesData; //  Show all services if search is empty

        return servicesData
            .filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => a.title.localeCompare(b.title)); //  Alphabetically sorted
    }, [searchQuery, servicesData]);

    return (
        // Container
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
                    Add Services
                </Button>
            </div>
            <hr className="mt-2" />
            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-4 py-4">
                {filteredServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onDelete={handleDelete}
                        onEdit={() => setIsEditing(service)}
                        onPreview={handlePreview}
                    />
                ))}
            </div>

            {modalData && <ConfirmationModal modalData={modalData} />}
            {isViewing && (
                <ViewServiceModal
                    onClose={() => setIsViewing(false)}
                    service={isViewing}
                />
            )}

            {isCreating && (
                <CreateServiceModal
                    onClose={() => setIsCreating(false)}
                    onSubmit={handleCreate}
                />
            )}
            {isEditing && (
                <EditServiceModal
                    onClose={() => setIsEditing(false)}
                    defaultValues={isEditing}
                    onSubmit={handleEdit}
                />
            )}
        </div>
    );
};

export default AdminServices;
