# Spesifikasi Desain: Apple Pro Experience (Typography, Layout, & Copywriting Redesign)

## 1. Ringkasan Proyek
Pembaruan menyeluruh pada tipografi, tata letak (layout), dan penulisan pesan (*copywriting*) untuk website **Zamanet (zama.co.id)** mengadopsi standar estetika **Apple.com (Apple Pro Experience)**. Seluruh teks dan elemen UI tidak menggunakan emoticon/emoji, melainkan menggunakan ikon vektor profesional (Lucide React Icons).

---

## 2. Sistem Tipografi & Token Global

### Tipografi (Apple Editorial Scale)
- **Font Utama**: `Inter` (Google Font).
- **Hero Heading**: `5.5rem` (88px) di desktop / `3.2rem` di mobile.
  - *Letter Spacing*: `-0.038em` (Apple Pro Display style).
  - *Line Height*: `1.05`.
- **Section Heading**: `3.5rem` (56px) di desktop / `2.2rem` di mobile.
  - *Letter Spacing*: `-0.03em`.
- **Eyebrow Text**: `0.85rem` (13px), `font-weight: 700`, `letter-spacing: 0.12em`, `text-transform: uppercase`, warna `var(--apple-blue)`.
- **Subtitle Text**: `1.35rem` (21px) untuk subtitle hero, `1.05rem` (17px) untuk subtitle section, warna `var(--text-muted)` (`#86868b`).

### Warna & Gradien
- **Gradien Teks**: `linear-gradient(135deg, #1d1d1f 0%, #0071e3 50%, #2997ff 100%)` diaplikasikan pada kata kunci utama (*"Kecepatan Serat Optik Murni"*, *"0% FUP"*, *"Duitku Gateway"*).
- **Border Radius Kartu**: `32px` (`--radius-lg`).
- **Bayangan Ambient (Apple Shadow)**: `0 30px 90px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.04)`.

---

## 3. Tata Letak & Copywriting per Section

### 3.1 Top Ribbon & Header (`Header.tsx`)
- **Ribbon Copywriting**: *"Zamanet Fast Promo: 50 Mbps Rp 135.000 & 100 Mbps Rp 165.000. Duitku Payment Gateway Verified."* (Tanpa emoji, menggunakan ikon Lucide `<Zap size={14} />`).
- **Navigation Links**: `Spesifikasi`, `Paket & Harga`, `Kalkulator Mbps`, `Cek Area`, `Dukungan`.
- **Nav CTA Button**: Tombol pil Apple Blue dengan ikon `<CreditCard size={16} />` + *"Berlangganan"*.

### 3.2 Hero Section (`Hero.tsx`)
- **Eyebrow**: `BARU • FIBER OPTIC D.I. YOGYAKARTA`
- **Headline**:
  > **Zamanet.**
  > **Kecepatan Serat Optik Murni.**
- **Subtitle**: *"Internet tanpa batas untuk rumah dan usaha Anda. 0% FUP (Real Unlimited). Tanpa kompromi."*
- **CTA**: Tombol pil `<CreditCard size={18} />` *"Berlangganan Sekarang"* + Link `<ChevronRight size={18} />` *"Lihat semua paket & harga"*.
- **Speedtest Card**: Floating glass container `32px` dengan header provider terdeteksi, selector target server, gauge digital besar, dan 3 kartu statik (*Ping ms*, *Download Result*, *Upload Result*).

### 3.3 Spesifikasi & Keunggulan (`Features.tsx`)
- **Eyebrow**: `KEUNGGULAN UTAMA`
- **Headline**: `Dirancang untuk Performa.`
- **Subtitle**: *"Teknologi serat optik murni dipadukan dengan kebebasan internet tanpa batasan FUP."*
- **Bento Grid**:
  - *Kartu 1 (2 Kolom)*: `Serat Optik Murni Langsung ke Rumah.` (Animasi denyut serat optik ODP ke Modem).
  - *Kartu 2*: `Kecepatan Simetris 1:1.` (Upload & Download sama kencangnya).
  - *Kartu 3*: `Real Unlimited (0% FUP).` (Bebas unduh tanpa batasan kuota wajar).
  - *Kartu 4 (2 Kolom)*: `Duitku Payment Gateway.` (Pembayaran otomatis & instan via Bank VA, QRIS, & E-Wallet).

### 3.4 Paket & Harga (`PricingSection.tsx`)
- **Eyebrow**: `PILIHAN PAKET`
- **Headline**: `Sederhana. Transparan. Pas untuk Anda.`
- **Subtitle**: *"Pilih paket promo hemat harian hingga bandwidth super cepat untuk usaha Anda. Bebas biaya tersembunyi."*
- **Segmented Control**: Switcher kapsul `Zama Fast (Promo)` ⟷ `Zama Reguler`.
- **Card**: Kartu produk tinggi (`32px` radius), harga bercetak tebal, daftar fitur ikon `<Check size={16} />`, dan tombol `<CreditCard size={18} />` *"Berlangganan Paket Ini"*.

### 3.5 Kalkulator Mbps (`SpeedCalculator.tsx`)
- **Eyebrow**: `KALKULATOR BANDWIDTH`
- **Headline**: `Hitung Kebutuhan Mbps Anda.`
- **Subtitle**: *"Pilih profil cepat atau geser slider jumlah perangkat untuk menemukan paket yang paling pas."*
- **Layout**: Preset profil cepat (`<Home />`, `<Briefcase />`, `<Users />`, `<Building />`), slider interaktif, dan kartu hasil rekomendasi.

### 3.6 Cek Area Coverage (`CoverageChecker.tsx`)
- **Eyebrow**: `JANGKAUAN JARINGAN`
- **Headline**: `Cek Ketersediaan di Lokasi Anda.`
- **Subtitle**: *"Jaringan Fiber Optic Zamanet telah menjangkau Bantul, Sedayu, Sleman, & Kota Yogyakarta."*
- **Layout**: Form verifikasi alamat ODP di sebelah kiri dan peta visual simulasi jaringan ODP Zamanet di sebelah kanan.

### 3.7 Dukungan / FAQ (`FaqSection.tsx`)
- **Eyebrow**: `DUKUNGAN`
- **Headline**: `Pertanyaan Umum.`
- **Subtitle**: *"Jawaban lengkap mengenai layanan, pembayaran Duitku, dan teknis pemasangan."*
- **Layout**: Accordion bersih khas Apple dengan ikon `<HelpCircle size={20} />` dan `<ChevronDown size={20} />`.

---

## 4. Aturan Penggunaan Ikon (Strict No-Emoji Policy)
1. **Dilarang keras menggunakan emoji Unicode** (seperti ⚡, 💳, 🚀, 💡, 🛡️, 📌, ⏱️, 📤, 📡, 🧪, 🔑, 🎯) dalam teks maupun tombol.
2. **Gunakan Ikon Vektor Lucide React**:
   - `<Zap />` untuk indikator promo/kecepatan.
   - `<CreditCard />` / `<Lock />` untuk tombol & aksi pembayaran Duitku.
   - `<Cpu />` untuk Fiber Optic.
   - `<Repeat />` untuk kecepatan simetris 1:1.
   - `<Activity />` / `<Network />` / `<Gauge />` untuk Speedtest.
   - `<Check />` / `<CheckCircle2 />` untuk indikator terverifikasi/fitur.
