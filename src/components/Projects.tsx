
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Github, GraduationCap, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Forest Fire Detection",
      description: "Built a CNN model for early forest fire detection with 95.52% accuracy using a balanced 1,900-image Kaggle dataset.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter Notebook"],
      icon: Flame,
      githubUrl: "https://github.com/Jagrutiii05/Forest_Fire_detection",
      color: "text-red-600"
    },
    {
      title: "StudyBetter",
      description: "Implemented a responsive, user-friendly interface with secure authentication and authorization mechanisms, designed MongoDB schema to efficiently handle user data and course materials.",
      technologies: ["MongoDB", "NodeJS", "ExpressJS", "ReactJS"],
      icon: GraduationCap,
      githubUrl: "https://github.com/Jagrutiii05/StudyBetter",
      color: "text-blue-600"
    },
    {
      title: "Smart Attendance",
      description: "Built a ResNet-based face recognition attendance system with real-time processing and CSV-based data management.",
      technologies: ["Python", "dlib", "OpenCV", "Flask"],
      icon: Users,
      githubUrl: "https://github.com/Jagrutiii05/SmartAttendance",
      color: "text-green-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <IconComponent className={`w-12 h-12 ${project.color} mb-4`} />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
