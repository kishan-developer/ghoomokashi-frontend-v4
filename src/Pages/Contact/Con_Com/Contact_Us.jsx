import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact_Us = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send(
                "service_hw8adtt",
                "template_58fv2xh",
                data,
                "ORPdMtnsw34TNtIO4"
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    reset(); // Reset form after submission
                },
                (error) => {
                    toast.error("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 rounded-2xl space-y-4"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    {...register("from_name", { required: "Name is required" })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.from_name && (
                    <p className="text-red-500 text-sm">
                        {errors.from_name.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    {...register("from_email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Enter a valid email",
                        },
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.from_email && (
                    <p className="text-red-500 text-sm">
                        {errors.from_email.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Phone
                </label>
                <input
                    type="phone"
                    {...register("from_phone", {
                        required: "Phone number is required",
                        minLength: {
                            value: 10,
                            message: "Phone number must be 10 digits",
                        },
                        maxLength: {
                            value: 10,
                            message: "Phone number must be 10 digits",
                        },
                        pattern: {
                            value: /^[1-9][0-9]{9}$/,
                            message:
                                "Phone number must be 10 digits, only numbers, and cannot start with 0",
                        },
                    })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.from_phone && (
                    <p className="text-red-500 text-sm">
                        {errors.from_phone.message}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                    })}
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-[#e8464b] text-white py-2 px-4 rounded-lg transition"
            >
                Send Message
            </button>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                theme="light"
            />
        </form>
    );
};

export default Contact_Us;
