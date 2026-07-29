import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Gauge, CheckCircle2, CreditCard, Activity, RefreshCw, Lock } from 'lucide-react';

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
      setSpeedVal(Math.floor(Math.random() * 20) + 90); // 90-110 Mbps
      setPingVal(Math.floor(Math.random() * 3) + 3); // 3-5 ms
      count++;
      if (count > 12) {
        clearInterval(interval);
        setSpeedVal(100);
        setPingVal(4);
        setTesting(false);
      }
    }, 150);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <ShieldCheck size={16} className="badge-icon" />
            <span>100% Fiber Optic Modern • D.I. Yogyakarta</span>
          </div>

          <h1 className="hero-title">
            Koneksi <span className="gradient-text-cyan-pink">Zaman Now</span>, Kecepatan Tanpa Batas.
          </h1>

          <p className="hero-description">
            Nikmati koneksi internet serat optik murni super kencang, simetris 1:1, dan <strong>0% FUP (Real Unlimited)</strong> dengan pembayaran otomatis via <strong>Duitku Payment Gateway</strong>.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              <span>Lihat Paket & Harga</span>
              <ArrowRight size={20} />
            </a>
            <button className="btn btn-outline btn-lg" onClick={() => onOpenModal('Pendaftaran Langsung Hero')}>
              <CreditCard size={18} />
              <span>Bayar & Langganan</span>
            </button>
          </div>

          <div className="hero-highlights-pills">
            <div className="pill-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Upload = Download (1:1)</span>
            </div>
            <div className="pill-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Tanpa Batas Kuota FUP</span>
            </div>
            <div className="pill-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Duitku Instant Payment</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Bento Live Speed Test Card */}
        <div className="hero-visual">
          <div className="visual-card bento-card glass-card">
            <div className="visual-header">
              <div className="v-header-left">
                <Activity size={20} className="activity-icon" />
                <span className="v-title">Simulasi Performa Jaringan Zamanet</span>
              </div>
              <div className="v-status">
                <span className="status-dot"></span>
                <span>Live ODP Active</span>
              </div>
            </div>

            {/* Interactive Speed Gauge */}
            <div className="speed-meter-box">
              <div className="meter-circle">
                <Gauge size={38} className={`gauge-icon ${testing ? 'spinning' : ''}`} />
                <span className="meter-num">{speedVal}</span>
                <span className="meter-unit">Mbps</span>
              </div>

              <div className="ping-stats-row">
                <div className="pstat-item">
                  <span className="pstat-lbl">Latency Ping</span>
                  <span className="pstat-val">{pingVal} ms</span>
                </div>
                <div className="pstat-item">
                  <span className="pstat-lbl">Jitter</span>
                  <span className="pstat-val">0.6 ms</span>
                </div>
                <div className="pstat-item">
                  <span className="pstat-lbl">Packet Loss</span>
                  <span className="pstat-val">0.0%</span>
                </div>
              </div>

              <button className="btn-test-run" onClick={runSpeedTest} disabled={testing}>
                <RefreshCw size={14} className={testing ? 'spinning' : ''} />
                <span>{testing ? 'Mengukur Kecepatan...' : 'Uji Kecepatan Realtime'}</span>
              </button>
            </div>

            {/* Micro Duitku Payment Pill */}
            <div className="duitku-trust-pill">
              <Lock size={14} className="lock-icon" />
              <span>Pembayaran Aman Via Duitku: <strong>BCA, Mandiri, BRI, QRIS, & E-Wallet</strong></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 160px 0 100px;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          background: var(--primary-blue-light);
          border: 1px solid rgba(2, 132, 199, 0.2);
          color: var(--primary-blue-dark);
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .badge-icon {
          color: var(--primary-blue);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--primary-blue);
          box-shadow: 0 0 10px var(--primary-blue);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
          line-height: 1.12;
          color: var(--text-main);
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 36px;
          max-width: 580px;
          line-height: 1.6;
        }

        .hero-description strong {
          color: var(--text-main);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .hero-highlights-pills {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pill-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .check-icon {
          color: var(--accent-emerald);
        }

        /* Hero Bento Live Speed Card */
        .visual-card {
          padding: 32px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
        }

        .visual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .v-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .activity-icon {
          color: var(--primary-blue);
        }

        .v-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #065f46;
          background: var(--accent-emerald-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
        }

        .speed-meter-box {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
          border-radius: var(--radius-md);
          padding: 28px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .meter-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .gauge-icon {
          color: var(--primary-blue);
          margin-bottom: 6px;
          transition: transform 0.2s ease;
        }

        .gauge-icon.spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .meter-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--primary-blue-dark);
          line-height: 1;
        }

        .meter-unit {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .ping-stats-row {
          display: flex;
          justify-content: space-around;
          width: 100%;
          background: #ffffff;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 16px;
        }

        .pstat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pstat-lbl {
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .pstat-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .btn-test-run {
          background: #ffffff;
          border: 1px solid var(--primary-blue);
          color: var(--primary-blue-dark);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-test-run:hover {
          background: var(--primary-blue-light);
        }

        .duitku-trust-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-subtle);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .lock-icon {
          color: var(--primary-blue);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-description {
            margin: 0 auto 30px;
          }

          .hero-actions, .hero-highlights-pills {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
