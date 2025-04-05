import { useState } from "react";

const FileInput = ({
    label,
    name,
    register,
    errors,
    validation,
    required = false,
    preUrl,
}) => {
    const [preview, setPreview] = useState(preUrl ? preUrl : null);

    // Handle file change and create preview
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            {/* File Input */}
            <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                {...register(name, validation)}
                required={required}
                onChange={handleFileChange}
                className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            {errors?.name && (
                <span className="text-sm text-red-500">
                    {errors?.name?.message}
                </span>
            )}

            {/* Image Preview */}
            {preview && (
                <div className="mt-2">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                </div>
            )}

            {/* Error Message */}
        </div>
    );
};

export default FileInput;
