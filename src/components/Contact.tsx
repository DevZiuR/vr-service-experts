import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState("");
  const [ownership, setOwnership] = useState("");
  const [contactMethod, setContactMethod] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const serviceOptions = [
    "Washer",
    "Dryer",
    "Refrigerator",
    "Stove/Oven",
    "AC Unit",
    "Other"
  ];

  const projectTypes = [
    "Repair",
    "Maintenance",
    "Installation"
  ];

  const ownershipOptions = [
    { value: "own", label: "Own" },
    { value: "rent", label: "Rent" }
  ];

  const brands = [
    "Samsung",
    "LG",
    "Whirlpool",
    "GE",
    "Maytag",
    "Other/Unknown"
  ];

  const problems = [
    "Not Cooling/Heating",
    "Leaking",
    "Making Noise",
    "Won't Start",
    "Error Code",
    "Other"
  ];

  const timelines = [
    "ASAP (Emergency)",
    "Today",
    "Tomorrow",
    "This Week",
    "Flexible"
  ];

  const budgetRanges = [
    "Under $150",
    "$150-$300",
    "$300-$500",
    "$500+",
    "Not sure"
  ];

  const contactMethods = [
    { value: "phone", label: "Phone Call" },
    { value: "text", label: "Text Message" },
    { value: "email", label: "Email" }
  ];

  const contactTimes = [
    "Morning (8am-12pm)",
    "Afternoon (12pm-5pm)",
    "Evening (5pm-8pm)",
    "Anytime"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleContactMethodToggle = (method: string) => {
    setContactMethod(prev =>
      prev.includes(method)
        ? prev.filter(m => m !== method)
        : [...prev, method]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5 - uploadedFiles.length);
      setUploadedFiles(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Reveal-on-scroll animation for contact section items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-slide-up");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Checkbox component for consistent styling
  const Checkbox = ({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={onChange}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${checked
          ? "bg-primary border-primary"
          : "bg-white/5 border-white/20 group-hover:border-white/40"
          }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{label}</span>
    </label>
  );

  // Radio button component for consistent styling
  const RadioButton = ({ checked, onChange, label, name }: { checked: boolean; onChange: () => void; label: string; name: string }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={onChange}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${checked
          ? "border-primary"
          : "bg-white/5 border-white/20 group-hover:border-white/40"
          }`}
      >
        {checked && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{label}</span>
    </label>
  );

  // Section divider component
  const SectionDivider = ({ title }: { title: string }) => (
    <div className="border-t border-white/10 pt-6 mt-2">
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <div className="w-1 h-5 bg-primary rounded-full" />
        {title}
      </h4>
    </div>
  );

  return (
    <section id="contact" className="pb-20 lg:pb-32 pt-10 lg:pt-16 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold font-montserrat text-black mb-4 uppercase px-2">
            Service <span className="italic font-medium font-playfair text-black">Request</span> Form
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter px-4">
            Professional Appliance & HVAC Services in Palm Beach, Broward & Miami-Dade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Quote Request Form */}
          <div className="bg-[#1A1A1A] rounded-2xl shadow-elegant border border-white/10 p-6 sm:p-10 animate-slide-up opacity-0 translate-y-12 transition-all duration-700">

            <form className="space-y-6">

              {/* Contact Information Section */}
              <SectionDivider title="Contact Information" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="Your Full Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="954-692-4947"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Property Address */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Service Address <span className="text-primary">*</span>
                </label>
                <Input
                  placeholder="Street, City, Zip"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Service Details Section */}
              <SectionDivider title="Service Details" />

              {/* What appliance needs service? */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  What appliance needs service? <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((service) => (
                    <Checkbox
                      key={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      label={service}
                    />
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Service Type <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {projectTypes.map((type) => (
                    <RadioButton
                      key={type}
                      name="projectType"
                      checked={projectType === type}
                      onChange={() => setProjectType(type)}
                      label={type}
                    />
                  ))}
                </div>
              </div>

              {/* Property Information Section */}
              <SectionDivider title="Property Information" />

              {/* Do you own or rent? */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Do you own or rent this property? <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {ownershipOptions.map((option) => (
                    <RadioButton
                      key={option.value}
                      name="ownership"
                      checked={ownership === option.value}
                      onChange={() => setOwnership(option.value)}
                      label={option.label}
                    />
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Appliance Brand <span className="text-gray-500 font-normal">(if known)</span>
                </label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                >
                  <option value="" className="bg-black">Select Brand</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand} className="bg-black">{brand}</option>
                  ))}
                </select>
              </div>

              {/* Issue Specifics Section */}
              <SectionDivider title="Issue Specifics" />

              {/* Primary Issue */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Primary Issue <span className="text-gray-500 font-normal">(if known)</span>
                </label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                >
                  <option value="" className="bg-black">Select Issue</option>
                  {problems.map((problem) => (
                    <option key={problem} value={problem} className="bg-black">{problem}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Urgency <span className="text-primary">*</span> <span className="text-gray-500 font-normal">When do you need service?</span>
                </label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-black">Select urgency</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline} className="bg-black">{timeline}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Budget Range <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                >
                  <option value="" className="bg-black">Select budget range</option>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget} className="bg-black">{budget}</option>
                  ))}
                </select>
              </div>

              {/* Additional Details Section */}
              <SectionDivider title="Additional Details" />

              {/* Tell us about the problem */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Tell us about the problem
                </label>
                <Textarea
                  placeholder="Please describe the issue, noise, or error code..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20 text-sm sm:text-base min-h-[120px]"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Upload photos of the appliance/issue <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-10 h-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      Click to upload
                    </button>
                    <p className="text-xs text-gray-500">JPG, PNG, PDF • Max 5 files</p>
                  </div>
                </div>

                {/* Uploaded files list */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <span className="text-sm text-gray-300 truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preferred contact method */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Preferred contact method <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {contactMethods.map((method) => (
                    <Checkbox
                      key={method.value}
                      checked={contactMethod.includes(method.value)}
                      onChange={() => handleContactMethodToggle(method.value)}
                      label={method.label}
                    />
                  ))}
                </div>
              </div>

              {/* Best time to contact */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Best time to contact you
                </label>
                <select
                  className="w-full p-3 bg-white/5 border border-white/10 text-white rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                >
                  <option value="" className="bg-black">Select preferred time</option>
                  {contactTimes.map((time) => (
                    <option key={time} value={time} className="bg-black">{time}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-primary/25"
                >
                  Submit Request →
                </Button>
              </div>

              {/* Fine Print */}
              <p className="text-center text-xs text-gray-500 mt-4 px-4 leading-relaxed">
                By submitting this form, you agree to be contacted by VR Service Experts regarding your service.
                Free estimates available. Response time: Same Day Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;