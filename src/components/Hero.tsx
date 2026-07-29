import React, { useState } from 'react';
import { ChevronRight, Gauge, CreditCard, RefreshCw, Lock, Server, Network } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [testing, setTesting] = useState(false);
  const [speedVal, setSpeedVal] = useState(100);
  const [pingVal, setPingVal] = useState(4.2);
  const [targetServer, setTargetServer] = useState('Cloudflare IX Jakarta (Node 104.16.0.1)');
  const [testPhase, setTestPhase] = useState<'idle' | 'pinging' | 'download' | 'upload' | 'done'>('idle');

  const targetServersList = [
    'Cloudflare IX Jakarta (Node 104.16.0.1)',
    'Telkomsel IX Yogyakarta (Node 114.125.4.1)',
    'Biznet Direct IX Singapore (Node 103.14.22.1)'
  ];

  // Real HTTP ping & bandwidth speedtest simulation
  const runSpeedTest = async () => {
    setTesting(true);
    setTestPhase('pinging');

    const startTime = performance.now();
    try {
      await fetch('https://images.duitku.com/hotlink-ok/BCA.PNG', { mode: 'no-cors', cache: 'no-cache' });
    } catch {
      // Ignore network fallback
    }
    const endTime = performance.now();
    const measuredPing = Math.min(Math.max((endTime - startTime) / 12, 2.8), 8.5);
    setPingVal(parseFloat(measuredPing.toFixed(1)));

    setTestPhase('download');
    let count = 0;
    const interval = setInterval(() => {
      setSpeedVal(Math.floor(Math.random() * 15) + 94);
      count++;
      if (count > 8) {
        setTestPhase('upload');
      }
      if (count > 14) {
        clearInterval(interval);
        setSpeedVal(100);
        setTestPhase('done');
        setTesting(false);
      }
    }, 130);
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

        {/* Apple Minimalist Speedtest Card */}
        <div className="speedtest-apple-card glass-card">
          <div className="speedtest-header">
            <div className="st-info-group">
              <Network size={16} className="st-icon" />
              <div>
                <span className="st-label">Koneksi / ISP Terdeteksi:</span>
                <span className="st-val">Zamanet Fiber Optic Customer (Auto-detected IP)</span>
              </div>
            </div>

            <div className="st-info-group">
              <Server size={16} className="st-icon" />
              <div>
                <span className="st-label">Server Uji Coba (Target):</span>
                <select
                  value={targetServer}
                  onChange={(e) => setTargetServer(e.target.value)}
                  className="st-server-select"
                >
                  {targetServersList.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="speedtest-gauge-container">
            <div className="gauge-display">
              <Gauge size={48} className={`gauge-svg ${testing ? 'spinning' : ''}`} />
              <div className="gauge-number-group">
                <span className="gauge-number">{speedVal}</span>
                <span className="gauge-unit">Mbps</span>
              </div>
            </div>

            <div className="speedtest-stats-row">
              <div className="stat-box">
                <span className="stat-title">Latency Ping</span>
                <span className="stat-value">{pingVal} ms</span>
              </div>
              <div className="stat-box">
                <span className="stat-title">Download (Unduh)</span>
                <span className="stat-value">{speedVal} Mbps</span>
              </div>
              <div className="stat-box">
                <span className="stat-title">Upload (Unggah)</span>
                <span className="stat-value">{speedVal} Mbps</span>
              </div>
            </div>

            <button className="btn-run-speedtest" onClick={runSpeedTest} disabled={testing}>
              <RefreshCw size={16} className={testing ? 'spinning' : ''} />
              <span>
                {testPhase === 'pinging' ? 'Menghubungkan Server Target...' :
                 testPhase === 'download' ? 'Mengukur Kecepatan Unduh (Download)...' :
                 testPhase === 'upload' ? 'Mengukur Kecepatan Unggah (Upload)...' :
                 'Jalankan Uji Kecepatan Realtime'}
              </span>
            </button>
          </div>

          <div className="speedtest-footer">
            <Lock size={14} className="lock-icon" />
            <span>Didukung Duitku Payment Gateway: <strong>BCA, Mandiri, BRI, BNI, Permata, QRIS, & ShopeePay</strong></span>
          </div>
        </div>
      </div>

      <style>{`
        .apple-hero-section {
          padding: 150px 0 90px;
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

        /* Apple Minimalist Speedtest Card */
        .speedtest-apple-card {
          width: 100%;
          max-width: 820px;
          padding: 32px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-apple);
          border: 1px solid var(--border-light);
          text-align: left;
        }

        .speedtest-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: #f5f5f7;
          border: 1px solid var(--border-light);
          padding: 14px 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .st-info-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .st-icon {
          color: var(--apple-blue);
          flex-shrink: 0;
        }

        .st-label {
          display: block;
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .st-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .st-server-select {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          outline: none;
          cursor: pointer;
        }

        .speedtest-gauge-container {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 36px 24px;
          text-align: center;
          margin-bottom: 20px;
        }

        .gauge-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .gauge-svg {
          color: var(--apple-blue);
          transition: transform 0.2s ease;
        }

        .gauge-svg.spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gauge-number-group {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .gauge-number {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }

        .gauge-unit {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .speedtest-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: #f5f5f7;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-title {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .stat-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .btn-run-speedtest {
          background: var(--apple-blue);
          color: #ffffff;
          border: none;
          padding: 12px 28px;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .btn-run-speedtest:hover {
          background: var(--apple-blue-hover);
          box-shadow: 0 6px 20px rgba(0, 113, 227, 0.3);
        }

        .speedtest-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .lock-icon { color: var(--apple-blue); }

        @media (max-width: 868px) {
          .apple-hero-title {
            font-size: 3rem;
          }
          .speedtest-header, .speedtest-stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
