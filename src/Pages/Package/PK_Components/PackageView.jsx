import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "../../../Components/Common/CustomInputs/TextInput";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const PackageView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state?.data ?? [];
    const [isModalOpen, setIsModalOpen] = useState(
        !localStorage.getItem("isUserDataSubmitted")
    );

    // react-hook-form setup
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Function to handle form submission
    const onSubmit = (formData) => {
        const toastId = toast.loading("Please Wait...");
        emailjs
            .send(
                "service_hw8adtt",
                "template_58fv2xh",
                formData,
                "ORPdMtnsw34TNtIO4"
            )
            .then(
                () => {
                    toast.dismiss(toastId);
                    toast.success("Form Submitted successfully!");
                    reset(); // Reset form after submission
                    localStorage.setItem("isUserDataSubmitted", "true");
                    setIsModalOpen(false);
                },
                (error) => {
                    toast.dismiss(toastId);
                    toast.error("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
        // Close the modal after successful submission
    };

    return (
        <div className="lg:w-[60%] w-full mx-auto flex flex-col gap-5 p-6 rounded-lg">
            {/* Modal for user details input */}
            {isModalOpen && (
                <div
                    id="packageModal"
                    className=" fixed inset-0 flex items-center justify-center "
                >
                    <div className="bg-white/90 bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-sm  w-[90%] md:w-[50%] lg:w-[40%] border border-white border-opacity-30">
                        <h2 className="text-2xl font-bold mb-3 text-center text-gray-900">
                            Welcome to Your Travel Experience
                        </h2>
                        <p className="text-center mb-5 text-gray-800">
                            To proceed and explore your selected package, please
                            enter your details below. Your information is safe
                            with us.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-3"
                        >
                            {/* Custom Input Fields */}
                            <TextInput
                                label="Name"
                                name="name"
                                register={register}
                                errors={errors}
                                validation={{ required: "Name is required" }}
                            />
                            <TextInput
                                label="Email"
                                name="email"
                                register={register}
                                errors={errors}
                                validation={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                }}
                            />
                            <TextInput
                                label="Phone"
                                name="phone"
                                register={register}
                                errors={errors}
                                validation={{
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number",
                                    },
                                }}
                            />

                            <button
                                type="submit"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Package Details */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h1 className="lg:text-3xl text-[20px] font-bold text-gray-900 mb-4 text-center">
                    {data.name}
                </h1>
                <img
                    src={data?.ImageUrl}
                    alt={data?.title}
                    className="w-full lg:h-100 object-cover rounded-md mb-6"
                />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
                <p className="text-lg text-gray-700 mb-4">
                    Duration: <strong>{data?.duration}</strong>
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Destinations:
                </h2>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                    {data?.destination?.map((item, i) => (
                        <span
                            key={i}
                            className="bg-blue-100 px-3 py-1 rounded-md"
                        >
                            {i + 1}. {item}
                        </span>
                    ))}
                </div>
            </div>

            <span className="bg-blue-100 px-3 py-1 rounded-md">
                {data.days}
            </span>
            <span>{data.content}</span>

            {/* Book Now Button */}
            <div className="mt-6 text-center">
                <button
                    onClick={() => navigate("/contact")}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default PackageView;
