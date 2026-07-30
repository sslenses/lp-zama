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
          border-radius: 28px;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-3);
          z-index: 99;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }

        .wa-float-btn:hover {
          box-shadow: var(--shadow-4);
        }

        .wa-tooltip {
          position: absolute;
          right: 72px;
          background: #202124;
          border: 1px solid #3c4043;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        .wa-float-btn:hover .wa-tooltip {
          opacity: 1;
        }
      `}</style>
    </a>
  );
};
