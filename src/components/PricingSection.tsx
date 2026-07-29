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
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Pilihan Paket & Harga</span>
          <h2>Paket Internet Zamanet</h2>
          <p>
            Pilihlah paket internet sesuai kebutuhan tempat tinggal, usaha, atau kantor Anda dengan opsi pembayaran aman & otomatis via Duitku.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="tab-container">
          <div className="tab-switcher">
            <button
              className={`tab-btn ${activeTab === 'fast' ? 'active fast-active' : ''}`}
              onClick={() => setActiveTab('fast')}
            >
              <Zap size={18} />
              <span>⚡ Paket Zama Fast</span>
              <span className="tab-badge">Promo Value</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'reguler' ? 'active reguler-active' : ''}`}
              onClick={() => setActiveTab('reguler')}
            >
              <Building2 size={18} />
              <span>🏢 Paket Zama Reguler</span>
            </button>
          </div>
        </div>

        {/* Active Tab Notice */}
        <div className="tab-banner">
          {activeTab === 'fast' ? (
            <div className="banner-box banner-fast">
              <Sparkles size={20} className="banner-icon" />
              <span><strong>Paket Zama Fast:</strong> Paket promo super value bandwidth jumbo untuk pengguna rumahan & WFH modern!</span>
            </div>
          ) : (
            <div className="banner-box banner-reguler">
              <ShieldCheck size={20} className="banner-icon" />
              <span><strong>Paket Zama Reguler:</strong> Pilihan variatif 30 Mbps s/d 200 Mbps (Harga sudah termasuk PPN 11%).</span>
            </div>
          )}
        </div>

        {/* Packages Grid */}
        <div className={`pricing-grid ${activeTab === 'fast' ? 'grid-fast' : 'grid-reguler'}`}>
          {activePackages.map((pkg: PackageItem) => (
            <div
              key={pkg.id}
              className={`pricing-card glass-card ${pkg.isPopular ? 'popular-card' : ''}`}
            >
              {pkg.badge && (
                <div className={`pkg-badge ${pkg.type === 'fast' ? 'badge-fast' : 'badge-reguler'}`}>
                  {pkg.badge}
                </div>
              )}

              <div className="pkg-header">
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-speed-display">
                  <span className="speed-number">{pkg.speed}</span>
                  <span className="speed-unit">Mbps</span>
                </div>
              </div>

              <div className="pkg-price-box">
                <div className="price-amount">{formatRupiah(pkg.price)}</div>
                <span className="price-period">/ bulan</span>
              </div>

              <div className="installation-tag">
                {pkg.installationFee === 0 ? (
                  <span className="inst-free">✓ Biaya Instalasi Gratis (Rp 0)</span>
                ) : (
                  <span className="inst-paid">Biaya Instalasi: Rp {pkg.installationFee?.toLocaleString('id-ID')}</span>
                )}
              </div>

              <div className="divider"></div>

              <ul className="pkg-features-list">
                {pkg.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={16} className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn btn-full ${pkg.isPopular || pkg.type === 'fast' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => onOpenModal(`${pkg.name} (${pkg.speed} Mbps) - ${formatRupiah(pkg.price)}`)}
              >
                <CreditCard size={18} />
                <span>Bayar & Langganan ({pkg.name})</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-section {
          padding: 80px 0 100px;
          position: relative;
        }

        /* Tab Switcher */
        .tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .tab-switcher {
          display: inline-flex;
          padding: 6px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          border-radius: var(--radius-full);
          gap: 8px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active.fast-active {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(2, 132, 199, 0.35);
        }

        .tab-btn.active.reguler-active {
          background: linear-gradient(135deg, var(--accent-indigo) 0%, #3730a3 100%);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);
        }

        .tab-badge {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.25);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        /* Banner */
        .tab-banner {
          max-width: 800px;
          margin: 0 auto 40px;
        }

        .banner-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          text-align: center;
        }

        .banner-fast {
          background: var(--primary-blue-light);
          border: 1px solid rgba(2, 132, 199, 0.2);
          color: var(--primary-blue-dark);
        }

        .banner-reguler {
          background: var(--accent-indigo-light);
          border: 1px solid rgba(79, 70, 229, 0.2);
          color: #3730a3;
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          gap: 30px;
        }

        .grid-fast {
          grid-template-columns: repeat(2, minmax(0, 480px));
          justify-content: center;
        }

        .grid-reguler {
          grid-template-columns: repeat(3, 1fr);
        }

        .pricing-card {
          padding: 36px 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        .popular-card {
          border-color: var(--primary-blue);
          box-shadow: 0 15px 35px rgba(2, 132, 199, 0.15);
        }

        .pkg-badge {
          position: absolute;
          top: -14px;
          right: 24px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-fast {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark));
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }

        .badge-reguler {
          background: linear-gradient(135deg, var(--accent-indigo), #3730a3);
          color: #ffffff;
        }

        .pkg-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 20px;
        }

        .pkg-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .pkg-speed-display {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .speed-number {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-blue);
          line-height: 1;
        }

        .speed-unit {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .pkg-price-box {
          margin-bottom: 12px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .price-amount {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .price-period {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .installation-tag {
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .inst-free {
          color: #059669;
          font-weight: 700;
        }

        .inst-paid {
          color: var(--text-muted);
        }

        .divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 24px;
        }

        .pkg-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .pkg-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .feature-check {
          color: var(--primary-blue);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .grid-fast, .grid-reguler {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};
