import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => scrollToSection('home')}>
          <img src="/assets/logo-full.png" alt="Signworx" />
        </a>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('services')}>Services</a>
          <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        <a href="mailto:info@signworx.co.za?subject=Request%20Quote" className="btn-primary">
          Get Quote
        </a>
      </div>
    </header>
  );
}
