import React from 'react';
import { ChevronRight, CreditCard } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="apple-hero-section">
      <div className="container apple-hero-container">
        {/* Apple Center Headline */}
        <div className="apple-hero-text">
          <span className="apple-eyebrow">BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
          <h1 className="apple-hero-title">
            Zamanet.<br />
            <span className="gradient-text-apple">Kecepatan Serat Optik Murni.</span>
          </h1>
          <p className="apple-hero-subtitle">
            Internet tanpa batas untuk rumah dan usaha Anda. <strong>0% FUP (Real Unlimited)</strong>. Tanpa kompromi.
          </p>

          <div className="apple-hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => onOpenModal('Beli Sekarang Hero')}>
              <CreditCard size={18} />
              <span>Berlangganan Sekarang</span>
            </button>

            <a href="#pricing" className="apple-link">
              <span>Lihat semua paket & harga</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .apple-hero-section {
          min-height: calc(100vh - 76px);
          padding: 60px 0 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
        }

        .apple-hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .apple-eyebrow {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--apple-blue);
          text-transform: uppercase;
          margin-bottom: 16px;
          display: inline-block;
        }

        .apple-hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          color: var(--text-main);
        }

        .apple-hero-subtitle {
          font-size: 1.35rem;
          color: var(--text-muted);
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.5;
        }

        .apple-hero-subtitle strong {
          color: var(--text-main);
        }

        .apple-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 0;
          flex-wrap: wrap;
        }

        @media (max-width: 868px) {
          .apple-hero-title { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
};
