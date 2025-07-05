import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Sri Lanka Institute of Informsation Technology (SLIIT)",
      period: "2022 - 2026 (Expected)",
      gpa: "2.6/4.0",
      description: " Specializing in Information Technology  Sri Lanka Institute of Information Technology (SLIIT)",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Object-Oriented Programming",
        "Research Projects"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "In Progress"
    }
    
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-400" />
                Academic Background
              </h3>

              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Relevant Coursework */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen size={16} />
                      Relevant Coursework
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded-lg border border-slate-600/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {/* <div>
                    <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="text-sm text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-cyan-400" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border-l-4 border-cyan-500"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-cyan-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Calendar size={14} />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'Completed' 
                            ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                            : 'bg-orange-600/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning Goals */}
              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 mt-8 border border-blue-500/20">
                <h4 className="text-xl font-bold text-white mb-4">
                  Current Learning Goals
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Master cloud architecture and deployment
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Learn advanced React patterns and state management
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Explore machine learning and AI integration
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Deepen understanding of system design principles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;