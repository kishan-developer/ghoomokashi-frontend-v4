const TextArea = ({ label, name, register, errors, validation }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                {...register(name, validation)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows="4"
            />
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );
};

export default TextArea;
