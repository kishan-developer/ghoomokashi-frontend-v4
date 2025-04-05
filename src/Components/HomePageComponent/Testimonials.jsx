import React from "react";
import LazyLoad from 'react-lazyload';

const testimonials = [
    {
        name: "Amit Sharma",
        text: "Amazing travel experience! The services were top-notch and everything was well-organized.",
        location: "Delhi, India",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Priya Verma",
        text: "I had a wonderful trip to Varanasi. Highly recommended for hassle-free travel!",
        location: "Mumbai, India",
        image: "/review/r_3.avif",
    },
    {
        name: "Nimi Patel",
        text: "Best travel service I’ve ever used. The car rental was smooth and affordable.",
        location: "Ahmedabad, India",
        image: "/review/f_2.avif",
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 w-full  lg:mt-10 mt-2 bg-cover bg-center bg-no-repeat bg-" 
        // style={{ backgroundImage: "url(/Scroller/map.jpg)" }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <div className="flex items-center space-x-4">
                                <LazyLoad>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full border-2 border-blue-500"
                                    />
                                </LazyLoad>
                                
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
