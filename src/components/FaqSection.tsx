import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Metode pembayaran apa saja yang didukung melalui Duitku Payment Gateway?',
      a: 'Zamanet terhubung langsung dengan Duitku Payment Gateway yang mendukung pembayaran melalui Virtual Account Bank (BCA, Mandiri, BRI, BNI, Permata, CIMB Niaga), QRIS All Payment (Gopay, ShopeePay, OVO, Dana), dan Kartu Kredit/Debit (Visa/MasterCard).'
    },
    {
      q: 'Apa perbedaan antara Paket Zama Fast dan Paket Zama Reguler?',
      a: 'Paket Zama Fast adalah paket promo super hemat berkecepatan tinggi (50 Mbps @ Rp 135rb & 100 Mbps @ Rp 165rb) dengan fasilitas Wi-Fi router gratis dan 0% FUP. Sementara Paket Zama Reguler menyediakan rentang kecepatan dari 30 Mbps hingga 200 Mbps dengan harga sudah termasuk PPN 11%.'
    },
    {
      q: 'Apakah ada batasan kuota (FUP) pada layanan Zamanet?',
      a: 'Tidak ada! Semua paket internet Zamanet 100% Real Unlimited tanpa batasan FUP (Fair Usage Policy). Anda bebas mengunduh dan mengunggah file tanpa khawatir kecepatan diturunkan.'
    },
    {
      q: 'Berapa biaya instalasi dan perangkat Wi-Fi?',
      a: 'Perangkat Wi-Fi router dipinjamkan gratis selama Anda berlangganan. Untuk biaya instalasi: Paket Zama Fast & Paket Reguler 80+ Mbps GRATIS (Rp 0), sedangkan Paket Reguler 30-60 Mbps dikenakan biaya instalasi Rp 35.000 (sekali di awal).'
    },
    {
      q: 'Berapa lama proses pemasangan jaringan hingga aktif?',
      a: 'Setelah transaksi pembayaran terverifikasi melalui Duitku, tim teknisi kami akan melakukan konfirmasi lokasi & pemasangan dalam waktu 1x24 jam (maksimal 2 hari kerja).'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Paling Sering Ditanyakan</span>
          <h2>Pertanyaan Umum (FAQ)</h2>
          <p>
            Temukan jawaban lengkap mengenai layanan, pembayaran Duitku, dan teknis pemasangan Zamanet.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item glass-card ${openIdx === idx ? 'open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                <div className="q-title-group">
                  <HelpCircle size={20} className="q-icon" />
                  <span>{faq.q}</span>
                </div>
                <ChevronDown size={20} className={`arrow-icon ${openIdx === idx ? 'rotated' : ''}`} />
              </button>

              {openIdx === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          min-height: 100vh;
          padding: 100px 0 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          overflow: hidden;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .faq-item.open {
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-md);
        }

        .faq-question-btn {
          width: 100%;
          padding: 22px 28px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-main);
          font-family: var(--font-heading);
          font-size: 1.08rem;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }

        .q-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .q-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .arrow-icon {
          color: var(--text-muted);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .arrow-icon.rotated {
          transform: rotate(180deg);
          color: var(--primary-blue);
        }

        .faq-answer {
          padding: 0 28px 24px 60px;
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
