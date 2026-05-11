const tickerItems = [
  { before: "NOW IN", highlight: "MOSSEL BAY" },
  { highlight: "CUSTOM", after: "SUBLIMATED APPAREL" },
  { before: "BRAND YOUR BUSINESS WITH", highlight: "SIGNWORX" },
];

const repeatedTickerItems = Array.from({ length: 4 }, () => tickerItems).flat();

function TickerContent() {
  return (
    <div className="announcement-ticker-group" aria-hidden="true">
      {repeatedTickerItems.map((item, index) => (
        <span className="announcement-ticker-item" key={`${item.text}-${index}`}>
          {index > 0 && <span className="announcement-ticker-separator">•</span>}
          {item.text && <span>{item.text}</span>}
          {item.before && <span>{item.before}</span>}
          {item.highlight && (
            <span className="announcement-ticker-highlight">{item.highlight}</span>
          )}
          {item.after && <span>{item.after}</span>}
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementTicker() {
  return (
    <section className="announcement-ticker" aria-label="Signworx announcement">
      <div className="announcement-ticker-edge announcement-ticker-edge-left" />
      <div className="announcement-ticker-edge announcement-ticker-edge-right" />
      <div className="announcement-ticker-track">
        <TickerContent />
        <TickerContent />
      </div>

      <style>{`
        .announcement-ticker {
          position: relative;
          z-index: 20;
          height: 50px;
          margin-top: 84px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: linear-gradient(180deg, #111111, #050505);
          border-top: 1px solid rgba(214, 0, 0, 0.75);
          border-bottom: 1px solid rgba(214, 0, 0, 0.75);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 0 24px rgba(214, 0, 0, 0.18);
        }

        .announcement-ticker::before,
        .announcement-ticker::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(214, 0, 0, 0.7);
          filter: blur(2px);
          pointer-events: none;
        }

        .announcement-ticker::before {
          top: 0;
        }

        .announcement-ticker::after {
          bottom: 0;
        }

        .announcement-ticker-edge {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 180px;
          z-index: 2;
          pointer-events: none;
        }

        .announcement-ticker-edge-left {
          left: 0;
          background:
            radial-gradient(circle at left center, rgba(214, 0, 0, 0.26), transparent 58%),
            linear-gradient(90deg, #050505 0%, #050505 34%, rgba(5, 5, 5, 0.86) 58%, transparent 100%);
        }

        .announcement-ticker-edge-right {
          right: 0;
          background:
            radial-gradient(circle at right center, rgba(214, 0, 0, 0.26), transparent 58%),
            linear-gradient(270deg, #050505 0%, #050505 34%, rgba(5, 5, 5, 0.86) 58%, transparent 100%);
        }

        .announcement-ticker-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: announcementTickerMove 24s linear infinite;
        }

        .announcement-ticker-group {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          white-space: nowrap;
          padding-right: 34px;
        }

        .announcement-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.42em;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .announcement-ticker-separator {
          color: rgba(255, 255, 255, 0.42);
          margin: 0 22px;
        }

        .announcement-ticker-highlight {
          color: #d60000;
        }

        @media (hover: hover) and (pointer: fine) {
          .announcement-ticker:hover .announcement-ticker-track {
            animation-play-state: paused;
          }
        }

        @media (max-width: 860px) {
          .announcement-ticker {
            height: 40px;
            margin-top: 72px;
          }

          .announcement-ticker-item {
            font-size: 0.7rem;
            letter-spacing: 0.11em;
          }

          .announcement-ticker-separator {
            margin: 0 16px;
          }

          .announcement-ticker-edge {
            width: 88px;
          }
        }

        @keyframes announcementTickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
