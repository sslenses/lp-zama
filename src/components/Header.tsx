import React, { useState, useEffect } from 'react';
import { Wifi, Menu, X, CreditCard, Zap } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (packageName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`apple-header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Banner Ribbon */}
      <div className="apple-top-ribbon">
        <div className="container ribbon-content">
          <Zap size={14} className="ribbon-icon" />
          <span><strong>Zamanet Fast Promo:</strong> 50 Mbps Rp 135.000 & 100 Mbps Rp 165.000. Duitku Payment Gateway Verified.</span>
        </div>
      </div>

      <div className="container nav-wrapper">
        <a href="#" className="apple-logo">
          <div className="logo-badge">
            <Wifi size={18} />
          </div>
          <span className="logo-text">Zamanet</span>
        </a>

        <nav className={`apple-nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Spesifikasi</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Paket & Harga</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Kalkulator Mbps</a>
          <a href="#coverage" onClick={() => setMobileMenuOpen(false)}>Cek Area</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Dukungan</a>
        </nav>

        <div className="header-cta-group">
          <button className="btn btn-primary btn-apple-nav" onClick={() => onOpenModal()}>
            <CreditCard size={16} />
            <span>Berlangganan</span>
          </button>

          <button 
            className="apple-mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <style>{`
        .apple-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .apple-top-ribbon {
          background: #1d1d1f;
          color: #f5f5f7;
          font-size: 0.78rem;
          padding: 6px 0;
          text-align: center;
        }

        .ribbon-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .ribbon-icon {
          color: #2997ff;
          flex-shrink: 0;
        }

        .ribbon-content strong {
          color: #2997ff;
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 52px;
        }

        .apple-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text-main);
        }

        .logo-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--apple-blue);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
        }

        .apple-nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .apple-nav-links a {
          color: var(--text-main);
          opacity: 0.8;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }

        .apple-nav-links a:hover {
          opacity: 1;
          color: var(--apple-blue);
        }

        .btn-apple-nav {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .apple-mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        @media (max-width: 868px) {
          .apple-top-ribbon { font-size: 0.72rem; }
          .apple-nav-links {
            position: fixed;
            top: 76px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 30px;
            gap: 24px;
            border-bottom: 1px solid var(--border-light);
            transform: translateY(-150%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .apple-nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .apple-mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
