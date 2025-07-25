
import { GraduationCap, Code, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for backend development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm an aspiring software engineer with a solid foundation in computer science and 
              hands-on experience in backend development. I'm driven by a passion for crafting 
              efficient, scalable solutions and constantly exploring new technologies to stay 
              ahead in the ever-evolving tech landscape.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My expertise lies in building robust backend systems, designing RESTful APIs, 
              and working with modern database technologies. I believe in writing clean, 
              maintainable code that scales with business needs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Over the years, I've honed my skills through real-world projects, collaborative teamwork, and continuous learning. Whether it's optimizing performance, integrating third-party services, or containerizing applications with Docker, I enjoy tackling complex challenges and turning ideas into working systems. I'm particularly enthusiastic about building applications that solve real problems and create value for users.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <p className="text-gray-300">
                <strong>Master of Computer Applications</strong><br />
                Chandigarh University<br />
                <span className="text-blue-400">Graduating 2025</span>
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-white">Specialization</h4>
              </div>
              <p className="text-gray-300">
                Backend Development with focus on<br />
                Java (Spring Boot), .NET (ASP.NET Core), and REST APIs<br />
                <span className="text-purple-400">Database Design & Optimization</span>
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <Users className="text-green-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-white">Collaboration</h4>
              </div>
              <p className="text-gray-300">
                Experienced in team development<br />
                Version control with Git & GitHub<br />
                <span className="text-green-400">Agile Development Practices</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
