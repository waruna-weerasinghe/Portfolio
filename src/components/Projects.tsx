import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application for Clothing Shop",
      description: "My Team created the E-Commerce plattform for Rescycle, echo-friendly clothing shop. I am responsible for the Novelty part of Royalty Function. ",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/waruna-weerasinghe/ITPM-3Y_S2_Project",
      liveUrl: "https://github.com/waruna-weerasinghe/ITPM-3Y_S2_Project",
      date: "2025"
    },
    {
      title: "E-Commerce Web Application for Mobile Shop",
      description: "A full-stack e-commerce solution with User Appointment based Feature and Admin can also Handle the all the User appointment as well.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS" , "Redux"],
      githubUrl: "https://github.com/Kasunlakshitha998/Y2S2ITP",
      liveUrl: "https://github.com/waruna-weerasinghe",
      date: "2024",
      featured: true
    },
    
    {
      title: "To-Do List Application",
      description: "I created To-Do List Application using Kotling Language ",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/waruna-weerasinghe/AndroidStudioProject",
      liveUrl: "https://github.com/waruna-weerasinghe/AndroidStudioProject",
      date: "2023"
    },
    {
      title: "Re-Created Design UGC.ac.lk Using Figma ",
      description: "We Re design the available web site of UGC.ac.lk.",
      image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Chart.js"],
      date: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my studies and personal time
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-slate-700/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-600/30">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="flex items-center gap-1 px-3 py-1 bg-slate-600/50 text-blue-400 rounded-full text-sm font-medium border border-slate-500/30"
                        >
                          <Tag size={12} />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div 
                key={index}
                className="bg-slate-700/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group border border-slate-600/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span className="text-xs">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-600/50 text-blue-400 rounded text-xs font-medium border border-slate-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-600/50 text-blue-400 rounded text-xs font-medium border border-slate-500/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;