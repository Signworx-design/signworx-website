import { useEffect, useRef, useState } from "react";
import { Award, Megaphone, Printer, Wrench } from "lucide-react";
import heroImage from "../assets/images/hero-signworx.png";

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
      <Icon size={34} strokeWidth={1.8} />
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
          <span className="eyebrow">LEADERS IN SIGNAGE</span>
          <h1>
            <span>SIGNAGE THAT</span>
            <span>MAKES YOUR</span>
            <span className="hero-red-word">BUSINESS</span>
            <span>IMPOSSIBLE TO MISS</span>
          </h1>
          <p>
            Custom manufactured signage, vehicle branding, lightboxes, CNC lettering and large
            format print solutions built for real businesses.
          </p>
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
