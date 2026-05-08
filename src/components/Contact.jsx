import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-label">CONTACT</span>
          <h2>Ready to start your signage project?</h2>
          <p>Reach out for a quote, project consultation or site survey across South Africa.</p>

          <div className="contact-block">
            <strong>Phone</strong>
            <a href="tel:+27630752497">+27 63 075 2497</a>
          </div>
          <div className="contact-block">
            <strong>Email</strong>
            <a href="mailto:info@signworx.co.za">info@signworx.co.za</a>
          </div>
          <div className="contact-block">
            <strong>Address</strong>
            <span>8 Sioux St, Voorbaai, Mossel Bay, 6500</span>
          </div>
          <a 
            href="https://wa.me/27630752497?text=Hello%20Signworx%2C%20I%20would%20like%20to%20request%20a%20quote."
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ display: 'block', marginTop: '1.5rem', textAlign: 'center' }}
          >
            WhatsApp Us
          </a>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} className="form-group">
            <div className="form-grid">
              <label className="form-label">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="form-label">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="form-label">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label className="form-label form-full">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type="submit" className="btn-submit">Submit Enquiry</button>
          </form>

          {showSuccess && (
            <div className="success-message">
              Thank you. Your enquiry has been prepared. We will contact you shortly.
            </div>
          )}
        </div>
      </div>

      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="map-placeholder">
          <span>Google Maps placeholder - add integration here</span>
        </div>
      </div>
    </section>
  );
}
