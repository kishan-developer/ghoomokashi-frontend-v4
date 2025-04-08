import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import TextInput from "../../../Components/Common/CustomInputs/TextInput";
import SelectInput from "../../../Components/Common/CustomInputs/SelectInput";
import TextArea from "../../../Components/Common/CustomInputs/TextArea";
import FileInput from "../../../Components/Common/CustomInputs/FileInput";
import Button from "../Common/Button";

const ViewServiceModal = ({ onClose, service }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Service Details
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4 space-y-3 text-gray-800">
                    <p>
                        <strong className="opacity-80">Title:</strong>{" "}
                        {service?.title}
                    </p>

                    <p>
                        <strong className="opacity-80">Description:</strong>{" "}
                        {service?.content}
                    </p>

                    {/* Image */}
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
                        <img
                            src={service?.ImageUrl || "/public/placholder.jpg"}
                            alt={service?.title}
                            className="w-full h-52 object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-4">
                    <Button
                        onClick={onClose}
                        iconPosition="left"
                        variant="primary"
                        size="md"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

const EditServiceModal = ({ onClose, onSubmit, defaultValues }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues });

    useEffect(() => {
        if (defaultValues) {
            Object.keys(defaultValues).forEach((key) => {
                setValue(key, defaultValues[key]);
            });
        }
    }, [defaultValues, setValue]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Edit Service
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={22} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 mt-4"
                >
                    <TextInput
                        label="Service Title"
                        name="title"
                        register={register}
                        errors={errors}
                        required
                    />

                    <TextArea
                        label="Description"
                        name="content"
                        register={register}
                        errors={errors}
                        required
                    />

                    <FileInput
                        label="Upload Image"
                        name="ImageUrl"
                        register={register}
                        preUrl={defaultValues?.ImageUrl}
                    />

                    {/* Footer Buttons */}
                    <div className="flex justify-end space-x-2">
                        <Button onClick={onClose} variant="secondary" size="md">
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary" size="md">
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CreateServiceModal = ({ onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Create Service
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={22} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit((data) => {
                        onSubmit({ ...data, ImageUrl: data.ImageUrl[0] });
                    })}
                    className="space-y-4 mt-4"
                >
                    <FileInput
                        label="Upload Image"
                        name="ImageUrl"
                        register={register}
                        required={true}
                    />
                    <TextInput
                        label="Service Title"
                        name="title"
                        register={register}
                        errors={errors}
                        validation={{ required: "Service title is required*" }}
                    />
                    <TextArea
                        label="Description"
                        name="content"
                        register={register}
                        errors={errors}
                        validation={{ required: "Description is required*" }}
                    />

                    {/* Footer Buttons */}
                    <div className="flex justify-end space-x-2">
                        <Button onClick={onClose} variant="secondary" size="md">
                            Cancel
                        </Button>
                        <Button variant="primary" size="md" type="submit">
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { ViewServiceModal, EditServiceModal, CreateServiceModal };
