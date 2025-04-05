export default function RightImageLeftContent({ item, onBook }) {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center w-[90%] max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-[300px]">
                <img
                    src={item.ImageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.content}</p>
                <button
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg self-start cursor-pointer"
                    onClick={onBook}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
}
