import React, { useMemo } from "react";
import LazyLoad from "react-lazyload";

const Testimonials = () => {
    const testimonials = useMemo(() => [
        {
            name: "Satyam Hari",
            text: "The trip was well planned and comfortable. It was wonderful! Cab driver was excellent and the variety of venues and hotels was great.",
            location: "Delhi, India",
            image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name: "Archita Upadhyay",
            text: "They provide very good services.....enjoyed everything.....stay was totally perfect ..... definately try this.",
            location: "Mumbai, India",
            image: "/review/r_3.avif",
        },
        {
            name: "Bhawana Pandit",
            text: "Ghoomo Kashi is a great resource for exploring Varanasi, offering detailed info on temples, ghats, festivals, and travel tips to make trip planning easy.",
            location: "Ahmedabad, India",
            image: "/review/f_2.avif",
        },
    ]);
    return (
        <section
            className="py-12 w-full  lg:mt-10 mt-2 bg-cover bg-center bg-no-repeat bg-"
            // style={{ backgroundImage: "url(/Scroller/map.jpg)" }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center lg:py-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    What Our Customers Say
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={
                                        testimonial.image ||
                                        "/public/placholder.jpg"
                                    }
                                    alt={testimonial.name}
                                    loading="lazy"
                                    className="w-14 h-14 object-cover rounded-full border-2 border-red-400"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 text-sm leading-relaxed italic">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
