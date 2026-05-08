export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top"></div>
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo-mark.png" alt="Signworx" />
          <p>Premium signage manufacturing and installation across South Africa.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div>
            <h4>Services</h4>
            <a onClick={() => scrollToSection('services')}>Vehicle Branding</a>
            <a onClick={() => scrollToSection('services')}>Lightboxes</a>
            <a onClick={() => scrollToSection('services')}>CNC Cutting</a>
            <a onClick={() => scrollToSection('services')}>Large Format</a>
          </div>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://wa.me/27630752497" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:info@signworx.co.za">Email</a>
            <a href="tel:+27630752497">Phone</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {currentYear} Signworx. All rights reserved.</span>
      </div>
    </footer>
  );
}
