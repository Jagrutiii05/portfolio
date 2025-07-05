import { Button } from "@/components/ui/button";
import { Code, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side: Text and Buttons */}
          <div className="flex-1 md:pr-12 text-left md:pl-8">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                Jagruti Piprade
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 mb-8 font-medium">
              🎓 Computer Science Graduate
              </h2>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
                Passionate about artificial intelligence and machine learning, with hands-on experience 
                in developing innovative solutions for real-world problems. Recently completed B.Tech in Computer Science at IIIT Vadodara, with exposure to generative AI and large language models. Eager to keep learning and contribute to building impactful tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg text-left"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg text-left"
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/Jagrutiii05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6 text-slate-700" />
                </a>
                <a 
                  href="https://linkedin.com/in/jagruti-piprade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a 
                  href="https://leetcode.com/Jagrutiii05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                >
                  <Code className="w-6 h-6 text-orange-500" />
                </a>
                <a 
                  href="mailto:jagruti.piprade@gmail.com"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-green-600" />
                </a>
              </div>
            </div>
          </div>
          {/* Right Side: Photo Placeholder */}
          <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative">
            {/* Blurred blue blob background */}
            <div className="absolute w-[380px] h-[380px] bg-blue-200 rounded-full blur-2xl opacity-60 -z-10" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
            <img
              src="photoototototo.jpg"
              alt="Jagruti Piprade"
              className="w-[320px] h-[320px] rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
            {/* Overlay: full circular frame */}
            <img
              src="/frame.png"
              alt="Decorative frame"
              className="absolute left-[51%] top-1/2 w-[505px] h-[505px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
