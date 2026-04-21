import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Full Stack Solutions</li>
            <li>Consulting</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} John Parker. All rights reserved.</p>
        <p>Crafted with passion & creativity</p>
      </div>
    </footer>
  );
}

export default Footer;
