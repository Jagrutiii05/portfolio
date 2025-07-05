
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Engineer Intern",
      company: "Integral Development Corp",
      period: "May 2025 - Ongoing",
      description: "Working on developing a business analytics chatbot that enables users to interact with enterprise data through natural language queries, ensuring smooth backend API responses and an intuitive frontend experience.",
      current: true
    },
    {
      title: "Data Science Intern",
      company: "Yatra Online Ltd. (Gurgaon)",
      period: "Feb 2025 - May 2025",
      description: "Built AI-powered conversational chatbots for distinct enterprise use cases, including an expense management assistant developed for Yatra’s product suite and a travel planning assistant. The expense chatbot streamlined tasks such as FAQs, expense creation, and data analysis, incorporating intelligent field validation to ensure accurate and consistent user input. Initiated the development of a travel assistant chatbot that leveraged real-time hotel and flight data via APIs, applied intelligent field validation, and enabled automated itinerary generation through natural conversational flows."
    },
    {
      title: "Research Assistant",
      company: "Indian Institute of Information Technology, Vadodara",
      period: "May - August 2024",
      description: "Implemented a CycleGAN-based image translation model to transform images from one domain to another without requiring paired training data, with a focus on designing robust training pipelines and fine-tuning the model architecture for high-quality results."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-blue-200" />
              )}
              
              <Card className="mb-8 hover:shadow-lg transition-all hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-800">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <Badge className="bg-green-100 text-green-800">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      
                      <div className="flex items-center text-slate-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
