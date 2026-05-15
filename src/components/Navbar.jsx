import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import signworxLogo from "../assets/images/signworx-logo.svg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Maintenance", id: "maintenance" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Terms", id: "terms" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const quoteEmail =
    "mailto:info@signworx.co.za?subject=Signworx%20Quote%20Request&body=Hello%20Signworx%2C%0A%0AI%20would%20like%20to%20request%20a%20quote.%0A%0AProject%20details%3A%0A";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <button className="wordmark" onClick={() => goTo("home")} aria-label="Go to homepage">
          <img src={signworxLogo} alt="Signworx" />
        </button>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => goTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <a className="quote-button nav-quote" href={quoteEmail}>
          Get a Quote
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
