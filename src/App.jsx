import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Palette, Zap, User, Briefcase, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'C++', level: 70, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 85, icon: <Zap className="w-6 h-6" /> },
    { name: 'ReactJS', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'CSS/Tailwind', level: 88, icon: <Palette className="w-6 h-6" /> },
    { name: 'HTML', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'SQL', level: 70, icon: <Code className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'Modern real-time messaging app with secure authentication, private/group chats, message encryption, and instant notifications. Features include user presence indicators and message status tracking.',
      tech: ['React', 'TailwindCSS', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop',
      github: 'https://github.com/Ritik-kumar045/Real-time-chat',
      live: 'https://real-time-chat-three-iota.vercel.app/',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Developed fully responsive e-commerce platform using React.js and Tailwind CSS. Deployed the project using Vercel for seamless hosting and continuous deployment.',
      tech: ['React', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      github: 'https://github.com/Ritik-kumar045/Ecommerce-',
      live: 'https://ecommerce-weld-kappa.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Javascript', 'HTML', ' CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      github: 'https://github.com/Ritik-kumar045/task-management345',
      live: 'https://ritik-kumar045.github.io/task-management345/'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'API Integration', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
      github: '#',
      live: 'https://ritik-kumar045.github.io/WEATHERJS/'
    }
  ];

  const handleContactSubmit = () => {
    alert('Thanks for your interest! Please reach out via email or social media.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize hover:text-purple-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ritik Kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Crafting digital experiences that blend creativity with functionality. 
            Passionate about building scalable applications and beautiful user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I’m Ritik Kumar — a passionate frontend developer with a strong foundation in JavaScript, React.js, and responsive UI design. I enjoy transforming ideas into elegant, efficient web interfaces.
                 I focus on crafting intuitive and visually appealing user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects. I believe 
                in continuous learning and staying updated with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Hands-on Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <span className="text-sm"> 5+ Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 absolute inset-0"></div>
              <div className="w-full h-96 bg-slate-700 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-purple-400" />
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-purple-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="bg-slate-700 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 group ${
                project.featured 
                  ? 'border-purple-400/60 shadow-lg shadow-purple-500/20 lg:col-span-2' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                      project.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Latest Project
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects. Feel free to reach out!
                </p>
              </div>
              <div className="space-y-6">
                <a href="ritikkumarsingh647@gmail.com" className="flex items-center gap-4 text-purple-400 hover:text-purple-300 transition-colors group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">ritikkumarsingh647@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/ritik-kumar-9682b1231/" className="flex items-center gap-4 text-purple-400 hover:text-purple-300 transition-colors group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-400">Connect with me</p>
                  </div>
                </a>
                <a href="https://github.com/Ritik-kumar045" className="flex items-center gap-4 text-purple-400 hover:text-purple-300 transition-colors group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-gray-400">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Your Name. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;