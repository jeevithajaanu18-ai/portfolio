import { Code2, Palette, Award, BookOpen } from 'lucide-react';
import '../styles/AboutPage.css';

function AboutPage() {
  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading development of innovative web solutions and mentoring junior developers.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects using React and Node.js.'
    },
    {
      year: '2019 - 2021',
      title: 'Junior Developer',
      company: 'Web Creations Studio',
      description: 'Started my career building responsive websites and learning modern web technologies.'
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code', 'Webpack'] },
    { category: 'Design', items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Brand Design'] },
  ];

  const certifications = [
    { title: 'Full Stack Web Development', issuer: 'Udemy' },
    { title: 'React Advanced Patterns', issuer: 'egghead.io' },
    { title: 'UI/UX Design Fundamentals', issuer: 'Interaction Design Foundation' },
  ];

  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Me</h1>
          <p>My Journey in Web Development & Design</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Who Am I?</h2>
              <p>
                I'm John Parker, a passionate full-stack developer and designer from San Francisco. 
                With over 5 years of experience, I've had the opportunity to work on diverse projects 
                ranging from startups to enterprise solutions. My expertise lies in creating beautiful, 
                functional web experiences that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                projects, or mentoring aspiring developers. I believe in the power of continuous learning and 
                creative problem-solving.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-box">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-box">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-box">
                <h3>100+</h3>
                <p>Code Commits</p>
              </div>
              <div className="stat-box">
                <h3>10+</h3>
                <p>Team Members Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">{exp.year}</span>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-matrix">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2>Certifications & Training</h2>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <Award size={32} className="cert-icon" />
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <h2>My Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <Code2 size={40} />
              <h3>Clean Code</h3>
              <p>I believe in writing clean, maintainable code that's easy to understand and extend.</p>
            </div>
            <div className="philosophy-card">
              <Palette size={40} />
              <h3>Great Design</h3>
              <p>Design isn't just about aesthetics; it's about creating intuitive user experiences.</p>
            </div>
            <div className="philosophy-card">
              <Award size={40} />
              <h3>Quality First</h3>
              <p>Every project deserves excellence. I deliver solutions that exceed expectations.</p>
            </div>
            <div className="philosophy-card">
              <BookOpen size={40} />
              <h3>Continuous Learning</h3>
              <p>The tech industry evolves rapidly. I stay updated with the latest trends and tools.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
