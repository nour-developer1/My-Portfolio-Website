import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Laptop, Palette, Video, Brain, Users, DollarSign } from 'lucide-react';

const FreelancingPage: React.FC = () => {
  const navigate = useNavigate();

  const freelanceProjects = [
    {
      title: 'Social Media Posts Designer',
      icon: Palette,
      period: '2022 - 2023',
      description: 'Designed engaging and visually appealing social media posts for a variety of clients across different industries.',
      achievements: [
        'Created 100+ social media designs for various brands',
        'Increased client engagement rates by 40% on average'
      ],
      skills: ['Adobe Photoshop', 'Canva', 'Brand Design', 'Social Media Marketing'],
      clients: '4'
    },
    {
      title: 'Content Creator at StemTech',
      icon: Video,
      period: '2023',
      description: 'Created engaging educational content for the third season of "Taalam ElBarmaga," a TV program focused on teaching front-end web development skills.',
      achievements: [
        'Developed curriculum for HTML, CSS, and JavaScript',
        'Created interactive coding examples and exercises',
        'Produced educational videos watched by 10,000+ viewers',
        'Simplified complex programming concepts for beginners'
      ],
      skills: ['Content Creation', 'Video Production', 'Web Development', 'Education'],
      clients: '1'
    },
    {
      title: 'AI Engineer Freelance',
      icon: Brain,
      period: '2023 - Present',
      description: 'Designed and implemented custom AI models to meet client-specific needs across various industries.',
      achievements: [
        'Delivered 15+ custom AI solutions for different clients'      ],
      skills: ['Machine Learning', 'Computer Vision', 'NLP', 'Custom AI Solutions'],
      clients: '20+'
    }
  ];

  const stats = [
    { icon: Users, label: 'Total Clients', value: '35+' },
    { icon: Laptop, label: 'Projects Completed', value: '50+' }
  ];

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Freelancing Journey
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building diverse solutions and creative content for clients worldwide
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <Icon size={32} className="text-blue-500 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Freelance Projects */}
          <div className="space-y-8 mb-16">
            {freelanceProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg p-8 border border-zinc-800"
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                      <p className="text-gray-400">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Achievements */}
                    <div className="lg:col-span-2">
                      <h3 className="font-semibold text-white mb-4">Key Achievements</h3>
                      <div className="space-y-3 mb-6">
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-white mb-3">Skills Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always interested in discussing new projects and opportunities. 
                Whether you need AI solutions, backend development, or creative content, 
                let's bring your ideas to life.
              </p>
              <button
                onClick={handleGetInTouch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FreelancingPage;