import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hey, I’m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Sajan
              </span>
              <br />
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium mt-2 inline-block text-gray-300">
                <Typewriter
                  words={[
                    "a passionate problem solver.",
                    "a backend-focused engineer.",
                    "skilled in RESTful APIs.",
                    "a PostgreSQL power user.",
                    "focused on performance.",
                    "a Java + Spring Boot enthusiast.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={40}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-light">
              Backend Developer | REST API Specialist | Java Enthusiast
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I craft efficient, scalable backend systems and stay curious about
              the latest technologies in the ever-evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Work
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>

              <a href="/SAJAN KUMAR SAHU.pdf" download>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="/B-8990-removebg-preview - Copy.jpg"
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce">
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
