import { ExternalLink, Star } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const reviews = [
  {
    text: "Quick, excellent repair at a very reasonable price. Communication was also far above average. It is rare to find such good customer service nowadays, so we were most grateful.",
    name: "Mark Bonacquisti"
  },
  {
    text: "Excellent, fast and friendly service. Very reasonable diagnostic fee that will apply to my repair which was accurately evaluated. Highly recommended.",
    name: "Robert Scharf"
  },
  {
    text: "Excellent service. This company is reliable and affordable. Whenever we need its services, they have always been for us. Thanks and keep up the good work. 100 % recommended.",
    name: "Domingo Rivera"
  },
  {
    text: "This company professional and timely and efficient. They went above and beyond to make sure they fully solved my dryer/vent issues and were far more thorough than others that came out for service call.",
    name: "Abbe Polsyn"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <RevealOnScroll animation="fade-in">
            <span className="text-black font-bold tracking-widest text-sm uppercase mb-4 block">
              What Customers Say
            </span>
          </RevealOnScroll>
          <RevealOnScroll animation="slide-up" delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-black mb-4 uppercase">
              CLIENT <span className="italic font-playfair font-medium text-black">TESTIMONIALS</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {reviews.map((review, index) => (
            <RevealOnScroll key={index} animation="slide-up" delay={index * 100} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="flex text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-inter leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div>
                  <div className="w-12 h-1 bg-primary/20 mb-4 group-hover:bg-primary transition-colors"></div>
                  <p className="font-bold font-montserrat text-black">{review.name}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <RevealOnScroll animation="fade-in" delay={400}>
            <a
              href="https://goo.gl/maps/nEiSpXEKrRE5pDT76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white bg-primary hover:bg-primary/90 px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-primary/20 transform hover:-translate-y-1 group"
            >
              View More Reviews <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Reviews;