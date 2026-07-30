import React, { useState } from 'react';
import { ChevronRight, CreditCard, MapPin, Search, CheckCircle2, ShieldCheck, Zap, Wifi } from 'lucide-react';
import heroSpeedImg from '../assets/fiber_hero_speed.jpg';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [quickAddress, setQuickAddress] = useState('');
  const [checked, setChecked] = useState(false);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickAddress.trim()) {
      setChecked(true);
    }
  };

  return (
    <section id="hero" className="gf-hero-section">
      <div className="container gf-hero-container">
        {/* Left Column: Text & Address Checker */}
        <div className="gf-hero-left">
          <div className="gf-eyebrow-badge">
            <Wifi size={14} />
            <span>BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
          </div>

          <h1 className="gf-hero-title">
            Internet Fiber Optic Murni.<br />
            <span className="hero-highlight">Super Cepat. Tanpa Batas.</span>
          </h1>

          <p className="gf-hero-subtitle">
            Nikmati kecepatan simetris 1:1 hingga 200 Mbps untuk rumah dan bisnis Anda di Jogja. <strong>100% Real Unlimited (0% FUP)</strong> tanpa penurunan kecepatan sepihak.
          </p>

          {/* Quick Coverage Checker Input Box (Google Fiber Style) */}
          <div className="gf-hero-search-box">
            <form onSubmit={handleQuickCheck} className="gf-search-form">
              <div className="gf-input-wrapper">
                <MapPin size={18} className="gf-input-icon" />
                <input
                  type="text"
                  placeholder="Masukkan alamat lokasi Anda (contoh: Sedayu, Bantul)..."
                  value={quickAddress}
                  onChange={(e) => { setQuickAddress(e.target.value); setChecked(false); }}
                  className="gf-search-input"
                  aria-label="Cek Ketersediaan Alamat"
                />
              </div>
              <button type="submit" className="btn btn-primary gf-search-btn">
                <Search size={16} />
                <span>Cek Jaringan</span>
              </button>
            </form>

            {checked && (
              <div className="gf-quick-result">
                <CheckCircle2 size={16} className="gf-check-icon" />
                <span>Area <strong>"{quickAddress}"</strong> tercover! Tiang ODP Zamanet siap terpasang.</span>
              </div>
            )}
          </div>

          <div className="gf-hero-cta">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenModal('Hero Direct Checkout')}
            >
              <CreditCard size={18} />
              <span>Berlangganan Sekarang</span>
            </button>

            <a href="#pricing" className="apple-link">
              <span>Lihat Semua Paket & Harga</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Product Image & Floating Speed Badges */}
        <div className="gf-hero-right">
          <div className="gf-visual-card">
            <img src={heroSpeedImg} alt="Zamanet Ultra-fast Wi-Fi Router" className="gf-hero-img" />
            <div className="gf-img-overlay"></div>

            {/* Floating Badge 1: Speed */}
            <div className="gf-badge-float badge-top-right">
              <Zap size={16} className="badge-icon-zap" />
              <div>
                <span className="badge-val">100 Mbps</span>
                <span className="badge-lbl">Upload & Download Simetris</span>
              </div>
            </div>

            {/* Floating Badge 2: 0% FUP */}
            <div className="gf-badge-float badge-bottom-left">
              <ShieldCheck size={16} className="badge-icon-shield" />
              <div>
                <span className="badge-val">0% FUP Unlimited</span>
                <span className="badge-lbl">Tanpa Batasan Kuota Bulanan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Accreditations Strip (Google Fiber Style) */}
      <div className="gf-trust-strip">
        <div className="container gf-trust-container">
          <div className="gf-trust-items">
            <div className="gf-trust-item">
              <Zap size={18} />
              <span>100% Real Unlimited</span>
            </div>
            <div className="gf-trust-item">
              <ShieldCheck size={18} />
              <span>Rasio Simetris 1:1</span>
            </div>
            <div className="gf-trust-item">
              <CreditCard size={18} />
              <span>Verified Duitku Gateway</span>
            </div>
            <div className="gf-trust-item">
              <Wifi size={18} />
              <span>Bebas Biaya Router</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gf-hero-section {
          padding: 104px 0 0;
          background: #ffffff;
        }

        .gf-hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding-bottom: 64px;
        }

        .gf-eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--gf-blue-light);
          color: var(--gf-blue-dark);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .gf-hero-title {
          font-size: 2.75rem;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          color: var(--text-main);
        }

        .hero-highlight {
          color: var(--gf-blue);
          display: inline-block;
        }

        .gf-hero-subtitle {
          font-size: 1.0625rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 580px;
        }

        .gf-hero-subtitle strong {
          color: var(--text-main);
          font-weight: 600;
        }

        /* Hero Search Input Box */
        .gf-hero-search-box {
          background: var(--bg-subtle);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 8px;
          margin-bottom: 24px;
          max-width: 580px;
        }

        .gf-search-form {
          display: flex;
          gap: 8px;
        }

        .gf-input-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-grow: 1;
          padding: 0 12px;
          background: #ffffff;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
        }

        .gf-input-icon {
          color: var(--gf-blue);
          flex-shrink: 0;
        }

        .gf-search-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 0.875rem;
          font-family: var(--font-body);
          color: var(--text-main);
          background: transparent;
          padding: 10px 0;
        }

        .gf-search-btn {
          white-space: nowrap;
          padding: 10px 20px;
        }

        .gf-quick-result {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px 4px;
          font-size: 0.8125rem;
          color: var(--gf-green-dark);
        }

        .gf-check-icon {
          color: var(--gf-green);
          flex-shrink: 0;
        }

        .gf-hero-cta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* Visual Card Right Column */
        .gf-hero-right {
          position: relative;
        }

        .gf-visual-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-3);
          border: 1px solid var(--border-light);
          aspect-ratio: 16 / 10;
        }

        .gf-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gf-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(32,33,36,0.3) 100%);
        }

        .gf-badge-float {
          position: absolute;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: var(--shadow-2);
          z-index: 2;
        }

        .badge-top-right {
          top: 16px;
          right: 16px;
        }

        .badge-bottom-left {
          bottom: 16px;
          left: 16px;
        }

        .badge-icon-zap { color: var(--gf-blue); }
        .badge-icon-shield { color: var(--gf-green); }

        .badge-val {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.2;
        }

        .badge-lbl {
          display: block;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        /* Trust Strip */
        .gf-trust-strip {
          background: var(--bg-subtle);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          padding: 18px 0;
        }

        .gf-trust-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gf-trust-items {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .gf-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .gf-trust-item svg {
          color: var(--gf-blue);
        }

        @media (max-width: 992px) {
          .gf-hero-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .gf-hero-title {
            font-size: 2.25rem;
          }
          .gf-trust-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .gf-trust-items {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};
