import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">John Parker</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Creative Designer
          </p>
          <p className="hero-description">
            I craft elegant digital solutions that blend stunning design with powerful functionality. 
            With expertise in modern web technologies, I help businesses transform their ideas into reality.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
            <a href="#" className="btn btn-secondary">
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="John Parker"
              className="profile-photo"
            />
            <div className="profile-badge">Available for Work</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}

export default HeroSection;
