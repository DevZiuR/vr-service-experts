import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Send } from "lucide-react";

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const projects = [
    {
      src: "https://i.imgur.com/EFRbBcr.jpeg",
      title: "AC Repair",
      description: "Professional AC maintenance.",
      type: "image"
    },
    {
      src: "https://i.imgur.com/iEVxTpj.jpeg",
      title: "Vent Cleaning",
      description: "Improving air quality and safety.",
      type: "image"
    },
    {
      src: "https://i.imgur.com/x9uWuhs.jpeg",
      title: "System Service",
      description: "Complete HVAC diagnostics.",
      type: "image"
    },
    {
      src: "https://i.imgur.com/1bMTw36.jpeg",
      title: "Appliance Repair",
      description: "Fast fixes for home appliances.",
      type: "image"
    },
    {
      src: "https://i.imgur.com/uWJoKtC.png",
      title: "Quality Service",
      description: "Trusted by South Florida.",
      type: "image"
    },
    {
      src: "https://i.imgur.com/USbuG8f.png",
      title: "Expert Care",
      description: "Licensed professionals.",
      type: "image"
    }
  ];

  return (
    <section id="gallery" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Decorative Circles from reference */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-black leading-tight tracking-tight">
            SERVICE <br />
            <span className="italic font-playfair font-medium text-black">GALLERY</span>
          </h2>
        </div>

        {/* Slider Section */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="group relative h-[450px] sm:h-[550px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl">
                  {/* Media Content */}
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  {/* Label on Hover */}
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.description}</p>
                  </div>

                  {/* Icon Badge - Matches reference */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Send className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary/90 px-8 py-4 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-1 group">
            View More Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;