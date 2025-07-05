
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Trophy } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
            I’m a dedicated Computer Science graduate from IIIT Vadodara, with a strong interest in AI/ML and software development. My journey combines academic excellence with practical industry experience, including projects in artificial intelligence and generative AI. Through internships at leading companies and research on GANs for medical imaging, I bring both theoretical knowledge and practical skills to tackle complex, real-world challenges and develop impactful solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With internships at leading companies and research experience in GANs for medical 
              imaging, I bring both theoretical knowledge and practical skills to solve complex problems.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Education</h3>
                    <p className="text-slate-600">B.Tech CSE, IIIT Vadodara</p>
                    <p className="text-sm text-slate-500">2021 - 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Location</h3>
                    <p className="text-slate-600">Yavatmal, Maharashtra</p>
                    <p className="text-sm text-slate-500">Open to relocate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Achievements</h3>
                    <p className="text-slate-600">98.16% HSC, AWS AI Scholar</p>
                    <p className="text-sm text-slate-500">Academic Excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
