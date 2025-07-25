
import { Coffee, Database, Code, GitBranch, Server, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "TechStack",
      icon: Coffee,
      skills: ["Java + Spring Boot","C# + ASP.NET Core",],
      color: "text-orange-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL"],
      color: "text-blue-400"
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      skills: ["Docker", "GitHub"],
      color: "text-purple-400"
    },
    {
      title: "APIs & Systems",
      icon: Server,
      skills: ["REST APIs", "Linux OS"],
      color: "text-green-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build robust backend solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <category.icon className={`${category.color} mr-3`} size={24} />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700/50 px-3 py-2 rounded-md text-gray-300 text-sm hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20">
              <Code className="text-blue-400 mb-4 mx-auto" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Backend Architecture</h4>
              <p className="text-gray-400 text-sm">Designing scalable and maintainable backend systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-green-500/20">
              <Server className="text-green-400 mb-4 mx-auto" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">API Development</h4>
              <p className="text-gray-400 text-sm">Creating robust and secure RESTful APIs</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/20">
              <Terminal className="text-purple-400 mb-4 mx-auto" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">System Optimization</h4>
              <p className="text-gray-400 text-sm">Performance tuning and database optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
