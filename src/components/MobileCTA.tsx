import { Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const MobileCTA = () => {
    const handleCall = () => {
        window.location.href = "tel:9546924947";
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
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

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex h-14 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button
                onClick={scrollToContact}
                className="flex-1 bg-black hover:bg-[#639CD9]/90 text-white font-bold font-montserrat uppercase h-full rounded-none text-xs sm:text-sm border-r border-black/10"
            >
                Get A Free Quote
            </Button>
            <Button
                onClick={handleCall}
                className="flex-1 bg-black hover:bg-[#639CD9]/90 text-white font-bold font-montserrat uppercase h-full rounded-none text-xs sm:text-sm"
            >
                Call For Service
            </Button>
        </div>
    );
};

export default MobileCTA;
