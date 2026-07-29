import React from 'react';
import { Wifi, Phone, Mail, MapPin, CreditCard, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenModal: (packageName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="logo-icon-box">
                <Wifi size={22} />
              </div>
              <span className="logo-brand">ZAMANET</span>
            </a>
            <p className="footer-desc">
              Koneksi internet serat optik (Fiber Optic) masa depan berkecepatan tinggi, simetris, dan 100% unlimited dengan pembayaran mudah via Duitku Payment Gateway.
            </p>
            <div className="footer-contact-items">
              <div className="c-item">
                <Mail size={16} className="c-icon" />
                <span>bantuan@zama.co.id</span>
              </div>
              <div className="c-item">
                <Phone size={16} className="c-icon" />
                <span>+62 858-8881-5556</span>
              </div>
              <div className="c-item">
                <MapPin size={16} className="c-icon" />
                <span>Gubug, Argosari, Kec. Sedayu, Kabupaten Bantul, D.I. Yogyakarta 55752</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Layanan Internet</h4>
            <ul>
              <li><a href="#pricing">Paket Z-Fast 50 (50 Mbps)</a></li>
              <li><a href="#pricing">Paket Z-Fast 100 (100 Mbps)</a></li>
              <li><a href="#pricing">Paket Z-Reguler (30 - 200 Mbps)</a></li>
              <li><a href="#calculator">Kalkulator Kecepatan</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Informasi & Bantuan</h4>
            <ul>
              <li><a href="#features">Keunggulan Fiber Optic</a></li>
              <li><a href="#coverage">Area Coverage Yogyakarta</a></li>
              <li><a href="#faq">FAQ & Pembayaran Duitku</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Formulir Pembayaran Duitku</a></li>
            </ul>
          </div>

          {/* Duitku Payment Gateway Info Card */}
          <div className="footer-cta-card glass-card">
            <CreditCard size={28} className="cta-icon" />
            <h3>Duitku Payment Gateway</h3>
            <p>Mendukung pembayaran Virtual Account BCA, Mandiri, BRI, BNI, QRIS, E-Wallet, & Kartu Kredit.</p>
            <button
              onClick={() => onOpenModal()}
              className="btn btn-primary btn-full"
            >
              <span>Bayar & Langganan Sekarang</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Zamanet (zama.co.id). All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#">Syarat & Ketentuan Duitku</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          padding: 80px 0 30px;
          position: relative;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .logo-brand {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .footer-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .c-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .c-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .footer-links-col h4 {
          font-size: 1.1rem;
          color: var(--text-main);
          margin-bottom: 20px;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-col a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-links-col a:hover {
          color: var(--primary-blue);
        }

        .footer-cta-card {
          padding: 24px;
          background: var(--bg-main);
          border-color: var(--border-light);
        }

        .cta-icon {
          color: var(--primary-blue);
          margin-bottom: 12px;
        }

        .footer-cta-card h3 {
          font-size: 1.15rem;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .footer-cta-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid var(--border-light);
          font-size: 0.88rem;
          color: var(--text-dim);
        }

        .footer-legal {
          display: flex;
          gap: 12px;
        }

        .footer-legal a {
          color: var(--text-dim);
          text-decoration: none;
        }

        .footer-legal a:hover {
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
