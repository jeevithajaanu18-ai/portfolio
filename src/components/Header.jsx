import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">JP</span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
