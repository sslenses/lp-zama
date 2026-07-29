import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, AlertCircle, CreditCard, Navigation, Radio } from 'lucide-react';

interface CoverageCheckerProps {
  onOpenModal: (packageName?: string) => void;
}

export const CoverageChecker: React.FC<CoverageCheckerProps> = ({ onOpenModal }) => {
  const [selectedArea, setSelectedArea] = useState<string>('Sedayu, Bantul');
  const [addressInput, setAddressInput] = useState<string>('');
  const [checkResult, setCheckResult] = useState<boolean | null>(null);

  const areasList = [
    'Sedayu (Argosari, Argomulyo, Argodadi, Argorejo)',
    'Gamping & Ambarketawang',
    'Kasihan & Bangunjiwo',
    'Pajangan & Guwosari',
    'Kecamatan Bantul Kota',
    'Depok & Sleman Selatan',
    'Kodya Yogyakarta & Sekitarnya'
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressInput.trim()) return;
    setCheckResult(true);
  };

  return (
    <section id="coverage" className="coverage-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Jangkauan Jaringan</span>
          <h2>Area Coverage Fiber Zamanet</h2>
          <p>
            Jaringan Fiber Optic Zamanet telah terpasang luas di Kabupaten Bantul, Sedayu, Sleman, & Kota Yogyakarta.
          </p>
        </div>

        <div className="coverage-grid">
          {/* Interactive Checker Form */}
          <div className="checker-card bento-card glass-card">
            <h3><MapPin size={22} className="map-icon" /> Cek Ketersediaan ODP Lokasi Anda</h3>
            <p>Masukkan alamat lengkap rumah Anda untuk verifikasi ketersediaan tiang ODP Zamanet terdekat secara instan.</p>

            <form onSubmit={handleCheck} className="checker-form">
              <div className="form-field">
                <label>Pilih Wilayah / Kecamatan:</label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="custom-select"
                >
                  {areasList.map((area, idx) => (
                    <option key={idx} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Detail Alamat / Dusun / RT-RW:</label>
                <input
                  type="text"
                  placeholder="Contoh: Dusun Gubug, RT 02 / RW 05, Argosari"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  className="custom-input"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                <Search size={18} />
                <span>Verifikasi Alamat Sekarang</span>
              </button>
            </form>

            {checkResult && (
              <div className="result-alert">
                <CheckCircle size={24} className="result-icon-success" />
                <div>
                  <strong>Area Tercover Jaringan Fiber Optic!</strong>
                  <p>ODP Zamanet <em>"{addressInput}" ({selectedArea})</em> aktif & siap terpasang.</p>
                  <button 
                    className="btn btn-secondary btn-sm mt-2"
                    onClick={() => onOpenModal(`Pendaftaran Lokasi: ${addressInput} (${selectedArea})`)}
                  >
                    <CreditCard size={16} />
                    <span>Lanjutkan Pembayaran Duitku</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Visual Interactive Coverage Map Card */}
          <div className="area-list-card bento-card glass-card">
            <div className="map-header">
              <Radio size={20} className="radio-icon" />
              <span>Simulasi Peta Jaringan ODP Zamanet</span>
            </div>

            <div className="map-visual-box">
              <div className="map-pin pin-1">
                <Navigation size={14} className="pin-icon" />
                <span className="pin-label">ODP Sedayu</span>
              </div>
              <div className="map-pin pin-2">
                <Navigation size={14} className="pin-icon" />
                <span className="pin-label">ODP Kasihan</span>
              </div>
              <div className="map-pin pin-3">
                <Navigation size={14} className="pin-icon" />
                <span className="pin-label">ODP Gamping</span>
              </div>
              <div className="map-pin pin-4">
                <Navigation size={14} className="pin-icon" />
                <span className="pin-label">ODP Bantul</span>
              </div>
              <div className="map-coverage-ring"></div>
            </div>

            <div className="area-note">
              <AlertCircle size={18} className="note-icon" />
              <span>Alamat Anda belum tercantum di peta? Hubungi tim teknisi kami via WhatsApp untuk pengecekan penarikan tiang terdekat.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .coverage-section {
          padding: 80px 0 100px;
        }

        .coverage-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
        }

        .checker-card, .area-list-card {
          padding: 36px;
          background: #ffffff;
        }

        .checker-card h3 {
          font-size: 1.45rem;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-main);
        }

        .map-icon {
          color: var(--primary-blue);
        }

        .checker-card p {
          color: var(--text-muted);
          margin-bottom: 24px;
          font-size: 0.95rem;
        }

        .checker-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-field label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .custom-select, .custom-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .custom-select:focus, .custom-input:focus {
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .result-alert {
          margin-top: 24px;
          padding: 20px;
          display: flex;
          gap: 14px;
          border-radius: var(--radius-md);
          background: var(--accent-emerald-light);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .result-icon-success {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .result-alert strong {
          color: #065f46;
          display: block;
          font-size: 1.05rem;
        }

        .result-alert p {
          margin-bottom: 12px;
          color: var(--text-main);
        }

        .btn-sm {
          padding: 10px 20px;
          font-size: 0.88rem;
        }

        .map-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: var(--text-main);
        }

        .radio-icon {
          color: var(--primary-blue);
        }

        .map-visual-box {
          height: 240px;
          background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .map-pin {
          position: absolute;
          background: #ffffff;
          border: 1px solid var(--primary-blue);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary-blue-dark);
          box-shadow: var(--shadow-sm);
        }

        .pin-icon { color: var(--primary-blue); }

        .pin-1 { top: 25%; left: 15%; }
        .pin-2 { top: 60%; left: 35%; }
        .pin-3 { top: 20%; right: 20%; }
        .pin-4 { bottom: 20%; right: 25%; }

        .map-coverage-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 2px dashed rgba(2, 132, 199, 0.4);
          animation: spin 20s linear infinite;
        }

        .area-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 16px;
          border-radius: var(--radius-md);
          background: var(--accent-amber-light);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #92400e;
          font-size: 0.88rem;
        }

        .note-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .coverage-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
