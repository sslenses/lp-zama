import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ZAMA_FAST_PACKAGES, ZAMA_REGULER_PACKAGES } from '../data/packages';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageName?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedPackageName = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pkg, setPkg] = useState(selectedPackageName);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (selectedPackageName) {
      setPkg(selectedPackageName);
    } else {
      setPkg('Z-Fast 50 (50 Mbps) - Rp 135.000 / bln');
    }
  }, [selectedPackageName, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textMessage = `*FORMULIR BERLANGGANAN ZAMANET (zama.co.id)*%0A%0A` +
      `👤 *Nama*: ${encodeURIComponent(name)}%0A` +
      `📱 *No. WhatsApp*: ${encodeURIComponent(phone)}%0A` +
      `⚡ *Paket Pilihan*: ${encodeURIComponent(pkg)}%0A` +
      `📍 *Alamat Pemasangan*: ${encodeURIComponent(address)}%0A%0A` +
      `Mohon infokan ketersediaan ODP & jadwal survei/pemasangan. Terima kasih!`;

    const waUrl = `https://wa.me/6285888815556?text=${textMessage}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h2>Formulir Pemasangan Zamanet</h2>
            <p>Isi formulir singkat di bawah ini. Tim kami akan menghubungi Anda via WhatsApp untuk jadwal instalasi.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="reg-name">Nama Lengkap *</label>
            <input
              id="reg-name"
              type="text"
              placeholder="Masukkan nama sesuai KTP"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="modal-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-phone">Nomor WhatsApp Aktif *</label>
            <input
              id="reg-phone"
              type="tel"
              placeholder="Contoh: 081234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="modal-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-pkg">Pilihan Paket Internet *</label>
            <select
              id="reg-pkg"
              value={pkg}
              onChange={(e) => setPkg(e.target.value)}
              required
              className="modal-select"
            >
              <optgroup label="⚡ Paket Zama Fast (Promo Value)">
                {ZAMA_FAST_PACKAGES.map((p) => (
                  <option key={p.id} value={`${p.name} (${p.speed} Mbps) - Rp ${p.price.toLocaleString('id-ID')} / bln`}>
                    {p.name} ({p.speed} Mbps) - Rp {p.price.toLocaleString('id-ID')} / bln
                  </option>
                ))}
              </optgroup>
              <optgroup label="🏢 Paket Zama Reguler">
                {ZAMA_REGULER_PACKAGES.map((p) => (
                  <option key={p.id} value={`${p.name} (${p.speed} Mbps) - Rp ${p.price.toLocaleString('id-ID')} / bln`}>
                    {p.name} ({p.speed} Mbps) - Rp {p.price.toLocaleString('id-ID')} / bln
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reg-address">Alamat Lengkap Pemasangan *</label>
            <textarea
              id="reg-address"
              rows={3}
              placeholder="Tuliskan nama jalan, RT/RW, desa/kelurahan, kecamatan, & patokan rumah"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="modal-textarea"
            ></textarea>
          </div>

          <div className="modal-features-row">
            <span><CheckCircle2 size={14} className="c-icon" /> Gratis Router</span>
            <span><CheckCircle2 size={14} className="c-icon" /> Pemasangan 1x24 Jam</span>
            <span><CheckCircle2 size={14} className="c-icon" /> Direct WhatsApp CS</span>
          </div>

          <button type="submit" className="btn btn-primary btn-full btn-lg">
            <Send size={18} />
            <span>Kirim Pengajuan Berlangganan</span>
          </button>
        </form>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(4, 7, 16, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          max-width: 560px;
          width: 100%;
          padding: 36px;
          position: relative;
          background: rgba(14, 20, 38, 0.95);
          border-color: rgba(0, 242, 254, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 0, 127, 0.2);
          border-color: var(--primary-pink);
        }

        .modal-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 28px;
        }

        .modal-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--primary-cyan), var(--primary-blue));
          color: #040814;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-header h2 {
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .modal-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .modal-input, .modal-select, .modal-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          background: rgba(6, 9, 19, 0.9);
          border: 1px solid var(--border-glass);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.25s ease;
        }

        .modal-input:focus, .modal-select:focus, .modal-textarea:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
        }

        .modal-select optgroup {
          background: #0d1224;
          color: var(--primary-cyan);
          font-weight: 700;
        }

        .modal-select option {
          background: #0d1224;
          color: #ffffff;
        }

        .modal-features-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 8px 0;
        }

        .c-icon {
          color: var(--primary-cyan);
          margin-right: 4px;
        }
      `}</style>
    </div>
  );
};
