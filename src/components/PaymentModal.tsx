import React, { useState, useEffect } from 'react';
import { X, CreditCard, CheckCircle2, ArrowRight, Copy, Check, Clock, ExternalLink, Lock, Send, Settings, ShieldAlert } from 'lucide-react';
import { PAYMENT_METHODS, type PaymentMethodOption, createDuitkuTransaction, type DuitkuTransactionResponse } from '../services/duitkuService';
import { ZAMA_FAST_PACKAGES, ZAMA_REGULER_PACKAGES } from '../data/packages';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageName?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  selectedPackageName = '',
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pkgString, setPkgString] = useState('');
  const [address, setAddress] = useState('');
  const [selectedMethodCode, setSelectedMethodCode] = useState<string>('B1'); // Default BCA VA

  // Merchant Credentials (Optional for Live Sandbox/Production)
  const [showConfig, setShowConfig] = useState(false);
  const [merchantCode, setMerchantCode] = useState('');
  const [apiKey, setApiKey] = useState('');

  // Duitku Result State
  const [duitkuResult, setDuitkuResult] = useState<DuitkuTransactionResponse | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedPackageName) {
      setPkgString(selectedPackageName);
    } else {
      setPkgString('Z-Fast 50 (50 Mbps) - Rp 135.000 / bln');
    }
  }, [selectedPackageName, isOpen]);

  if (!isOpen) return null;

  // Calculate Base Price from Package String
  const extractAmountFromPkg = (str: string): number => {
    const match = str.match(/Rp\s*([\d.]+)/i);
    if (match && match[1]) {
      return parseInt(match[1].replace(/\./g, ''));
    }
    return 135000;
  };

  const basePrice = extractAmountFromPkg(pkgString);
  const selectedMethod = PAYMENT_METHODS.find((m) => m.code === selectedMethodCode) || PAYMENT_METHODS[0];
  const totalPayment = basePrice + selectedMethod.fee;

  const handleProceedPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderId = `ZAMA-${Date.now().toString().slice(-8)}`;

    const res = await createDuitkuTransaction({
      merchantCode: merchantCode.trim() || undefined,
      apiKey: apiKey.trim() || undefined,
      paymentAmount: totalPayment,
      paymentMethod: selectedMethodCode,
      merchantOrderId: orderId,
      productDetails: `Langganan Internet Zamanet: ${pkgString}`,
      email: email || 'pelanggan@zama.co.id',
      phoneNumber: phone,
      customerVaName: name,
      address: address
    });

    setLoading(false);
    
    // Open Duitku POP payment URL in NEW TAB
    if (res.paymentUrl) {
      window.open(res.paymentUrl, '_blank');
      resetModal();
      return;
    }

    setDuitkuResult(res);
    setStep(2);
  };

  const handleCopyVa = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleConfirmWa = () => {
    const textMessage = `*KONFIRMASI PEMBAYARAN DUITKU ZAMANET*%0A%0A` +
      `🆔 *Order ID*: ${duitkuResult?.merchantOrderId}%0A` +
      `👤 *Nama*: ${encodeURIComponent(name)}%0A` +
      `📱 *No. WhatsApp*: ${encodeURIComponent(phone)}%0A` +
      `⚡ *Paket*: ${encodeURIComponent(pkgString)}%0A` +
      `💳 *Metode*: ${encodeURIComponent(selectedMethod.name)}%0A` +
      `💰 *Total Pembayaran*: Rp ${duitkuResult?.amount.toLocaleString('id-ID')}%0A` +
      `📍 *Alamat*: ${encodeURIComponent(address)}%0A%0A` +
      `Mohon verifikasi status pembayaran transaksi saya. Terima kasih!`;

    window.open(`https://wa.me/6285888815556?text=${textMessage}`, '_blank');
  };

  const resetModal = () => {
    setStep(1);
    setDuitkuResult(null);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetModal}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={resetModal} aria-label="Close modal">
          <X size={20} />
        </button>

        {step === 1 ? (
          <>
            <div className="modal-header">
              <div className="modal-icon-badge">
                <CreditCard size={24} />
              </div>
              <div>
                <h2>Pembayaran & Berlangganan Zamanet</h2>
                <p>Terhubung langsung dengan Duitku Payment Gateway (Virtual Account, QRIS, & E-Wallet).</p>
              </div>
            </div>

            <form onSubmit={handleProceedPayment} className="modal-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="p-name">Nama Lengkap Pemesan *</label>
                  <input
                    id="p-name"
                    type="text"
                    placeholder="Nama sesuai KTP"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="modal-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="p-phone">Nomor WhatsApp *</label>
                  <input
                    id="p-phone"
                    type="tel"
                    placeholder="08123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="modal-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="p-email">Alamat Email (untuk bukti tagihan/invoice) *</label>
                <input
                  id="p-email"
                  type="email"
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="modal-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="p-pkg">Paket Internet Yang Dipilih *</label>
                <select
                  id="p-pkg"
                  value={pkgString}
                  onChange={(e) => setPkgString(e.target.value)}
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
                <label htmlFor="p-address">Alamat Lengkap Pemasangan *</label>
                <textarea
                  id="p-address"
                  rows={2}
                  placeholder="Jalan, RT/RW, Dusun, Kelurahan, Kecamatan & Patokan"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="modal-textarea"
                ></textarea>
              </div>

              {/* Payment Method Selection */}
              <div className="form-group">
                <label>Pilih Metode Pembayaran Duitku *</label>
                <div className="payment-methods-grid">
                  {PAYMENT_METHODS.map((method: PaymentMethodOption) => (
                    <div
                      key={method.code}
                      className={`method-card ${selectedMethodCode === method.code ? 'selected' : ''}`}
                      onClick={() => setSelectedMethodCode(method.code)}
                    >
                      <img src={method.icon} alt={method.name} className="method-img" />
                      <div className="method-info">
                        <span className="method-name">{method.name}</span>
                        <span className="method-fee">Fee: {method.fee === 0 ? 'FREE (Rp 0)' : `+Rp ${method.fee.toLocaleString('id-ID')}`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duitku Config Settings Drawer (Optional) */}
              <div className="config-drawer-toggle">
                <button
                  type="button"
                  className="btn-text-toggle"
                  onClick={() => setShowConfig(!showConfig)}
                >
                  <Settings size={14} />
                  <span>{showConfig ? 'Sembunyikan Kredensial Duitku' : 'Atur Kode Merchant Duitku Anda (Opsional)'}</span>
                </button>
              </div>

              {showConfig && (
                <div className="config-box">
                  <div className="config-box-header">
                    <ShieldAlert size={16} />
                    <span>Kredensial Duitku Merchant (passport.duitku.com)</span>
                  </div>
                  <div className="form-grid">
                    <input
                      type="text"
                      placeholder="Kode Merchant (contoh: DXXXXX)"
                      value={merchantCode}
                      onChange={(e) => setMerchantCode(e.target.value)}
                      className="modal-input-sm"
                    />
                    <input
                      type="password"
                      placeholder="API Key Duitku"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="modal-input-sm"
                    />
                  </div>
                  <p className="config-note">Jika dikosongkan, sistem akan menggunakan API signature standar & mode pengujian Duitku.</p>
                </div>
              )}

              {/* Order Summary Card */}
              <div className="summary-card">
                <div className="summary-row">
                  <span>Harga Paket:</span>
                  <span>Rp {basePrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="summary-row">
                  <span>Biaya Penanganan ({selectedMethod.name}):</span>
                  <span>Rp {selectedMethod.fee.toLocaleString('id-ID')}</span>
                </div>
                <div className="summary-row summary-total">
                  <span>Total Tagihan Pertama:</span>
                  <span className="total-amount">Rp {totalPayment.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={loading}>
                {loading ? (
                  <span>Menghubungkan ke Duitku Gateway...</span>
                ) : (
                  <>
                    <Lock size={18} />
                    <span>Lanjut ke Pembayaran Duitku</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* STEP 2: DUITKU CHECKOUT DISPLAY */
          <div className="checkout-display">
            <div className="checkout-badge">
              <CheckCircle2 size={18} />
              <span>Tagihan Duitku API Berhasil Dibuat</span>
            </div>

            <h2>Detail Pembayaran Anda</h2>
            <p className="ref-text">Order ID: <strong>{duitkuResult?.merchantOrderId}</strong> • Ref: {duitkuResult?.reference}</p>

            <div className="total-highlight-card">
              <span className="th-label">Total Pembayaran</span>
              <span className="th-val">Rp {duitkuResult?.amount.toLocaleString('id-ID')}</span>
              <span className="th-timer"><Clock size={14} /> Selesaikan pembayaran dalam 24 Jam</span>
            </div>

            {/* If Virtual Account */}
            {selectedMethod.category === 'va' && (
              <div className="va-box">
                <span className="va-label">Nomor Virtual Account ({selectedMethod.name}):</span>
                <div className="va-number-row">
                  <span className="va-code">{duitkuResult?.vaNumber}</span>
                  <button className="btn-copy" onClick={() => handleCopyVa(duitkuResult?.vaNumber || '')}>
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? 'Tersalin!' : 'Salin VA'}</span>
                  </button>
                </div>
                <ul className="instruction-steps">
                  <li>Buka aplikasi m-Banking atau ATM {selectedMethod.name.split(' ')[0]}.</li>
                  <li>Pilih menu <strong>Transfer / Virtual Account</strong>.</li>
                  <li>Masukkan nomor VA di atas dan konfirmasi atas nama: <strong>{name}</strong>.</li>
                  <li>Lakukan pembayaran nominal exact Rp {duitkuResult?.amount.toLocaleString('id-ID')}.</li>
                </ul>
              </div>
            )}

            {/* If QRIS */}
            {selectedMethod.category === 'qris' && (
              <div className="qris-box">
                <h3>Scan QRIS Duitku Berikut:</h3>
                {duitkuResult?.qrCodeUrl && (
                  <img src={duitkuResult.qrCodeUrl} alt="QRIS Code" className="qris-img" />
                )}
                <p className="qris-note">Buka aplikasi Gopay, ShopeePay, OVO, Dana, atau Mobile Banking Anda untuk scan QR Code di atas.</p>
              </div>
            )}

            {/* If Direct URL from Duitku API exists */}
            {duitkuResult?.paymentUrl && (
              <a
                href={duitkuResult.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-full mt-3"
              >
                <span>Buka Halaman Checkout Duitku POP</span>
                <ExternalLink size={18} />
              </a>
            )}

            <button className="btn btn-primary btn-full mt-3" onClick={handleConfirmWa}>
              <Send size={18} />
              <span>Konfirmasi Pembayaran via WhatsApp</span>
            </button>

            <button className="btn btn-outline btn-full mt-2" onClick={resetModal}>
              <span>Selesai & Tutup</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }

        .modal-content {
          max-width: 620px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 36px;
          position: relative;
          background: #ffffff;
          border: 1px solid var(--border-light);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
          border-radius: var(--radius-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--bg-subtle);
          border: 1px solid var(--border-light);
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
          color: var(--text-main);
          background: #e2e8f0;
        }

        .modal-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--primary-blue-light);
          color: var(--primary-blue-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-header h2 {
          font-size: 1.4rem;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .modal-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .modal-input, .modal-select, .modal-textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: var(--bg-main);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s ease;
        }

        .modal-input:focus, .modal-select:focus, .modal-textarea:focus {
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .modal-input-sm {
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          background: #ffffff;
          border: 1px solid var(--border-light);
          font-size: 0.82rem;
          outline: none;
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .method-card {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: var(--bg-surface);
          transition: all 0.2s ease;
        }

        .method-card.selected {
          border-color: var(--primary-blue);
          background: var(--primary-blue-light);
        }

        .method-img {
          width: 36px;
          height: 24px;
          object-fit: contain;
        }

        .method-info {
          display: flex;
          flex-direction: column;
        }

        .method-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .method-fee {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .config-drawer-toggle {
          margin-top: 4px;
        }

        .btn-text-toggle {
          background: transparent;
          border: none;
          color: var(--primary-blue);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .config-box {
          background: #f8fafc;
          border: 1px dashed var(--border-light);
          border-radius: var(--radius-md);
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .config-box-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .config-note {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .summary-card {
          background: var(--bg-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .summary-total {
          border-top: 1px solid var(--border-light);
          padding-top: 8px;
          font-weight: 700;
          color: var(--text-main);
        }

        .total-amount {
          color: var(--primary-blue-dark);
          font-size: 1.1rem;
          font-family: var(--font-heading);
        }

        /* Step 2 Checkout Display */
        .checkout-display {
          text-align: center;
        }

        .checkout-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-emerald-light);
          color: #065f46;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .ref-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .total-highlight-card {
          background: var(--primary-blue-light);
          border: 1px solid rgba(2, 132, 199, 0.2);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }

        .th-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .th-val {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary-blue-dark);
        }

        .th-timer {
          font-size: 0.8rem;
          color: #b45309;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        .va-box {
          background: var(--bg-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          text-align: left;
          margin-bottom: 20px;
        }

        .va-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .va-number-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          margin: 8px 0 16px;
        }

        .va-code {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: 1px;
        }

        .btn-copy {
          background: var(--primary-blue-light);
          color: var(--primary-blue-dark);
          border: none;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .instruction-steps {
          font-size: 0.82rem;
          color: var(--text-muted);
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .qris-box {
          padding: 20px;
          background: var(--bg-subtle);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
        }

        .qris-img {
          width: 200px;
          height: 200px;
          margin: 12px 0;
          border-radius: 12px;
          border: 4px solid #ffffff;
        }

        .qris-note {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .mt-2 {
          margin-top: 8px;
        }

        .mt-3 {
          margin-top: 12px;
        }

        @media (max-width: 640px) {
          .form-grid, .payment-methods-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
