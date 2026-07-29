import React, { useState } from 'react';
import { ChevronRight, Gauge, CreditCard, Activity, RefreshCw, Lock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [testing, setTesting] = useState(false);
  const [speedVal, setSpeedVal] = useState(100);
  const [pingVal, setPingVal] = useState(4);

  const runSpeedTest = () => {
    setTesting(true);
    let count = 0;
    const interval = setInterval(() => {
      setSpeedVal(Math.floor(Math.random() * 20) + 90);
      setPingVal(Math.floor(Math.random() * 3) + 3);
      count++;
      if (count > 12) {
        clearInterval(interval);
        setSpeedVal(100);
        setPingVal(4);
        setTesting(false);
      }
    }, 140);
  };

  return (
    <section id="hero" className="apple-hero-section">
      <div className="container apple-hero-container">
        {/* Apple Center Headline */}
        <div className="apple-hero-text">
          <span className="apple-eyebrow">BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
          <h1 className="apple-hero-title">
            Zamanet.<br />Kecepatan Fiber Murni.
          </h1>
          <p className="apple-hero-subtitle">
            Koneksi internet serat optik termutakhir dengan rasio simetris 1:1, <strong>0% FUP (Real Unlimited)</strong>, dan kemudahan pembayaran otomatis via <strong>Duitku Payment Gateway</strong>.
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

        {/* Apple Display Product Showcase Card */}
        <div className="apple-display-card glass-card">
          <div className="card-top-bar">
            <div className="status-pill">
              <span className="dot-green"></span>
              <span>Network Status: <strong>ODP Live Active</strong></span>
            </div>
            <div className="location-pill">
              <ShieldCheck size={14} />
              <span>Sedayu, Bantul & Yogyakarta</span>
            </div>
          </div>

          <div className="speed-showcase-box">
            <div className="gauge-header">
              <Activity size={22} className="act-icon" />
              <span>Simulasi Performa Jaringan Realtime</span>
            </div>

            <div className="big-speed-num-row">
              <Gauge size={44} className={`gauge-icon ${testing ? 'spinning' : ''}`} />
              <div className="val-group">
                <span className="speed-num">{speedVal}</span>
                <span className="speed-unit">Mbps</span>
              </div>
            </div>

            <div className="apple-metrics-grid">
              <div className="metric-col">
                <span className="m-label">Latency Ping</span>
                <span className="m-val">{pingVal} ms</span>
              </div>
              <div className="metric-col">
                <span className="m-label">Jitter</span>
                <span className="m-val">0.6 ms</span>
              </div>
              <div className="metric-col">
                <span className="m-label">Simetris</span>
                <span className="m-val">1:1 Upload/DL</span>
              </div>
            </div>

            <button className="btn-apple-test" onClick={runSpeedTest} disabled={testing}>
              <RefreshCw size={14} className={testing ? 'spinning' : ''} />
              <span>{testing ? 'Mengukur Jaringan...' : 'Uji Kecepatan Jaringan'}</span>
            </button>
          </div>

          <div className="card-footer-note">
            <Lock size={14} className="lock-icon" />
            <span>Pembayaran Otomatis Duitku: <strong>BCA, Mandiri, BRI, BNI, Permata, QRIS, & ShopeePay</strong></span>
          </div>
        </div>
      </div>

      <style>{`
        .apple-hero-section {
          padding: 160px 0 100px;
          text-align: center;
        }

        .apple-hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
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
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        /* Apple Display Showcase Card */
        .apple-display-card {
          width: 100%;
          max-width: 860px;
          padding: 40px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-apple);
          border: 1px solid var(--border-light);
          text-align: left;
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .location-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--apple-blue);
        }

        .speed-showcase-box {
          background: var(--bg-main);
          border-radius: var(--radius-md);
          padding: 32px;
          text-align: center;
          margin-bottom: 20px;
        }

        .gauge-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 20px;
        }

        .act-icon { color: var(--apple-blue); }

        .big-speed-num-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .gauge-icon {
          color: var(--apple-blue);
          transition: transform 0.2s ease;
        }

        .gauge-icon.spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .val-group {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .speed-num {
          font-family: var(--font-heading);
          font-size: 4.2rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }

        .speed-unit {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .apple-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: #ffffff;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        .metric-col {
          display: flex;
          flex-direction: column;
        }

        .m-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .m-val {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .btn-apple-test {
          background: #ffffff;
          border: 1px solid var(--border-light);
          color: var(--apple-blue);
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-apple-test:hover {
          border-color: var(--apple-blue);
          background: var(--apple-blue-light);
        }

        .card-footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .lock-icon { color: var(--apple-blue); }

        @media (max-width: 868px) {
          .apple-hero-title {
            font-size: 3rem;
          }
          .apple-hero-subtitle {
            font-size: 1.1rem;
          }
          .apple-metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
