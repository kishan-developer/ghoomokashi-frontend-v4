import { useMemo, useState } from "react";

function FAQSection() {
    const faqs = useMemo(() => [
        {
            question: "What destinations do you offer?",
            answer: "We offer travel packages to a wide range of destinations, including domestic and international locations.",
        },
        {
            question: "Can I customize my travel itinerary?",
            answer: "Yes, we provide personalized travel itineraries tailored to your preferences and budget.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit/debit cards, net banking, UPI, and digital wallets for secure payments.",
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach our support team via email, phone, or live chat on our website for assistance.",
        },
    ]);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-12 lg:w-[60%] w-[90%] p-8 bg-gray-100 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 pb-4 cursor-pointer"
                    >
                        <button
                            className="w-full text-left flex justify-between items-center text-lg font-semibold focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="text-xl cursor-pointer">
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQSection;
