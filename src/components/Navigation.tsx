import { cn } from "@/lib/utils";
import { Code, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {isScrolled ? (
              <div className="text-2xl font-bold text-slate-800">
                Jagruti Piprade
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
                <span className="text-lg font-semibold text-slate-700">
                  AI & ML Enthusiast
                </span>
                <Code className="w-5 h-5 text-slate-600" />
              </div>
            )}
          </div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
