import React, { useState, useEffect } from 'react';
import { Wifi, Menu, X, CreditCard } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (packageName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <div className="logo-icon-box">
            <Wifi className="logo-wifi" size={22} />
          </div>
          <div className="logo-text-group">
            <span className="logo-brand">ZAMANET</span>
            <span className="logo-domain">zama.co.id</span>
          </div>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Fitur</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Paket Internet</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Kalkulator Mbps</a>
          <a href="#coverage" onClick={() => setMobileMenuOpen(false)}>Cek Area</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary btn-nav" onClick={() => onOpenModal()}>
            <CreditCard size={18} />
            <span>Bayar & Langganan</span>
          </button>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .header-scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-light);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-brand {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: var(--text-main);
          line-height: 1;
        }

        .logo-domain {
          font-size: 0.75rem;
          color: var(--primary-blue);
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-menu a {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .nav-menu a:hover {
          color: var(--primary-blue);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 30px;
            gap: 20px;
            border-bottom: 1px solid var(--border-light);
            transform: translateY(-150%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-toggle {
            display: block;
          }

          .btn-nav {
            padding: 10px 18px;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </header>
  );
};
