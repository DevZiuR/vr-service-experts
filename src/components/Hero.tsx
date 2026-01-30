import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:9546924947";
  };

  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-52 md:pt-48 pb-16 min-h-screen bg-white text-foreground overflow-hidden flex flex-col justify-center">
      {/* Background Image - REMOVED for white background */}
      <div className="absolute inset-0 z-0 bg-white pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-16 items-start">

          {/* Left Column - Typography */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-primary font-bold tracking-wide text-sm font-inter uppercase mb-2">
              VR SERVICE EXPERTS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-[1] text-black uppercase">
              Fast, Reliable <span className="italic font-playfair font-medium text-primary">Appliance & HVAC</span> <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Repair Across South Florida
            </h1>
          </div>

          {/* Right Column - Description & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4 lg:pt-12">
            <div className="text-lg text-gray-600 mb-8 leading-relaxed font-inter max-w-lg space-y-2">
              <p className="mt-4 text-xl font-medium">
                Licensed experts serving Palm Beach, Broward, and Miami-Dade with same-day service on appliances and air conditioning. Family-owned since 2008, we're available 7 days a week—even nights, weekends, and holidays.
                <br />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCall}
                className="px-8 py-6 rounded-md font-bold text-lg shadow-lg shadow-black/5 bg-primary hover:bg-primary/90 text-white"
              >
                954-692-4947
              </Button>

              <div className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-md bg-black">
                <div className="flex bg-white p-1 rounded-full shadow-sm">
                  <span className="font-bold text-lg px-2 text-black">G</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white">5.0 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Single Horizontal Image */}
        <div className="w-full h-[400px] md:h-[500px]">
          <div className="relative rounded-2xl overflow-hidden group h-full">
            <img
              src="https://i.imgur.com/EFRbBcr.jpeg"
              alt="VR Service Experts Work"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Expert Repair Services</span>
                <h3 className="text-2xl font-bold font-montserrat">VR Service Experts | South Florida</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
};

export default Hero;