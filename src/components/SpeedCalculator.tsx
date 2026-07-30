import React, { useState } from 'react';
import { Calculator, Smartphone, Tv, Laptop, Gamepad2, CreditCard, Sparkles, Users, Briefcase, Home, Building } from 'lucide-react';

interface SpeedCalculatorProps {
  onOpenModal: (packageName: string) => void;
}

export const SpeedCalculator: React.FC<SpeedCalculatorProps> = ({ onOpenModal }) => {
  const [deviceCount, setDeviceCount] = useState<number>(5);
  const [heavyUsage, setHeavyUsage] = useState<boolean>(true);

  // Preset Selection
  const applyPreset = (devices: number, heavy: boolean) => {
    setDeviceCount(devices);
    setHeavyUsage(heavy);
  };

  const getRecommendation = () => {
    if (deviceCount <= 4 && !heavyUsage) {
      return {
        name: 'Z-Fast 50 (50 Mbps)',
        price: 'Rp 135.000 / bln',
        desc: 'Sangat pas untuk penggunaan harian rumah tangga, browsing, & streaming HD.',
        tier: 'fast'
      };
    } else if (deviceCount <= 8) {
      return {
        name: 'Z-Fast 100 (100 Mbps)',
        price: 'Rp 165.000 / bln',
        desc: 'Rekomendasi Terbaik! Kecepatan monster untuk gaming 4K, WFH simultan, & 5-10 HP.',
        tier: 'fast'
      };
    } else if (deviceCount <= 12) {
      return {
        name: 'Z-Reguler 100 (100 Mbps)',
        price: 'Rp 380.000 / bln',
        desc: 'Cocok untuk kantor skala menengah atau rumah keluarga besar dengan banyak gadget.',
        tier: 'reguler'
      };
    } else {
      return {
        name: 'Z-Reguler 200 (200 Mbps)',
        price: 'Rp 580.000 / bln',
        desc: 'Bandwidth raksasa bebas lag untuk kantor usaha, co-working, atau kos-kosan.',
        tier: 'reguler'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="calculator" className="calc-section">
      <div className="container">
        <div className="calc-card bento-card glass-card">
          <div className="calc-header">
            <div className="calc-icon-badge">
              <Calculator size={24} />
            </div>
            <div>
              <span className="tag">KALKULATOR BANDWIDTH</span>
              <h2>Hitung Kebutuhan Mbps Anda.</h2>
              <p>Pilih profil cepat atau geser slider jumlah perangkat untuk menemukan paket yang paling pas.</p>
            </div>
          </div>

          {/* Preset Buttons Bar */}
          <div className="presets-bar">
            <span className="preset-title">Pilih Profil Cepat:</span>
            <div className="preset-buttons-grid">
              <button className="preset-btn" onClick={() => applyPreset(3, false)}>
                <Home size={16} />
                <span>Rumah Kecil (1-3 HP)</span>
              </button>
              <button className="preset-btn" onClick={() => applyPreset(6, true)}>
                <Briefcase size={16} />
                <span>WFH & Streamer (4-7 Dev)</span>
              </button>
              <button className="preset-btn" onClick={() => applyPreset(9, true)}>
                <Users size={16} />
                <span>Keluarga Besar (8-10 Dev)</span>
              </button>
              <button className="preset-btn" onClick={() => applyPreset(15, true)}>
                <Building size={16} />
                <span>Kantor / Kos-kosan (12+ Dev)</span>
              </button>
            </div>
          </div>

          <div className="calc-body">
            <div className="calc-controls">
              {/* Slider Device Count */}
              <div className="control-group">
                <div className="control-label-row">
                  <label>Jumlah Perangkat Terhubung (HP, Laptop, Smart TV):</label>
                  <span className="control-val">{deviceCount} Perangkat</span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="20"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                  className="calc-slider"
                />

                <div className="device-icons">
                  <span className="d-icon"><Smartphone size={16} /> Smartphone</span>
                  <span className="d-icon"><Laptop size={16} /> Laptop/PC</span>
                  <span className="d-icon"><Tv size={16} /> Smart TV 4K</span>
                </div>
              </div>

              {/* Usage Type */}
              <div className="control-group">
                <label className="usage-label">Tipe Aktivitas Utama:</label>
                <div className="usage-toggle-grid">
                  <button
                    type="button"
                    className={`usage-btn ${!heavyUsage ? 'active' : ''}`}
                    onClick={() => setHeavyUsage(false)}
                  >
                    <span>Browsing, Medsos, & Zoom Basic</span>
                  </button>
                  <button
                    type="button"
                    className={`usage-btn ${heavyUsage ? 'active' : ''}`}
                    onClick={() => setHeavyUsage(true)}
                  >
                    <Gamepad2 size={18} />
                    <span>Gaming Online 4K, Live Stream, & Download Giga</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendation Display Box */}
            <div className="rec-box">
              <div className="rec-badge">
                <Sparkles size={14} /> Rekomendasi Paket Terbaik
              </div>
              <h3 className="rec-title">{rec.name}</h3>
              <div className="rec-price">{rec.price}</div>
              <p className="rec-desc">{rec.desc}</p>
              
              <button
                className="btn btn-primary btn-full"
                onClick={() => onOpenModal(`Rekomendasi Kalkulator: ${rec.name} - ${rec.price}`)}
              >
                <CreditCard size={18} />
                <span>Bayar & Langganan Paket Ini (Duitku)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calc-section {
          padding: 48px 0;
        }

        .calc-card {
          padding: 24px 32px;
          background: #ffffff;
        }

        .calc-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .calc-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--primary-blue-light);
          color: var(--primary-blue-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .calc-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .calc-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .presets-bar {
          background: var(--bg-subtle);
          border: 1px solid var(--border-light);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .preset-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .preset-buttons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .preset-btn {
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
          box-shadow: var(--shadow-sm);
        }

        .calc-body {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: center;
        }

        .control-group {
          margin-bottom: 16px;
        }

        .control-label-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-weight: 600;
          color: var(--text-main);
        }

        .control-val {
          color: var(--primary-blue-dark);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
        }

        .calc-slider {
          width: 100%;
          accent-color: var(--primary-blue);
          height: 8px;
          background: var(--border-light);
          border-radius: 4px;
          cursor: pointer;
        }

        .device-icons {
          display: flex;
          gap: 16px;
          margin-top: 12px;
        }

        .d-icon {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .usage-label {
          display: block;
          margin-bottom: 12px;
          font-weight: 600;
          color: var(--text-main);
        }

        .usage-toggle-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .usage-btn {
          padding: 14px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          background: var(--bg-main);
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .usage-btn.active {
          background: var(--primary-blue-light);
          border-color: var(--primary-blue);
          color: var(--primary-blue-dark);
        }

        /* Rec Box */
        .rec-box {
          padding: 32px;
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .rec-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--primary-blue-dark);
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .rec-title {
          font-size: 1.6rem;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .rec-price {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-blue);
          margin-bottom: 16px;
        }

        .rec-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        @media (max-width: 992px) {
          .preset-buttons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .calc-body {
            grid-template-columns: 1fr;
          }
          .calc-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};
