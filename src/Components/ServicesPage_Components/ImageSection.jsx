import React from "react";

function ImageSection() {
    return (
        <div className="w-[50%] h-[60vh] p-10 ">
            <img
                className="w-full h-full rounded-lg  "
                src={`${"/varanasi_ghat.jpg" || "/public/placholder.jpg"}`}
                alt="ghat"
                loading="lazy"
            />
        </div>
    );
}

export default ImageSection;
