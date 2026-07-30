import React from 'react';
import { Cpu, Repeat, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">KEUNGGULAN UTAMA</span>
          <h2>Dirancang untuk Performa.</h2>
          <p>
            Teknologi serat optik murni dipadukan dengan kebebasan internet tanpa batasan FUP.
          </p>
        </div>

        {/* Apple 3-Column Equal Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: 100% Fiber Direct */}
          <div className="bento-card glass-card">
            <div>
              <div className="bento-badge badge-blue">
                <Cpu size={14} /> 100% Fiber Optic Direct
              </div>
              <h3>Serat Optik Murni Langsung ke Rumah</h3>
              <p>
                Kabel serat optik ditarik khusus langsung hingga ke modem router rumah Anda. Tahan gangguan cuaca hujan & petir 24/7.
              </p>
            </div>

            <div className="fiber-graphic-box">
              <div className="fnode fn-1">ODP Tiang Utama</div>
              <div className="fline">
                <span className="fline-pulse"></span>
              </div>
              <div className="fnode fn-2">Modem Router</div>
            </div>
          </div>

          {/* Card 2: 1:1 Speed Ratio */}
          <div className="bento-card glass-card">
            <div>
              <div className="bento-badge badge-indigo">
                <Repeat size={14} /> Kecepatan Simetris 1:1
              </div>
              <h3>Upload & Download Sama Kencangnya</h3>
              <p>
                Tidak ada throttling unggah file! Live streaming 4K, video call HD, dan upload repository project berjalan instan tanpa buffer.
              </p>
            </div>

            <div className="speed-comparison-box">
              <div className="sc-item">
                <span className="sc-label">Download</span>
                <span className="sc-val">100 Mbps</span>
              </div>
              <div className="sc-divider">=</div>
              <div className="sc-item">
                <span className="sc-label">Upload</span>
                <span className="sc-val">100 Mbps</span>
              </div>
            </div>
          </div>

          {/* Card 3: Real Unlimited 0% FUP */}
          <div className="bento-card glass-card">
            <div>
              <div className="bento-badge badge-emerald">
                <Zap size={14} /> Real Unlimited (0% FUP)
              </div>
              <h3>Bebas Akses Tanpa Batasan Kuota</h3>
              <p>
                Unduh file game 100GB+ sepuasnya tanpa khawatir kecepatan diturunkan sepihak. 100% Real Unlimited.
              </p>
            </div>

            <div className="unlimited-counter-box">
              <span className="uc-num">∞ TB</span>
              <span className="uc-txt">Bebas Pakai Sepuasnya</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          height: 100vh;
          box-sizing: border-box;
          padding-top: 76px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .bento-card {
          padding: 20px 22px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: var(--radius-lg);
        }

        .bento-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 10px;
          width: fit-content;
        }

        .badge-blue { background: var(--apple-blue-light); color: var(--apple-blue-dark); }
        .badge-indigo { background: #eef2ff; color: #3730a3; }
        .badge-emerald { background: var(--accent-emerald-light); color: #065f46; }

        .bento-card h3 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--text-main);
          line-height: 1.25;
        }

        .bento-card p {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 14px;
        }

        /* Fiber Graphic Box */
        .fiber-graphic-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .fnode {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-main);
          background: #ffffff;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          white-space: nowrap;
        }

        .fline {
          flex-grow: 1;
          height: 3px;
          background: var(--border-light);
          margin: 0 8px;
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
          background: linear-gradient(90deg, transparent, var(--apple-blue), transparent);
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
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }

        .sc-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc-label {
          font-size: 0.65rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .sc-val {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
          color: var(--apple-blue-dark);
        }

        .sc-divider {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-emerald);
        }

        /* Unlimited Counter Box */
        .unlimited-counter-box {
          background: var(--accent-emerald-light);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-md);
          padding: 8px 12px;
          text-align: center;
        }

        .uc-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #065f46;
          display: block;
          line-height: 1;
        }

        .uc-txt {
          font-size: 0.72rem;
          font-weight: 700;
          color: #047857;
        }

        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
