import { ArrowUp, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: Logo and Go Top */}
        <div className="flex justify-center md:justify-start items-center mb-16">
          <div className="max-w-[280px]">
            <img src="https://i.imgur.com/8pm2i1y.jpeg" alt="VR Service Experts" className="h-24 md:h-28 w-auto object-contain rounded-lg" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Address & License */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Address</h4>
              <div className="space-y-1 text-gray-400 font-inter">
                <p>Palm Beach & Broward</p>
                <p>Miami-Dade, FL</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Service Area</h4>
              <div className="space-y-1 text-gray-400 font-inter text-sm">
                <p>South Florida</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact, Office Hours, Social */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Contact</h4>
              <div className="space-y-1 text-gray-400 font-inter">
                <p>Call: 954-692-4947</p>
                <p>Call: 561-719-9222</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Business Hours</h4>
              <div className="space-y-1 font-inter">
                <p className="text-gray-400"><span className="text-primary font-bold">Mon - Sun</span> 7 Days a Week</p>
                <p className="text-gray-400 text-sm">Including Nights & Weekends</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Social Media</h4>
              <div className="flex gap-3">
                <a href="https://instagram.com/vrserviceexperts" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black hover:border-primary hover:bg-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-inter">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Locations", id: "locations" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary transition-colors text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-montserrat uppercase tracking-wider">Our Services</h4>
              <ul className="space-y-3 font-inter text-gray-400">
                <li>Washer & Dryer Repair</li>
                <li>Refrigerator Repair</li>
                <li>AC Repair & Service</li>
                <li>Stove & Oven Repair</li>
                <li>Dryer Vent Cleaning</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 text-xl font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white">Satisfaction Guaranteed</p>
                <div className="flex text-yellow-500 text-xs">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-inter">
          <p>©{new Date().getFullYear()} VR Service Experts. All Rights Reserved.</p>
          <p className="uppercase tracking-widest text-[10px] font-bold">Appliance & HVAC Experts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;