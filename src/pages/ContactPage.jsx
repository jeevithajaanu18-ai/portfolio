import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import '../styles/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    queryType: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        queryType: 'general',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you. Let's create something amazing together!</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            {/* Left Side - Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to me through any of the following channels. I'm always happy to discuss new projects and creative ideas.</p>

              <div className="contact-methods">
                <div className="method-card">
                  <div className="method-icon">
                    <Mail size={32} />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>john.parker@example.com</p>
                    <a href="mailto:john.parker@example.com" className="method-link">Send Email</a>
                  </div>
                </div>

                <div className="method-card">
                  <div className="method-icon">
                    <Phone size={32} />
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <a href="tel:+15551234567" className="method-link">Call Me</a>
                  </div>
                </div>

                <div className="method-card">
                  <div className="method-icon">
                    <MapPin size={32} />
                  </div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <p>San Francisco, CA 94102</p>
                    <a href="#" className="method-link">Get Directions</a>
                  </div>
                </div>
              </div>

              <div className="availability-card">
                <h3>Availability</h3>
                <p>I typically respond within 24 hours during business days.</p>
                <div className="availability-status">
                  <span className="status-indicator"></span>
                  Available for freelance projects
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-section">
              <h2>Send Me a Message</h2>

              {submitted ? (
                <div className="success-container">
                  <CheckCircle size={64} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you as soon as possible!</p>
                  <p className="success-details">Please check your email for a confirmation message.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
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
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="queryType">Query Type *</label>
                      <select
                        id="queryType"
                        name="queryType"
                        value={formData.queryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="project">Project Discussion</option>
                        <option value="freelance">Freelance Work</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
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
                      placeholder="What is this about?"
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
                      placeholder="Tell me about your project, ideas, or questions..."
                      rows="7"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="form-note">* Required fields</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is your typical response time?</h3>
              <p>I aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer free consultations?</h3>
              <p>Yes! I offer a free 30-minute consultation to discuss your project requirements.</p>
            </div>
            <div className="faq-item">
              <h3>What's your hourly rate?</h3>
              <p>Rates vary based on project complexity. Contact me for a customized quote.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with remote teams?</h3>
              <p>Absolutely! I have extensive experience working with distributed teams worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
