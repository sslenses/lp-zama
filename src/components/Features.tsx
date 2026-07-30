import React from 'react';
import { Cpu, Repeat, Zap, CheckCircle2, Laptop, Gamepad2 } from 'lucide-react';
import lifestyleImg from '../assets/fiber_lifestyle_home.jpg';
import gamingImg from '../assets/fiber_gaming_latency.jpg';

export const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Didesain Khusus untuk Kebutuhan Digital Masa Kini.</h2>
          <p>
            Teknologi serat optik murni 100% langsung ke rumah Anda tanpa hambatan FUP atau kompromi kecepatan.
          </p>
        </div>

        {/* Google Fiber Style 3 Benefit Cards */}
        <div className="bento-grid">
          {/* Card 1: 100% Fiber Direct */}
          <div className="bento-card glass-card">
            <div>
              <div className="bento-badge badge-blue">
                <Cpu size={14} /> 100% Fiber Optic Direct
              </div>
              <h3>Kabel Optik Murni Sampai ke Router</h3>
              <p>
                Kabel serat optik ditarik khusus langsung hingga ke modem router rumah Anda. Tahan gangguan cuaca hujan & petir 24/7.
              </p>
            </div>

            <div className="fiber-graphic-box">
              <div className="fnode fn-1">ODP Tiang</div>
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
                <Repeat size={14} /> Rasio Simetris 1:1
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
              <span className="uc-num">∞</span>
              <span className="uc-txt">Bebas Pakai Sepuasnya</span>
            </div>
          </div>
        </div>

        {/* Google Fiber 2-Column Split Feature Story Block 1: Lifestyle & WFH */}
        <div className="story-block story-block-1">
          <div className="story-image-wrap">
            <img src={lifestyleImg} alt="Koneksi Internet Rumah Zamanet" className="story-img" />
            <div className="story-badge-float">
              <Laptop size={18} className="sb-icon" />
              <span>Stabil untuk 10+ Perangkat</span>
            </div>
          </div>
          <div className="story-content">
            <span className="story-tag">INTERNET KELUARGA & WFH</span>
            <h3>Bekerja & Belajar Tanpa Henti di Rumah</h3>
            <p>
              Dengan rasio upload-download simetris 1:1, meeting Zoom berjam-jam, upload berkas kerja ukuran gigabyte, dan anak-anak sekolah online berjalan bersamaan tanpa lag.
            </p>
            <ul className="story-bullets">
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>Wi-Fi Router 6E / Multi-Gig gratis dipinjamkan</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>Garansi latency rendah untuk panggilan suara & video HD</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>Dukungan teknisi lokal Jogja respons cepat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Fiber 2-Column Split Feature Story Block 2: Low Latency Gaming */}
        <div className="story-block story-block-2">
          <div className="story-content">
            <span className="story-tag">PERFORMA GAMING & STREAMING</span>
            <h3>Ping Rendah Responsif untuk Gamers</h3>
            <p>
              Dapatkan keuntungan respon ping ultra-rendah untuk game competitive online seperti Valorant, Dota 2, dan Mobile Legends. Siarkan live stream 4K ke Twitch/YouTube tanpa lag spike.
            </p>
            <ul className="story-bullets">
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>Jalur langsung (Direct Peeling) ke IX & CDN Server Populer</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>Bebas lag spike di jam-jam sibuk malam hari</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-check" />
                <span>0% FUP — Download game baru puluhan GB tanpa sisa kuota</span>
              </li>
            </ul>
          </div>
          <div className="story-image-wrap">
            <img src={gamingImg} alt="Gaming & Live Streaming High Speed Fiber" className="story-img" />
            <div className="story-badge-float">
              <Gamepad2 size={18} className="sb-icon" />
              <span>Ping 5ms Latency Rendah</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 64px 0;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .bento-card {
          padding: 24px;
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
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 10px;
          width: fit-content;
        }

        .badge-blue { background: var(--gf-blue-light); color: var(--gf-blue-dark); }
        .badge-indigo { background: #eef2ff; color: #3730a3; }
        .badge-emerald { background: var(--gf-green-light); color: #065f46; }

        .bento-card h3 {
          font-size: 1.15rem;
          font-weight: 600;
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
          background: var(--bg-subtle);
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
          background: linear-gradient(90deg, transparent, var(--gf-blue), transparent);
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
          background: var(--bg-subtle);
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
          font-weight: 700;
          color: var(--gf-blue-dark);
        }

        .sc-divider {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--gf-green);
        }

        /* Unlimited Counter Box */
        .unlimited-counter-box {
          background: var(--gf-green-light);
          border: 1px solid rgba(52, 168, 83, 0.2);
          border-radius: var(--radius-md);
          padding: 8px 12px;
          text-align: center;
        }

        .uc-num {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #065f46;
          display: block;
          line-height: 1;
        }

        .uc-txt {
          font-size: 0.72rem;
          font-weight: 700;
          color: #047857;
        }

        /* 2-Column Split Feature Story Blocks (Google Fiber Signature) */
        .story-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 56px;
        }

        .story-block:last-child {
          margin-bottom: 0;
        }

        .story-image-wrap {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-2);
          border: 1px solid var(--border-light);
          aspect-ratio: 4 / 3;
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .story-badge-float {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-light);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-main);
          box-shadow: var(--shadow-1);
        }

        .sb-icon { color: var(--gf-blue); }

        .story-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gf-blue);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 8px;
        }

        .story-content h3 {
          font-size: 1.85rem;
          font-weight: 600;
          line-height: 1.25;
          margin-bottom: 14px;
          color: var(--text-main);
        }

        .story-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .story-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .story-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .bullet-check {
          color: var(--gf-green);
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .story-block {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .story-block-2 .story-image-wrap {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};
