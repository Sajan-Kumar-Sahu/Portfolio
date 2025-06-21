
import { Server, Database, Code, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications using Java and Spring Boot framework with clean architecture principles.",
      features: ["Microservices Architecture", "Performance Optimization", "Security Implementation", "Scalable Solutions"]
    },
    {
      icon: Code,
      title: "RESTful API Design",
      description: "Designing and developing secure, well-documented REST APIs that follow industry best practices and standards.",
      features: ["OpenAPI Documentation", "Authentication & Authorization", "Rate Limiting", "Error Handling"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized database schema design and query optimization for PostgreSQL and MySQL databases.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"]
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Integrating various systems and third-party services to create comprehensive backend solutions.",
      features: ["Third-party APIs", "Microservices Integration", "Docker Containerization", "CI/CD Pipeline"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive backend development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg mr-4">
                  <service.icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Features:</h4>
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-lg border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you build robust backend solutions that scale with your business needs.
            </p>
            <button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
