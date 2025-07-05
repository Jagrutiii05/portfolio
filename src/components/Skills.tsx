
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS", "SQL"],
      color: "text-blue-600"
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      skills: ["Flask", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "MongoDB", "NodeJs", "ExpressJS", "ReactJS"],
      color: "text-green-600"
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["GANs", "Computer Vision", "Data Analytics", "Generative AI Chatbots"],
      color: "text-purple-600"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["GIT", "Flask", "Jupyter", "Postman", "dlib", "Linux", "Docker", "Google colab"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <IconComponent className={`w-8 h-8 ${category.color} mr-3`} />
                    <h3 className="text-xl font-semibold text-slate-800">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-blue-100 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Certifications & Training
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">AWS AI and ML Scholar '23</h4>
                  <p className="text-sm text-slate-600">Nanodegree program with AI Python programming</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Emerging Technologies</h4>
                  <p className="text-sm text-slate-600">ML, IoT, DL, Computer Vision, SAP ABAP</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Generative Adversarial Networks</h4>
                  <p className="text-sm text-slate-600">Udemy certification in GANs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
