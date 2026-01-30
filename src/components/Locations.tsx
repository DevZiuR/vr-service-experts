
import { ChevronRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const neighborhoodList = [
    "West Palm Beach", "Boca Raton", "Fort Lauderdale", "Boynton Beach",
    "Delray Beach", "Wellington", "Jupiter", "Palm Beach Gardens",
    "Hollywood", "Pompano Beach", "Coral Springs", "Pembroke Pines",
    "Plantation", "Davie", "Sunrise", "Deerfield Beach",
    "Miramar", "Coconut Creek", "Margate", "Lake Worth",
    "Greenacres", "Tamarac", "North Lauderdale", "Hallandale Beach",
    "Wilton Manors", "Lighthouse Point", "Royal Palm Beach", "Riviera Beach"
];

const zipCodes = [
    "33401", "33431", "33435", "33444", "33414", "33458", "33410", "33463",
    "33301", "33020", "33060", "33065", "33027", "33324", "33314", "33323",
    "33441", "33025", "33069", "33063", "33460", "33411", "33408", "33404",
    "33009", "33334", "33064", "33075", "33076", "33428", "33433", "33496"
];

const Locations = () => {
    return (
        <section id="locations" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Side: Map Overlay */}
                    <RevealOnScroll animation="fade-in" className="lg:sticky lg:top-32 self-start">
                        <div className="relative rounded-xl overflow-hidden bg-gray-100 h-[400px] lg:h-[700px] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.4717799307767!2d-80.1296766849767!3d26.211186983437535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9029672018883%3A0x6334515286576829!2sPompano%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1651525555555!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </RevealOnScroll>

                    {/* Right Side: Content */}
                    <div className="flex flex-col">
                        <RevealOnScroll animation="slide-up">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat leading-tight text-black mb-12 tracking-tight text-center md:text-left uppercase">
                                AREAS <span className="italic font-playfair font-medium">WE</span> <br />
                                PROUDLY <span className="italic font-playfair font-medium">SERVE</span>
                            </h2>
                        </RevealOnScroll>

                        {/* Neighborhood List Grid */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-0 mb-12">
                            {neighborhoodList.sort().map((neighborhood, index) => (
                                <RevealOnScroll key={neighborhood} animation="slide-up" delay={index * 15}>
                                    <div
                                        className="flex items-center justify-between py-4 border-b border-gray-200 group cursor-pointer hover:pl-2 transition-all duration-300"
                                    >
                                        <span className="text-lg font-bold font-montserrat text-black group-hover:text-black/60 transition-colors duration-300">
                                            {neighborhood}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-black/30 group-hover:text-black transition-all duration-300" />
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>

                        {/* Zip Codes Block */}
                        <RevealOnScroll animation="fade-in" delay={300}>
                            <div className="text-gray-400 text-sm leading-relaxed font-inter">
                                {zipCodes.join(", ")}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
