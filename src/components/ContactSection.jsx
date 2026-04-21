import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's create something amazing together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Mail className="info-icon" size={32} />
              <h3>Email</h3>
              <p>john.parker@example.com</p>
              <a href="mailto:john.parker@example.com">Send Email</a>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={32} />
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <a href="tel:+15551234567">Call Me</a>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={32} />
              <h3>Location</h3>
              <p>San Francisco, CA</p>
              <a href="#">Get Directions</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
