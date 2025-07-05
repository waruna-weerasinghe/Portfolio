import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 65 },
        { name: "Java", level: 60 }
        
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "SpringBoot", level: 70 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Ubuntu", level: 60 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs', 'GraphQL', 'Redux', 'Tailwind CSS', 'Bootstrap',
                'Jest', 'Webpack', 'Babel', 'Firebase', 'Supabase',
                'Vercel', 'Netlify', 'Agile', 'Scrum'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:bg-slate-600/50 hover:text-blue-400 transition-all duration-200 cursor-default border border-slate-600/30 hover:border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;