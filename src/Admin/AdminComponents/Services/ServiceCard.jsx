import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ServiceCard = ({ service, onEdit, onDelete, onPreview }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102">
            {/* Service Image */}
            <img
                src={service?.ImageUrl}
                alt={service?.title}
                className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {service?.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {service?.content}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Preview Button */}
                    <button
                        onClick={() => onPreview(service)}
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm cursor-pointer"
                    >
                        <FaEye /> Preview
                    </button>

                    {/* Edit & Delete Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => onEdit(service)}
                            className="text-yellow-500 hover:text-yellow-600 text-sm cursor-pointer"
                        >
                            <FaEdit />
                        </button>
                        <button
                            onClick={() => onDelete(service)}
                            className="text-red-500 hover:text-red-600 text-sm cursor-pointer"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
