import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/RevealOnScroll";

const Services = () => {
  const services = [
    {
      image: "https://i.imgur.com/1bMTw36.jpeg",
      title: "Washer Repair",
      description: "Expert washing machine repair for all major brands and models."
    },
    {
      image: "https://i.imgur.com/X67eFnH.png",
      title: "Dryer Repair",
      description: "Fast fixes for heating issues, noises, and start failures."
    },
    {
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/zhtXK4TYUD_1_2oC7-r7Hw/o.jpg",
      title: "Refrigerator Repair",
      description: "Keeping your food fresh with professional fridge collision repairs."
    },
    {
      image: "https://i.imgur.com/3YzItWE.png",
      title: "Stove & Oven Repair",
      description: "Safe and reliable repairs for ranges, cooktops, and ovens."
    },
    {
      image: "https://i.imgur.com/EFRbBcr.jpeg",
      title: "Air Conditioning",
      description: "Comprehensive AC repair and maintenance for Florida's heat."
    },
    {
      image: "https://i.imgur.com/gP7NI86.png",
      title: "Dryer Vent Cleaning",
      description: "Prevent fires and improve efficiency with thorough vent cleaning."
    },
    {
      image: "https://i.imgur.com/x9uWuhs.jpeg",
      title: "Garbage Disposal",
      description: "Repair and replacement of kitchen garbage disposals."
    },
    {
      image: "https://i.imgur.com/rREQQIb.png",
      title: "Appliance Maintenance",
      description: "Preventative care to extend the life of your home appliances."
    }
  ];

  const handleCall = () => {
    window.location.href = "tel:9546924947";
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section - Inspired by reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-black font-bold tracking-widest text-sm uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              What We Do
            </span>
            <h2 className="text-4xl md:text-7xl font-bold font-montserrat text-black leading-[0.9] tracking-tighter">
              EXPERT <br />
              <span className="italic font-playfair font-medium text-black">SERVICES.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-md">
              From broken appliances to AC troubles, we provide top-tier care for your home.
              Choose quality, choose <span className="font-bold"> VR Service Experts.</span>
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={handleCall}
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black border-b-2 border-black pb-1 hover:text-secondary hover:border-secondary transition-all duration-300"
              >
                Call For Quote <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={index} animation="slide-up" delay={index * 150}>
              <div
                className="group relative h-[400px] sm:h-[450px] overflow-hidden rounded-[2rem] bg-gray-100 flex flex-col justify-end p-6 w-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-white leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-inter text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 overflow-hidden leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex justify-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform duration-500 group-hover:bg-primary group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;