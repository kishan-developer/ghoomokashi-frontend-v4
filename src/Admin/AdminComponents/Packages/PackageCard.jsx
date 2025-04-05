import {
    FaEdit,
    FaTrash,
    FaEye,
    FaMapMarkerAlt,
    FaUsers,
    FaClock,
} from "react-icons/fa";

const PackageCard = ({ packageData, onEdit, onDelete, onPreview }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102">
            {/* Package Image */}
            <img
                src={packageData?.ImageUrl || "/default-package.jpg"} // Default image fallback
                alt={packageData?.title}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {packageData?.title}
                </h3>
                <p
                    className="text-gray-600 text-sm mt-1 truncate"
                    dangerouslySetInnerHTML={{
                        __html: packageData?.content?.slice(0, 50),
                    }}
                ></p>

                {/* Package Info */}
                <div className="flex items-center justify-between text-gray-600 text-sm mt-3">
                    <div className="flex items-center gap-1">
                        <FaClock className="text-red-500" /> {packageData?.days}
                    </div>
                </div>

                {/* Destinations */}
                <div className="mt-3 text-gray-500 text-sm">
                    <FaMapMarkerAlt className="inline text-green-500 mr-1" />
                    {packageData?.destination?.join(", ")}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Preview Button */}
                    <button
                        onClick={() => onPreview(packageData)}
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm cursor-pointer"
                    >
                        <FaEye /> Preview
                    </button>

                    {/* Edit & Delete Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => onEdit(packageData)}
                            className="text-yellow-500 hover:text-yellow-600 text-sm cursor-pointer"
                        >
                            <FaEdit />
                        </button>
                        <button
                            onClick={() => onDelete(packageData)}
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

export default PackageCard;
