import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Rian Hidayat',
      role: 'Gamer & Streamer (Sedayu, Bantul)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      comment: 'Pindah dari provider lama ke Paket Z-Fast beneran keputusan terbaik. Gak pernah lag lagi pas main Valorant, pembayaran otomatis via Virtual Account Duitku juga praktis banget!',
      rating: 5,
    },
    {
      name: 'Siti Aminah',
      role: 'Remote Software Engineer (Tirtoadi, Sleman)',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
      comment: 'Sebagai Web Developer yang WFH full, internet simetris 1:1 penting banget. Upload file project dan push repo ngebut tanpa putus. Harganya terjangkau banget untuk 50 Mbps!',
      rating: 5,
    },
    {
      name: 'Budi Santoso',
      role: 'Kepala Rumah Tangga (Argosari, Sedayu)',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80',
      comment: 'Internetnya sangat stabil, gak terpengaruh hujan badai di Jogja. Anak-anak nonton YouTube 4K di TV sambil saya meeting Zoom lancar semuanya. Sangat direkomendasikan!',
      rating: 5,
    },
  ];

  return (
    <section className="testi-section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Ulasan Pelanggan</span>
          <h2>Apa Kata Mereka Tentang Zamanet?</h2>
          <p>
            Bergabunglah dengan ribuan pelanggan di Jogja yang telah menikmati layanan internet fiber optic masa depan.
          </p>
        </div>

        <div className="testi-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testi-card glass-card">
              <Quote className="quote-icon" size={32} />

              <div className="stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>

              <p className="testi-text">"{rev.comment}"</p>

              <div className="user-profile">
                <img src={rev.avatar} alt={rev.name} className="avatar-img" />
                <div className="user-info">
                  <span className="user-name">{rev.name}</span>
                  <span className="user-role">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testi-section {
          padding: 64px 0;
        }

        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .testi-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          background: #ffffff;
        }

        .quote-icon {
          color: rgba(26, 115, 232, 0.15);
          position: absolute;
          top: 24px;
          right: 24px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .star-filled {
          color: var(--gf-yellow);
          fill: var(--gf-yellow);
        }

        .testi-text {
          color: var(--text-main);
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 28px;
          flex-grow: 1;
          font-style: italic;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--gf-blue);
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          color: var(--text-main);
          font-size: 1rem;
        }

        .user-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .testi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
