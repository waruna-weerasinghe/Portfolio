import React from 'react';
import { Code, Database, Globe, Server, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Creating efficient and scalable database solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      description: "Expertise in modern web frameworks and libraries"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "System Architecture",
      description: "Understanding of cloud services and deployment strategies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Working effectively in agile development environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A dedicated IT student with a passion for technology and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm currently pursuing my undergraduate degree in Information Technology, 
                  where I've developed a strong foundation in programming, systems analysis, 
                  and software development methodologies.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in tech began with curiosity about how software works, which 
                  evolved into hands-on experience building web applications, working with 
                  databases, and exploring emerging technologies like cloud computing and AI.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in learning by doing, which is why I actively work on personal 
                  projects and contribute to open-source initiatives. My goal is to become 
                  a well-rounded software engineer who can tackle complex problems with 
                  creative and efficient solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                  Quick Learner
                </span>
                <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                  Detail Oriented
                </span>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-slate-600/30 hover:border-blue-500/30"
                >
                  <div className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;