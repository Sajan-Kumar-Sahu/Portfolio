
import { ExternalLink, Github, Database, Server, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const project = {
    title: "InnSpiration – Hotel Bookings & Management System",
    description: "A full-stack hotel booking and management platform enabling users to book accommodations across India. Features digital check-in and an Admin module for property listing and hosting.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    features: [
      "User registration and authentication",
      "Hotel search and booking system",
      "Digital check-in functionality",
      "Admin dashboard for property management",
      "Secure payment integration",
      "Real-time availability tracking"
    ],
    github: "https://github.com/Sajan-Kumar-Sahu/InnSpiration",
    demo: "https://innspiration-booking.netlify.app/"
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in backend development and full-stack solutions
          </p>
        </div>

        {/* Main Project */}
        <div className="bg-gray-900/50 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2" size={18} />
                    View Code
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-lg border border-blue-500/20 w-full max-w-md">
                  <div className="text-center">
                    <Server className="text-blue-400 mb-4 mx-auto" size={64} />
                    <h4 className="text-xl font-semibold text-white mb-2">Backend Architecture</h4>
                    <p className="text-gray-400 mb-4">Robust Spring Boot backend with PostgreSQL database</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <Database className="text-purple-400 mb-2 mx-auto" size={24} />
                        <span className="text-sm text-gray-300">PostgreSQL</span>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <Code className="text-green-400 mb-2 mx-auto" size={24} />
                        <span className="text-sm text-gray-300">Spring Boot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/30 border-2 border-dashed border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-400 mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-500">I'm constantly working on new projects to showcase my skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
