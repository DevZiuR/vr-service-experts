import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Users } from "lucide-react";
import aboutImg from "../assets/about-new.jpg";

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black/95 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4">
              WELCOME TO VR SERVICE EXPERTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat text-white mb-4 sm:mb-6 uppercase">
              Your Trusted Local <br /><span className="italic font-medium font-playfair text-white">Appliance & HVAC Experts</span>
            </h2>

            {/* Mobile Image - Below Heading */}
            <div className="lg:hidden relative rounded-xl overflow-hidden shadow-2xl w-[85%] mx-auto mb-8 h-[250px] sm:h-[350px]">
              <img
                src="https://i.imgur.com/rfaSULM.png"
                alt="VR Service Experts Team"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-lg">Reliable Service</p>
                  <p className="text-gray-300 text-xs">Day or night.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg mb-6 sm:mb-8 text-gray-300">
              <p className="mb-4">
                For over 17 years, VR Service Experts has been the go-to choice for South Florida families who need fast, honest appliance and air conditioning repairs. As a family-owned business, we understand the stress of a broken refrigerator or A/C unit—especially in Florida's heat.
              </p>
              <p className="mb-4">
                That's why we offer same-day service 7 days a week, with no service call fee when you choose our repair services. Our licensed professionals serve Palm Beach, Broward, and Miami-Dade with affordable pricing and the kind of quality work that's earned us thousands of satisfied customers. When your home needs help, we're here—day or night.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-white hover:bg-white/90 text-black px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold font-montserrat uppercase tracking-wide rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/10"
                onClick={scrollToContact}
              >
                GET A FREE QUOTE
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-2xl h-[500px]">
            <img
              src="https://i.imgur.com/rfaSULM.png"
              alt="VR Service Experts Team"
              className="w-full h-full object-cover rounded-xl object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-bold text-xl">Reliable Service</p>
                <p className="text-gray-300 text-sm">Day or night.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;