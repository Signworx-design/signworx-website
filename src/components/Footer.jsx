import signworxLogo from "../assets/images/signworx-logo.svg";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const services = [
  "Vehicle Branding",
  "Shopfront Signage",
  "Lightboxes",
  "CNC Cutting",
  "Large Format Printing",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div>
          <img className="footer-logo" src={signworxLogo} alt="Signworx" />
          <p>Leaders in Signage</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>

        <div>
          <h3>Services</h3>
          {services.map((service) => (
            <button key={service} onClick={() => goTo("services")}>
              {service}
            </button>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <a href="tel:+27446951078">044 695 1078</a>
          <a href="mailto:info@signworx.co.za">info@signworx.co.za</a>
          <a href="https://www.facebook.com/Signworx" target="_blank" rel="noreferrer">
            Facebook: Signworx
          </a>
        </div>
      </div>
      <div className="footer-bottom">Copyright {year} Signworx. All rights reserved.</div>
    </footer>
  );
}
