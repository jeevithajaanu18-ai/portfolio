import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectsSection.css';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team integration.',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application with natural language processing and machine learning.',
      image: 'https://images.unsplash.com/photo-1663306479600-c327166074a9?w=500&h=300&fit=crop',
      tags: ['React', 'Python', 'OpenAI API', 'WebSocket'],
      link: '#',
      github: '#'
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Showcasing my latest and most impactful work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                      <ExternalLink size={20} />
                      View Project
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
