import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import TextInput from "../../../Components/Common/CustomInputs/TextInput";
import TextArea from "../../../Components/Common/CustomInputs/TextArea";
import FileInput from "../../../Components/Common/CustomInputs/FileInput";
import Button from "../Common/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ViewPackageModal = ({ onClose, packageData }) => {
    useEffect(() => {
        // Disable background scroll when modal opens
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-white/40 backdrop-blur-xl flex items-center justify-center overflow-y-auto">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-lg relative my-10">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Package Details
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="mt-4 space-y-3 text-gray-800 max-h-[60vh] overflow-y-auto pr-2">
                    <p>
                        <strong className="opacity-80">Title:</strong>{" "}
                        {packageData?.title}
                    </p>
                    <p>
                        <strong className="opacity-80">Description:</strong>{" "}
                        <span
                            dangerouslySetInnerHTML={{
                                __html: packageData?.content,
                            }}
                        ></span>
                    </p>
                    <p>
                        <strong className="opacity-80">Duration:</strong>{" "}
                        {packageData?.days}
                    </p>
                    <p>
                        <strong className="opacity-80">Destinations:</strong>{" "}
                        {packageData?.destination?.join(", ")}
                    </p>

                    {/* Image */}
                    {packageData?.ImageUrl && (
                        <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
                            <img
                                src={packageData.ImageUrl}
                                alt={packageData.title}
                                className="w-full h-52 object-cover object-center"
                            />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-4">
                    <Button onClick={onClose} variant="primary" size="md">
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

const EditPackageModal = ({ onClose, onSubmit, defaultValues }) => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
    } = useForm({ defaultValues });

    const [destinations, setDestinations] = useState(
        defaultValues?.destination || []
    );
    const [destinationInput, setDestinationInput] = useState("");

    useEffect(() => {
        if (defaultValues) {
            Object.keys(defaultValues).forEach((key) => {
                setValue(key, defaultValues[key]);
            });
        }
    }, [defaultValues, setValue]);

    // Function to Add Destination
    const addDestination = () => {
        if (destinationInput.trim()) {
            setDestinations([...destinations, destinationInput.trim()]);
            setDestinationInput("");
        }
    };

    // Function to Remove Destination
    const removeDestination = (index) => {
        setDestinations(destinations.filter((_, i) => i !== index));
    };
    const [quillKey, setQuillKey] = useState(1);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Edit Package
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={22} />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit((data) => {
                        if (!destinations.length) {
                            return toast.error("Destination is required");
                        }
                        onSubmit({ ...data, destination: destinations }, () => {
                            setQuillKey(quillKey + 1);
                            reset();
                        });
                    })}
                    className="grid grid-cols-2 gap-4 mt-4"
                >
                    <div className="col-span-2">
                        <FileInput
                            label="Upload Image (Only JPG,JPEG,PNG allowed)*"
                            name="ImageUrl"
                            register={register}
                            preUrl={defaultValues?.ImageUrl}
                        />
                    </div>
                    <TextInput
                        label="Package Title"
                        name="title"
                        register={register}
                        errors={errors}
                        required
                    />
                    <TextInput
                        label="Duration"
                        name="days"
                        register={register}
                        errors={errors}
                        required
                    />
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">
                            Description
                        </label>
                        <Controller
                            key={quillKey}
                            name="content"
                            control={control}
                            rules={{
                                required: "Content is required",
                                minLength: {
                                    value: 50,
                                    message:
                                        "Content should be at least 50 characters long",
                                },
                            }}
                            render={({ field }) => (
                                <ReactQuill
                                    {...field}
                                    theme="snow"
                                    className="mt-2 p-2 border rounded-md"
                                    placeholder="Write your Package content..."
                                />
                            )}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm">
                                {errors.content.message}
                            </p>
                        )}
                    </div>
                    {/* Destination Input Section */}
                    <div className="col-span-2 border-t border-gray-300 pt-4">
                        <label className="block font-medium text-gray-700">
                            Destinations
                        </label>
                        <div className="flex gap-2 mt-1">
                            <input
                                type="text"
                                className="border p-2 rounded-md w-full"
                                value={destinationInput}
                                onChange={(e) =>
                                    setDestinationInput(e.target.value)
                                }
                                placeholder="Enter destination"
                            />
                            <button
                                type="button"
                                onClick={addDestination}
                                className="bg-blue-500 text-white px-3 py-2 rounded-md"
                            >
                                Add
                            </button>
                        </div>
                        {/* Scrollable Destination List */}
                        <div className="mt-2 max-h-32 overflow-y-auto border rounded-md p-2">
                            {destinations.length > 0 ? (
                                destinations.map((dest, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-gray-200 p-2 rounded-md mt-1"
                                    >
                                        <span>{dest}</span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeDestination(index)
                                            }
                                            className="text-red-500"
                                        >
                                            ✖
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">
                                    No destinations added yet.
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="col-span-2 flex justify-end space-x-2">
                        <Button onClick={onClose} variant="secondary" size="md">
                            Cancel
                        </Button>
                        <Button variant="primary" size="md" type="submit">
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CreatePackageModal = ({ onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [destinations, setDestinations] = useState([]);
    const [destinationInput, setDestinationInput] = useState("");

    // Function to Add Destination
    const addDestination = () => {
        if (destinationInput.trim()) {
            setDestinations([...destinations, destinationInput.trim()]);
            setDestinationInput("");
        }
    };

    // Function to Remove Destination
    const removeDestination = (index) => {
        setDestinations(destinations.filter((_, i) => i !== index));
    };

    const [quillKey, setQuillKey] = useState(1);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-xl z-50">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-300 p-6 rounded-2xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Create Package
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:bg-gray-300/50 p-2 rounded-full transition"
                    >
                        <IoClose size={22} />
                    </button>
                </div>

                {/* Form with Two-Column Layout */}
                <form
                    onSubmit={handleSubmit((data) => {
                        if (!destinations.length) {
                            return toast.error("Destination is required");
                        }
                        onSubmit({ ...data, destination: destinations }, () => {
                            reset();
                            setQuillKey(quillKey + 1);
                        });
                    })}
                    className="grid grid-cols-2 gap-4 mt-4"
                >
                    <div className="col-span-2">
                        <FileInput
                            label="Upload Image (Only JPG,JPEG,PNG allowed)*"
                            name="ImageUrl"
                            register={register}
                            required
                            validation={{ required: "Image file is required*" }}
                        />
                    </div>

                    <TextInput
                        label="Package Title"
                        name="title"
                        register={register}
                        errors={errors}
                        required
                        validation={{
                            required: "Package title file is required*",
                        }}
                    />
                    <TextInput
                        label="Duration"
                        name="days"
                        register={register}
                        errors={errors}
                        required
                        validation={{
                            required: "Package duration is required*",
                        }}
                    />

                    <div className="col-span-2">
                        <label className="block text-sm font-medium">
                            Description
                        </label>
                        <Controller
                            key={quillKey}
                            name="content"
                            control={control}
                            rules={{
                                required: "Content is required",
                                minLength: {
                                    value: 50,
                                    message:
                                        "Content should be at least 50 characters long",
                                },
                            }}
                            render={({ field }) => (
                                <ReactQuill
                                    {...field}
                                    theme="snow"
                                    className="mt-2 p-2 border rounded-md"
                                    placeholder="Write your Package content..."
                                />
                            )}
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm">
                                {errors.content.message}
                            </p>
                        )}
                    </div>

                    {/* Destination Input Section */}
                    <div className="col-span-2 border-t border-gray-300 pt-4">
                        <label className="block font-medium text-gray-700">
                            Destinations
                        </label>
                        <div className="flex gap-2 mt-1">
                            <input
                                type="text"
                                className="border p-2 rounded-md w-full"
                                value={destinationInput}
                                onChange={(e) =>
                                    setDestinationInput(e.target.value)
                                }
                                placeholder="Enter destination"
                            />
                            <button
                                type="button"
                                onClick={addDestination}
                                className="bg-blue-500 text-white px-3 py-2 rounded-md"
                            >
                                Add
                            </button>
                        </div>

                        {/* Scrollable Destination List */}
                        <div className="mt-2 max-h-32 overflow-y-auto border rounded-md p-2">
                            {destinations.length > 0 ? (
                                destinations.map((dest, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-gray-200 p-2 rounded-md mt-1"
                                    >
                                        <span>{dest}</span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeDestination(index)
                                            }
                                            className="text-red-500"
                                        >
                                            ✖
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">
                                    No destinations added yet.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="col-span-2 flex justify-end space-x-2">
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

export { ViewPackageModal, EditPackageModal, CreatePackageModal };
