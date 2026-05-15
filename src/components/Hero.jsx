import { useEffect, useRef, useState } from "react";
import { Award, Megaphone, Printer, Wrench } from "lucide-react";
import heroImage from "../assets/images/hero-signworx.png";
import sLogo from "../assets/images/s-logo.svg";
import signworxWordmark from "../assets/images/signworx-wordmark.svg";

const stats = [
  { value: 30, suffix: "+", label: "Years Strong", icon: Award },
  { text: "Big", label: "Branding", icon: Megaphone },
  { text: "Design", label: "To Install", icon: Wrench },
  { text: "No Limits", label: "Printing", icon: Printer },
];

function CountUpStat({ value, suffix = "", text, label, icon: Icon }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const statRef = useRef(null);
  const isCounter = typeof value === "number";

  useEffect(() => {
    if (!isCounter) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [isCounter]);

  useEffect(() => {
    if (!started || !isCounter) return undefined;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value, isCounter]);

  return (
    <div ref={statRef}>
      <Icon size={28} strokeWidth={1.45} />
      <span className="stat-copy">
        <strong>{isCounter ? `${count}${suffix}` : text}</strong>
        <span>{label}</span>
      </span>
    </div>
  );
}

export default function Hero() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const quoteEmail =
    "mailto:info@signworx.co.za?subject=Signworx%20Quote%20Request&body=Hello%20Signworx%2C%0A%0AI%20would%20like%20to%20request%20a%20quote.%0A%0AProject%20details%3A%0A";

  return (
    <section className="hero" id="home">
      <img className="hero-background-image" src={heroImage} alt="" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <div className="hero-brand-stack">
            <img className="hero-logo-mark" src={sLogo} alt="Signworx" />
            <img className="hero-wordmark" src={signworxWordmark} alt="Signworx" />
            <p className="hero-brand-line">
              <span>LEADERS IN CORPORATE SIGNAGE</span>
              <span>SINCE 1997</span>
            </p>
            <p className="hero-brand-summary">
              Custom signage, branding, apparel, vehicle graphics and fabrication.
            </p>
          </div>
          <div className="hero-actions">
            <a className="quote-button" href={quoteEmail}>
              GET A QUOTE
            </a>
            <button className="ghost-button" onClick={() => goTo("work")}>
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>

      <div className="container stat-strip reveal">
        {stats.map((stat) => (
          <CountUpStat key={`${stat.text || stat.value}-${stat.label}`} {...stat} />
        ))}
      </div>
    </section>
  );
}
