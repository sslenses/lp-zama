import React, { useState } from 'react';
import { ChevronRight, CreditCard, Zap, Check, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [selectedSpeed, setSelectedSpeed] = useState<50 | 100 | 200>(100);

  const speedData = {
    50: {
      name: 'Z-Fast 50 (Promo)',
      price: 'Rp 135.000',
      period: '/bulan',
      tag: 'SUPER HEMAT',
      desc: 'Ideal untuk browsing, medsos, & streaming HD hingga 5 perangkat.',
      benefits: ['Speed 50 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Router Wi-Fi', 'Gratis Biaya Pasang']
    },
    100: {
      name: 'Z-Fast 100 (Best Value)',
      price: 'Rp 165.000',
      period: '/bulan',
      tag: 'PALING POPULER',
      desc: 'Super ngebut untuk gaming 4K, WFH simultan, & 5-10 HP aktif.',
      benefits: ['Speed 100 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Router Wi-Fi High Gain', 'Prioritas Low Latency']
    },
    200: {
      name: 'Z-Reguler 200 (Pro)',
      price: 'Rp 580.000',
      period: '/bulan',
      tag: 'KAPASITAS RAKSASA',
      desc: 'Bandwidth jumbo bebas lag untuk kantor usaha, co-working, atau kos-kosan.',
      benefits: ['Speed 200 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Dual Band Router', 'Dedicated Technical Support']
    }
  };

  const current = speedData[selectedSpeed];

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

          {/* Speed Selector Pill Switcher */}
          <div className="hero-speed-switcher">
            <span className="switcher-label">Pilih Kecepatan Cepat:</span>
            <div className="speed-buttons-row">
              <button
                type="button"
                className={`speed-pill-btn ${selectedSpeed === 50 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(50)}
              >
                <Zap size={14} /> 50 Mbps
              </button>
              <button
                type="button"
                className={`speed-pill-btn ${selectedSpeed === 100 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(100)}
              >
                <Sparkles size={14} /> 100 Mbps
              </button>
              <button
                type="button"
                className={`speed-pill-btn ${selectedSpeed === 200 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(200)}
              >
                <Zap size={14} /> 200 Mbps
              </button>
            </div>
          </div>

          {/* Interactive Realtime Card Preview */}
          <div className="hero-preview-card glass-card">
            <div className="preview-card-header">
              <span className="preview-tag">{current.tag}</span>
              <div className="preview-price">
                <strong className="price-num">{current.price}</strong> <span className="price-per">{current.period}</span>
              </div>
            </div>
            <p className="preview-desc">{current.desc}</p>
            <div className="preview-benefits">
              {current.benefits.map((b, i) => (
                <span key={i} className="benefit-item">
                  <Check size={14} className="check-icon" /> {b}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-primary btn-full btn-lg"
              onClick={() => onOpenModal(`${current.name} (${selectedSpeed} Mbps) - ${current.price}`)}
            >
              <CreditCard size={18} />
              <span>Berlangganan Paket Ini ({current.price})</span>
            </button>
          </div>

          <div className="apple-hero-cta" style={{ marginTop: '20px' }}>
            <a href="#pricing" className="apple-link">
              <span>Lihat perbandingan semua paket</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .apple-hero-section {
          min-height: calc(100vh - 76px);
          padding: 50px 0;
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
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--apple-blue);
          text-transform: uppercase;
          margin-bottom: 14px;
          display: inline-block;
        }

        .apple-hero-title {
          font-size: 4.2rem;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
          color: var(--text-main);
        }

        .apple-hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 680px;
          margin: 0 auto 28px;
          line-height: 1.5;
        }

        .hero-speed-switcher {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .switcher-label {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        .speed-buttons-row {
          display: inline-flex;
          background: #e8e8ed;
          padding: 4px;
          border-radius: var(--radius-full);
          gap: 4px;
        }

        .speed-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          color: var(--text-main);
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .speed-pill-btn.active {
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          color: var(--apple-blue);
        }

        /* Realtime Preview Card */
        .hero-preview-card {
          max-width: 540px;
          margin: 0 auto;
          padding: 24px 28px;
          text-align: left;
          border-radius: var(--radius-lg);
          background: #ffffff;
        }

        .preview-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .preview-tag {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--apple-blue);
          background: var(--apple-blue-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .preview-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-num {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .price-per {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .preview-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          line-height: 1.45;
        }

        .preview-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .benefit-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .check-icon {
          color: var(--apple-blue);
          flex-shrink: 0;
        }

        .apple-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .apple-hero-title { font-size: 2.8rem; }
          .preview-benefits { grid-template-columns: 1fr; }
          .hero-preview-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
};
