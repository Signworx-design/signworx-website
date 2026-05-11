import whatsappIcon from "../assets/images/whatsapp.svg";

const whatsappNumber = "27630752497";
const message = "Hello Signworx, I would like to request a quote.";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Request a quote on WhatsApp"
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" />
    </a>
  );
}
