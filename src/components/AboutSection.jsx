import { Code, Palette, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

function AboutSection() {
  const skills = [
    { icon: Code, title: 'Development', desc: 'React, Node.js, JavaScript, Python' },
    { icon: Palette, title: 'Design', desc: 'UI/UX, Figma, CSS, Responsive Design' },
    { icon: Zap, title: 'Performance', desc: 'Optimization, SEO, Web Performance' },
    { icon: Users, title: 'Collaboration', desc: 'Team Work, Agile, Communication' },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Bringing ideas to life with code and creativity</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate full-stack developer and designer with a mission to create exceptional digital experiences. 
              With 5+ years of experience in web development, I've worked with startups and established companies to build 
              scalable, user-centric solutions.
            </p>
            <p>
              My journey started with curiosity and has evolved into expertise. I believe in continuous learning and staying 
              updated with the latest technologies and design trends. I'm not just a developer—I'm a problem solver who loves 
              turning complex challenges into elegant solutions.
            </p>
            <Link to="/about" className="read-more-link">
              Read My Full Story →
            </Link>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Working on code"
              className="about-img"
            />
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <skill.icon size={32} className="skill-icon" />
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
