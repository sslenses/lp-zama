import React from 'react';
import { Cpu, Repeat, Zap, CreditCard } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Keunggulan Utama</span>
          <h2>Mengapa Ribuan Pelanggan Memilih Zamanet?</h2>
          <p>
            Teknologi serat optik murni dipadukan dengan kebebasan internet unlimited tanpa FUP & pembayaran otomatis via Duitku Payment Gateway.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="bento-grid">
          {/* Card 1: Span 2 Columns - 100% Fiber */}
          <div className="bento-card bento-card-large glass-card">
            <div className="bento-badge badge-blue">
              <Cpu size={14} /> 100% Fiber Optic Direct
            </div>
            <h3>Serat Optik Murni Langsung ke Dalam Rumah</h3>
            <p>
              Kabel serat optik ditarik khusus langsung hingga ke modem router rumah Anda. Tahan terhadap gangguan cuaca hujan & petir di D.I. Yogyakarta dengan koneksi super stabil 24/7.
            </p>

            <div className="fiber-graphic-box">
              <div className="fnode fn-1">ODP Tiang Utama</div>
              <div className="fline">
                <span className="fline-pulse"></span>
              </div>
              <div className="fnode fn-2">Modem Wi-Fi Rumah</div>
            </div>
          </div>

          {/* Card 2: 1:1 Speed */}
          <div className="bento-card glass-card">
            <div className="bento-badge badge-indigo">
              <Repeat size={14} /> Kecepatan Simetris 1:1
            </div>
            <h3>Upload & Download Sama Kencangnya</h3>
            <p>
              Tidak ada throttling unggah file! Live streaming 4K, video call Zoom HD, dan upload repository project berjalan instan tanpa buffer.
            </p>

            <div className="speed-comparison-box">
              <div className="sc-item">
                <span className="sc-label">Download Speed</span>
                <span className="sc-val">100 Mbps</span>
              </div>
              <div className="sc-divider">=</div>
              <div className="sc-item">
                <span className="sc-label">Upload Speed</span>
                <span className="sc-val">100 Mbps</span>
              </div>
            </div>
          </div>

          {/* Card 3: Real Unlimited 0% FUP */}
          <div className="bento-card glass-card">
            <div className="bento-badge badge-emerald">
              <Zap size={14} /> Real Unlimited (0% FUP)
            </div>
            <h3>Tanpa Batasan Kuota Wajar</h3>
            <p>
              Bebas unduh file game 100GB+ sepuasnya! Kecepatan internet Anda dijamin tidak akan pernah diturunkan secara sepihak.
            </p>

            <div className="unlimited-counter-box">
              <span className="uc-num">∞ TB</span>
              <span className="uc-txt">Bebas Pakai Sepuasnya</span>
            </div>
          </div>

          {/* Card 4: Span 2 Columns - Duitku Payment */}
          <div className="bento-card bento-card-large glass-card">
            <div className="bento-badge badge-amber">
              <CreditCard size={14} /> Duitku Payment Gateway
            </div>
            <h3>Pembayaran Instan & Otomatis Terverifikasi</h3>
            <p>
              Berlangganan tanpa antre! Didukung Duitku Payment Gateway untuk pembayaran otomatis melalui Bank Virtual Account (BCA, Mandiri, BRI, BNI, Permata), QRIS All Payment, dan E-Wallet.
            </p>

            <div className="payment-brands-row">
              <div className="pbrand-badge">BCA Virtual Account</div>
              <div className="pbrand-badge">Mandiri VA</div>
              <div className="pbrand-badge">BRImo VA</div>
              <div className="pbrand-badge">QRIS Instant</div>
              <div className="pbrand-badge">ShopeePay</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          min-height: 100vh;
          padding: 100px 0 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .bento-card {
          padding: 32px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bento-card-large {
          grid-column: span 2;
        }

        .bento-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
        }

        .badge-blue { background: var(--primary-blue-light); color: var(--primary-blue-dark); }
        .badge-indigo { background: var(--accent-indigo-light); color: #3730a3; }
        .badge-emerald { background: var(--accent-emerald-light); color: #065f46; }
        .badge-amber { background: var(--accent-amber-light); color: #92400e; }

        .bento-card h3 {
          font-size: 1.45rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--text-main);
        }

        .bento-card p {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* Fiber Graphic Box */
        .fiber-graphic-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          padding: 16px 24px;
          border-radius: var(--radius-md);
        }

        .fnode {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          background: #ffffff;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .fline {
          flex-grow: 1;
          height: 4px;
          background: var(--border-light);
          margin: 0 16px;
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }

        .fline-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--primary-blue), transparent);
          animation: flineMove 1.5s linear infinite;
        }

        @keyframes flineMove {
          0% { left: -50%; }
          100% { left: 100%; }
        }

        /* Speed Comparison Box */
        .speed-comparison-box {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .sc-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc-label {
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .sc-val {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary-blue-dark);
        }

        .sc-divider {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-emerald);
        }

        /* Unlimited Counter Box */
        .unlimited-counter-box {
          background: var(--accent-emerald-light);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
        }

        .uc-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #065f46;
          display: block;
        }

        .uc-txt {
          font-size: 0.8rem;
          font-weight: 700;
          color: #047857;
        }

        /* Payment Brands Row */
        .payment-brands-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pbrand-badge {
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card-large {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};
