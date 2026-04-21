import './App.css';

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h2>Jaanu.dev</h2>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-text">
          <h1>Hello, I'm <span>Jaanu</span></h1>
          <p>Creative Frontend Developer building aesthetic and modern UI experiences.</p>
          <button>Hire Me</button>
        </div>

        <img src="https://via.placeholder.com/300" alt="profile" />
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <img src="https://via.placeholder.com/250" alt="about" />
        <div>
          <h2>About Me</h2>
          <p>I design and develop modern, responsive websites with a focus on UI/UX.</p>
          <p>✨ Skills: HTML, CSS, JS, React</p>
          <p>🚀 Passion: Creative Web Design</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>

        <div className="grid">
          <div className="card">Music Player UI</div>
          <div className="card">Movie Filter Web</div>
          <div className="card">Currency Converter</div>
          <div className="card">Portfolio Design</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your Query" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Jaanu | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;