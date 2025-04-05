function MissionSection() {
    return (
        <section className=" w-[90%] md:w-[80%] p-8 rounded-lg flex flex-col md:flex-row items-center text-center md:text-left mx-auto">

            {/* Text Content Section */}
            <div className="md:w-1/2 p-6 flex flex-col items-start rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    At <span className="font-semibold ">Ghoomo Kashi</span>, our mission is to inspire and empower travelers
                    by providing seamless, hassle-free travel experiences. We strive to offer personalized itineraries, expert travel guidance,
                    and top-notch customer service, ensuring every journey is memorable, enriching, and stress-free.
                </p>
            </div>
            
            
            
            {/* Image Section */}
            <div className="md:w-1/2 p-4 flex justify-center">
                <img
                    src="/services/Tr_1080x1080_services_page_7_.jpg"
                    alt="Travel"
                    className="w-full max-w-[400px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </div>

            
        </section>
    );
}

export default MissionSection;
