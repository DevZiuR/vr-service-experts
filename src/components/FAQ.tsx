import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "Do you offer same-day service?",
        answer: "Yes! We offer same-day appointments for appliance and HVAC repairs 7 days a week, including evenings and weekends, at no extra charge."
    },
    {
        id: 2,
        question: "Is there a service call fee?",
        answer: "We offer no service call fee with any completed repair. If you proceed with the repair, the diagnostic fee is waived."
    },
    {
        id: 3,
        question: "What areas do you serve?",
        answer: "We proudly serve Palm Beach, Broward, and Miami-Dade counties. Contact us to confirm we service your specific neighborhood."
    },
    {
        id: 4,
        question: "What brands do you service?",
        answer: "We repair all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Sub-Zero, and many more."
    },
    {
        id: 5,
        question: "Do you offer a warranty on repairs?",
        answer: "Yes, we provide a warranty on both parts and labor. Our goal is to ensure your repair lasts and you are completely satisfied."
    },
    {
        id: 6,
        question: "What forms of payment do you accept?",
        answer: "We accept all major credit cards, cash, and checks. Payment is due upon completion of the service."
    },
    {
        id: 7,
        question: "Do you repair commercial appliances?",
        answer: "Please contact us to discuss your commercial needs. We primarily specialize in residential appliance and HVAC repair."
    },
    {
        id: 8,
        question: "How can I book an appointment?",
        answer: "You can book an appointment by calling us at 954-692-4947 or by filling out the quote request form on our website."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(1); // First FAQ open by default

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* Left Column - Heading */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                            FAQ
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black font-playfair text-primary tracking-tighter mb-6 italic">
                            FAQs
                        </h2>
                        <p className="text-lg text-gray-600 font-inter mb-8 leading-relaxed">
                            Can't find the answer you're looking for? Feel free to contact us.
                            <br />
                            <span className="font-bold text-black mt-2 block">
                                Call: 954-692-4947 or 561-719-9222
                            </span>
                        </p>
                        <button
                            onClick={() => {
                                const contactSection = document.querySelector("#contact");
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="hidden lg:inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-wider hover:bg-primary transition-colors duration-300"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openId === faq.id
                                    ? "bg-[#1A1A1A] border-primary/30 shadow-xl scale-[1.02]"
                                    : "bg-[#111111] border-white/5 hover:bg-[#1A1A1A]"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors duration-200"
                                    aria-expanded={openId === faq.id}
                                >
                                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${openId === faq.id ? "text-white" : "text-gray-200"
                                        }`}>
                                        {faq.question}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openId === faq.id
                                            ? "bg-primary text-white rotate-45"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                            }`}
                                    >
                                        <Plus className="h-5 w-5 transition-transform duration-300" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-inter">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Only Contact Button */}
                    <div className="lg:hidden col-span-1 mt-8 text-center">
                        <button
                            onClick={() => {
                                const contactSection = document.querySelector("#contact");
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-wider hover:bg-primary transition-colors duration-300 w-full"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
