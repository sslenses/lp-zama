import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/6285888815556?text=Halo%20Zamanet,%20saya%20tertarik%20untuk%20berlangganan%20paket%20internet!"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float-btn"
      aria-label="Tanya Zamanet via WhatsApp"
    >
      <MessageCircle size={28} className="wa-icon" />
      <span className="wa-tooltip">Tanya CS Zamanet via WA</span>

      <style>{`
        .wa-float-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
          z-index: 99;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }

        .wa-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.65);
        }

        .wa-tooltip {
          position: absolute;
          right: 72px;
          background: rgba(6, 9, 19, 0.95);
          border: 1px solid var(--border-glass);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
        }

        .wa-float-btn:hover .wa-tooltip {
          opacity: 1;
        }
      `}</style>
    </a>
  );
};
