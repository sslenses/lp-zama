import React from 'react';
import { ChevronRight, CreditCard } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="apple-hero-section">
      <div className="container apple-hero-container">
        <div className="apple-hero-text">
          <span className="apple-eyebrow">BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
          <h1 className="apple-hero-title">
            Internet Fiber Murni.<br />
            <span className="gradient-text-apple">Tanpa Batas.</span>
          </h1>
          <p className="apple-hero-subtitle">
            Kecepatan simetris 1:1 hingga 200 Mbps untuk rumah dan usaha Anda. <strong>0% FUP (Real Unlimited)</strong>.
          </p>

          <div className="apple-hero-cta">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenModal('Hero Direct Checkout')}
            >
              <CreditCard size={18} />
              <span>Berlangganan Sekarang</span>
            </button>

            <a href="#pricing" className="apple-link">
              <span>Lihat semua paket & harga</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .apple-hero-section {
          padding: 60px 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .apple-hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .apple-eyebrow {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: var(--apple-blue);
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
        }

        .apple-hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
          color: var(--text-main);
        }

        .apple-hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 24px;
          line-height: 1.5;
        }

        .apple-hero-subtitle strong {
          color: var(--text-main);
        }

        .apple-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .apple-hero-title { font-size: 2.2rem; }
          .apple-hero-subtitle { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};
