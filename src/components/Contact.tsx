
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Get In Touch
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and innovation. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-800">Email</p>
                  <a 
                    href="mailto:jagruti.piprade@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    jagruti.piprade@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-slate-800">Phone</p>
                  <p className="text-slate-600">+91-7666833125</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-medium text-slate-800">Location</p>
                  <p className="text-slate-600">Yavatmal, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Connect Online
            </h3>
            
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <a 
                    href="https://github.com/Jagrutiii05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-slate-700 hover:text-slate-900"
                  >
                    <Github className="w-8 h-8" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-slate-600">@Jagrutiii05</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <a 
                    href="https://linkedin.com/in/jagruti-piprade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-slate-700 hover:text-slate-900"
                  >
                    <Linkedin className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-slate-600">Jagruti Piprade</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <a 
                    href="https://leetcode.com/Jagrutiii05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-slate-700 hover:text-slate-900"
                  >
                    <Code className="w-8 h-8 text-orange-500" />
                    <div>
                      <p className="font-medium">LeetCode</p>
                      <p className="text-sm text-slate-600">@Jagrutiii05</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('mailto:jagruti.piprade@gmail.com', '_blank')}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
