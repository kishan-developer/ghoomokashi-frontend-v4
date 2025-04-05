const SelectInput = ({
    label,
    name,
    register,
    errors,
    options,
    validation,
}) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                {...register(name, validation)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500
                focus:border-transparent"
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );
};

export default SelectInput;
