import React from "react";

function Heading({ text }) {
    return (
        <h1 className="text-2xl text-gray-700  font-medium capitalize">
            {text}
        </h1>
    );
}

export default Heading;
