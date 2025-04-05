import React from "react";

const Button = ({
    type = "button",
    children,
    icon: Icon,
    iconPosition = "left",
    variant = "primary",
    size = "md",
    fullWidth = false,
    onClick,
}) => {
    // Variants (Styles)
    const variants = {
        primary: "bg-red-500 text-white hover:bg-red-600",
        secondary: "bg-gray-700 text-white hover:bg-gray-800",
        outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
        ghost: "text-gray-700 hover:bg-gray-200",
    };

    // Responsive Sizes
    const sizes = {
        sm: "px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base",
        md: "px-5 py-2 text-base sm:px-6 sm:py-3 sm:text-lg",
        lg: "px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 
                ${variants[variant]} ${sizes[size]} ${
                fullWidth ? "w-full" : ""
            }`}
        >
            {/* Left Icon */}
            {Icon && iconPosition === "left" && (
                <Icon className="text-lg sm:text-xl" />
            )}

            {children}

            {/* Right Icon */}
            {Icon && iconPosition === "right" && (
                <Icon className="text-lg sm:text-xl" />
            )}
        </button>
    );
};

export default Button;
