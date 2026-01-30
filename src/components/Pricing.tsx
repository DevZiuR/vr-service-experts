import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Pricing = () => {
    const plans = [
        {
            name: "Standard Detail",
            price: "$120+",
            features: [
                "Interior Vacuum",
                "Interior Wipe Down",
                "Window Wipe Down",
                "Foam Wash",
                "Wheel & Tire Cleaning",
                "Tire Dressing",
            ],
            popular: false,
        },
        {
            name: "Premium Detail",
            price: "$200+",
            features: [
                "Full Interior Vacuum",
                "Full Interior Wipe Down",
                "Door Jams",
                "Air Freshener",
                "Leather Cleaning & Conditioning",
                "Pre Rinse Wash",
                "Foam Wash",
                "Full Wheel & Wheel Well Wash",
                "Ceramic Foam (2+ months sealant)",
            ],
            popular: true,
        },
        {
            name: "VIP Detail",
            price: "$300+",
            features: [
                "Full Interior Vacuum",
                "Full Interior Wipe Down",
                "Window Wipedown",
                "Leather Seats Deep Clean & Conditioning",
                "Steam Clean Full Surface",
                "Shampoo & Wet Extract Seats/Matts",
                "Foam Bath",
                "Full Wheel & Wheel Well Wash",
                "Tire Dressing",
                "Iron Decontamination",
                "Clay Bar Treatment",
                "Ceramic Foam Sealant (6+ months guarantee)",
            ],
            popular: false,
        },
    ];

    const addons = [
        "Dog Hair Removal",
        "Water Spot Removal",
        "Odor Removal",
        "Stain Removal",
        "Headliner Repair",
        "Window Ceramic Coating",
        "Rim Ceramic Coating",
        "Ceramic Coating",
        "Paint Enhancement",
        "Engine Bay Cleaning",
    ];

    const handleCall = () => {
        window.location.href = "tel:7866830166";
    };

    return (
        <section id="pricing" className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
                    <div className="lg:col-span-7 space-y-4">
                        <span className="text-white font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-[#D6D1B9]"></span>
                            Pricing Packages
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold font-montserrat text-white leading-[0.9] tracking-tighter uppercase">
                            SELECT YOUR <br />
                            <span className="italic font-playfair font-medium">DETAIL LEVEL.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="text-lg text-gray-400 font-inter leading-relaxed max-w-md">
                            Choose from our three core detailing packages designed to restore and protect your vehicle. Professional care for every budget.
                        </p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <RevealOnScroll key={index} animation="slide-up" delay={index * 150}>
                            <div
                                className={`relative flex flex-col h-full rounded-[2rem] p-8 transition-all duration-500 border ${plan.popular
                                    ? "bg-[#1A1A1A] border-[#D6D1B9]/30 shadow-2xl scale-105 z-10"
                                    : "bg-[#1A1A1A] border-white/10"
                                    } hover:-translate-y-2`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D6D1B9] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold font-montserrat uppercase tracking-tight text-white">
                                        {plan.name}
                                    </h3>
                                    <div className="mt-4 flex items-baseline gap-1">
                                        <span className="text-5xl font-bold tracking-tighter text-white">{plan.price}</span>
                                    </div>
                                </div>

                                <ul className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-[#D6D1B9]/20" : "bg-white/10"}`}>
                                                <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-[#D6D1B9]" : "text-white/60"}`} />
                                            </div>
                                            <span className="text-sm text-gray-400 font-inter font-medium leading-tight line-clamp-2">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    onClick={handleCall}
                                    className="w-full py-6 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] bg-[#D6D1B9] text-black hover:bg-[#D6D1B9]/90 transition-all duration-300 shadow-lg"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Add-ons Section */}
                <div className="mt-20 px-8 py-16 bg-[#1A1A1A] rounded-[3rem] border border-white/10">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-5xl font-bold font-montserrat text-white uppercase tracking-tighter mb-4">
                            Add-on <span className="italic font-playfair font-medium">Services</span>
                        </h3>
                        <p className="text-gray-500 font-inter font-medium uppercase tracking-widest text-sm">
                            Tailor your detail with specific treatments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {addons.map((addon, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-[#D6D1B9] rounded-2xl border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/10"
                            >
                                <div className="w-2 h-2 rounded-full bg-black/40" />
                                <span className="text-xs font-bold font-inter text-black uppercase tracking-tight leading-tight">
                                    {addon}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center">
                        <p className="text-white font-inter text-sm md:text-base font-medium leading-relaxed uppercase tracking-wider">
                            If you choose a <span className="text-[#D6D1B9] font-bold">Standard, Premium, or VIP package</span>,
                            any add-on is just <span className="bg-[#D6D1B9] text-black px-2 py-0.5 rounded font-bold italic">$50</span>
                            <br className="hidden md:block" />
                            <span className="text-[10px] text-gray-500 block mt-4">
                                *EXCLUDING CERAMIC COATINGS, PAINT ENHANCEMENTS, RIM/WINDOW CERAMIC COATINGS, AND HEADLINER REPAIR.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
