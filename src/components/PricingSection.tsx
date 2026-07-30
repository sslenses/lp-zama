import React, { useState } from 'react';
import { ZAMA_FAST_PACKAGES, ZAMA_REGULER_PACKAGES, type PackageItem } from '../data/packages';
import { Zap, Check, ShieldCheck, Sparkles, Building2, CreditCard } from 'lucide-react';

interface PricingSectionProps {
  onOpenModal: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'fast' | 'reguler'>('fast');

  const activePackages = activeTab === 'fast' ? ZAMA_FAST_PACKAGES : ZAMA_REGULER_PACKAGES;

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount).replace('Rp', 'Rp ');
  };

  return (
    <section id="pricing" className="apple-pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">PILIHAN PAKET</span>
          <h2>Sederhana. Transparan. Pas untuk Anda.</h2>
          <p>
            Pilih paket promo hemat harian hingga bandwidth super cepat untuk usaha Anda. Bebas biaya tersembunyi.
          </p>
        </div>

        {/* Apple Segmented Switcher */}
        <div className="apple-segmented-container">
          <div className="apple-segmented-control">
            <button
              className={`segmented-btn ${activeTab === 'fast' ? 'active' : ''}`}
              onClick={() => setActiveTab('fast')}
            >
              <Zap size={16} />
              <span>Zama Fast (Promo)</span>
            </button>

            <button
              className={`segmented-btn ${activeTab === 'reguler' ? 'active' : ''}`}
              onClick={() => setActiveTab('reguler')}
            >
              <Building2 size={16} />
              <span>Zama Reguler</span>
            </button>
          </div>
        </div>

        {/* Tab Notice Banner */}
        <div className="apple-banner-box">
          {activeTab === 'fast' ? (
            <div className="banner-inner fast-banner">
              <Sparkles size={18} />
              <span><strong>Paket Zama Fast:</strong> Promo super value bandwidth jumbo untuk pengguna rumahan & WFH!</span>
            </div>
          ) : (
            <div className="banner-inner reguler-banner">
              <ShieldCheck size={18} />
              <span><strong>Paket Zama Reguler:</strong> Pilihan komplit 30 Mbps s/d 200 Mbps (Harga net sudah termasuk PPN 11%).</span>
            </div>
          )}
        </div>

        {/* Apple Product Pricing Grid */}
        <div className={`apple-pricing-grid ${activeTab === 'fast' ? 'grid-two' : 'grid-three'}`}>
          {activePackages.map((pkg: PackageItem) => (
            <div
              key={pkg.id}
              className={`apple-pricing-card glass-card ${pkg.isPopular ? 'popular-card' : ''}`}
            >
              {pkg.badge && (
                <div className="apple-card-badge">
                  {pkg.badge}
                </div>
              )}

              <div className="card-head">
                <h3 className="pkg-title">{pkg.name}</h3>
                <div className="speed-tag">
                  <span className="speed-val">{pkg.speed}</span>
                  <span className="speed-unit">Mbps</span>
                </div>
              </div>

              <div className="price-row">
                <span className="price-val">{formatRupiah(pkg.price)}</span>
                <span className="price-unit">/bulan</span>
              </div>

              <div className="inst-row">
                {pkg.installationFee === 0 ? (
                  <span className="free-inst" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={16} />
                    Gratis Biaya Pasang (Rp 0)
                  </span>
                ) : (
                  <span className="paid-inst">Biaya Pasang: Rp {pkg.installationFee?.toLocaleString('id-ID')}</span>
                )}
              </div>

              <div className="card-divider"></div>

              <ul className="apple-feat-list">
                {pkg.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn btn-full ${pkg.isPopular || pkg.type === 'fast' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => onOpenModal(`${pkg.name} (${pkg.speed} Mbps) - ${formatRupiah(pkg.price)}`)}
              >
                <CreditCard size={18} />
                <span>Berlangganan Paket Ini</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .apple-pricing-section {
          height: 100vh;
          box-sizing: border-box;
          padding-top: 76px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .apple-segmented-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .apple-segmented-control {
          display: inline-flex;
          background: #e8e8ed;
          padding: 4px;
          border-radius: var(--radius-full);
          gap: 4px;
        }

        .segmented-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          color: var(--text-main);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .segmented-btn.active {
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          color: var(--apple-blue);
        }

        .apple-banner-box {
          max-width: 740px;
          margin: 0 auto 20px;
        }

        .banner-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .fast-banner {
          background: var(--apple-blue-light);
          color: var(--apple-blue-dark);
          border: 1px solid rgba(0, 113, 227, 0.2);
        }

        .reguler-banner {
          background: var(--accent-emerald-light);
          color: #065f46;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .apple-pricing-grid {
          display: grid;
          gap: 20px;
        }

        .grid-two {
          grid-template-columns: repeat(2, minmax(0, 440px));
          justify-content: center;
        }

        .grid-three {
          grid-template-columns: repeat(3, 1fr);
        }

        .apple-pricing-card {
          padding: 22px 24px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-apple);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .popular-card {
          border: 2px solid var(--apple-blue);
        }

        .apple-card-badge {
          position: absolute;
          top: -14px;
          right: 24px;
          background: var(--apple-blue);
          color: #ffffff;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 16px;
        }

        .pkg-title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .speed-tag {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .speed-val {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--apple-blue);
          line-height: 1;
        }

        .speed-unit {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 8px;
        }

        .price-val {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
        }

        .price-unit {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .inst-row {
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .free-inst { color: #059669; font-weight: 700; }
        .paid-inst { color: var(--text-muted); }

        .card-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 24px;
        }

        .apple-feat-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .apple-feat-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .check-icon {
          color: var(--apple-blue);
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .grid-two, .grid-three {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};
