import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';
import '../styles/ProjectsPage.css';

function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      link: '#',
      github: '#',
      details: 'This project showcases modern e-commerce solutions with real-time inventory tracking, secure payment processing, and comprehensive analytics.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team integration, and project tracking.',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind', 'JavaScript'],
      category: 'frontend',
      link: '#',
      github: '#',
      details: 'Built with React and Firebase, this app provides seamless team collaboration with real-time synchronization.'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application with natural language processing and machine learning capabilities.',
      image: 'https://images.unsplash.com/photo-1663306479600-c327166074a9?w=500&h=300&fit=crop',
      tags: ['React', 'Python', 'OpenAI API', 'WebSocket'],
      category: 'fullstack',
      link: '#',
      github: '#',
      details: 'Leveraging OpenAI APIs and WebSocket technology for real-time intelligent conversations.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website showcasing work, skills, and contact information with smooth animations.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tags: ['React', 'CSS3', 'Responsive', 'SEO'],
      category: 'frontend',
      link: '#',
      github: '#',
      details: 'Responsive design with modern animations and optimized performance for all devices.'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for tracking social media metrics and engagement.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      tags: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      category: 'fullstack',
      link: '#',
      github: '#',
      details: 'Real-time data visualization with interactive charts and comprehensive reporting features.'
    },
    {
      id: 6,
      title: 'Weather Application',
      description: 'A real-time weather app with location-based forecasts and beautiful UI animations.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
      tags: ['React', 'API', 'Geolocation', 'CSS Animations'],
      category: 'frontend',
      link: '#',
      github: '#',
      details: 'Built with weather APIs and featuring beautiful animations for different weather conditions.'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <main className="projects-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>My Projects</h1>
          <p>Explore my portfolio of innovative solutions and creative works</p>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="container">
          <div className="filter-section">
            <div className="filter-label">
              <Filter size={20} />
              <span>Filter by:</span>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                onClick={() => setFilter('frontend')}
              >
                Frontend
              </button>
              <button
                className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                onClick={() => setFilter('fullstack')}
              >
                Full Stack
              </button>
            </div>
          </div>

          <div className="projects-list">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-image-section">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-buttons">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <ExternalLink size={20} />
                        View Live
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <Github size={20} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p className="category-label">{project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}</p>
                  <p className="description">{project.description}</p>
                  <p className="full-details">{project.details}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="more-coming">
        <div className="container">
          <h2>More Projects Coming Soon!</h2>
          <p>I'm constantly working on new and exciting projects. Stay tuned for updates!</p>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
