# Spesifikasi Desain: Apple Tech Interactive Master (Complete UI/UX Overhaul)

## 1. Ringkasan Proyek
Rombak total desain dan pengalaman pengguna (*Complete UI/UX Overhaul*) pada website **Zamanet (zama.co.id)** mengadopsi arsitektur **Apple + Stripe Tech Clean**. Website dirancang super clean, sangat interaktif, tanpa emoji (menggunakan Lucide React SVG icons), dengan copywriting singkat berbobot, dan layout fluid responsif di semua perangkat.

---

## 2. Token Sistem Visual & Layout Rules

### Visual Tokens (Apple Design System)
- **Primary Accent**: `#0071e3` (Apple Signature Blue).
- **Text Main**: `#1d1d1f` (High-Contrast Black, 16:1 Contrast Ratio).
- **Text Muted**: `#86868b` (Apple Subtitle Gray, 4.8:1 Ratio).
- **Background**: `#f5f5f7` (Apple Canvas Light Gray) & `#ffffff` (Card Surface).
- **Card Border Radius**: `32px` (`--radius-lg`).
- **Pill Radius**: `9999px` (`--radius-full`).
- **Shadow**: `0 30px 90px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.04)`.
- **Strict No-Emoji Policy**: 100% menggunakan Ikon Vektor Lucide React SVG.

### Aturan Layout & Scroll Responsif
- **Scroll Behavior**: `scroll-behavior: smooth;` & `scroll-padding-top: 76px;`.
- **Section Styling**: `min-height: calc(100vh - 76px); scroll-margin-top: 76px; padding: 60px 0 40px; position: relative;`.
- **Zero Cutoff / Spillage**: Seluruh section menggunakan `min-height: calc(100vh - 76px)` tanpa `height: 100vh` kaku agar dapat menyesuaikan tinggi layar secara alami tanpa overlap.

---

## 3. Spesifikasi Komponen & Interaktivitas per Section

### 3.1 Top Ribbon & Header (`Header.tsx`)
- **Ribbon**: `<Zap size={14} />` + *"Zamanet Fast Promo: 50 Mbps Rp 135.000 & 100 Mbps Rp 165.000. Duitku Payment Gateway Verified."*
- **Navbar Links**: `Spesifikasi`, `Paket & Harga`, `Kalkulator Mbps`, `Cek Area`, `Dukungan`.
- **CTA Button**: `<CreditCard size={16} />` + *"Berlangganan"*.

### 3.2 Hero Section dengan Interactive Speed Switcher (`Hero.tsx`)
- **Eyebrow**: `BARU • FIBER OPTIC D.I. YOGYAKARTA`
- **Headline**:
  > **Internet Fiber Murni.**
  > **Tanpa Batas.** *(efek gradien biru Apple)*
- **Subtitle**: *"Kecepatan simetris 1:1 hingga 200 Mbps untuk rumah dan usaha Anda. 0% FUP."*
- **Widget Interaktif Pilihan Kecepatan Instan**:
  - 3 Tombol Kapsul Kecepatan: `[50 Mbps]` `[100 Mbps]` `[200 Mbps]`.
  - **Kartu Preview Realtime**: Mengubah harga (`Rp 135.000 /bln`, `Rp 165.000 /bln`, `Rp 580.000 /bln`) dan detail keunggulan secara realtime di layar pertama.
  - Tombol CTA: `<CreditCard size={18} />` *"Berlangganan Paket Ini"* (Membuka POP Payment Duitku di Tab Baru `_blank`).

### 3.3 Spesifikasi & Keunggulan (`Features.tsx`)
- **Eyebrow**: `SPESIFIKASI JARINGAN`
- **Headline**: `Dirancang untuk Performa.`
- **Subtitle**: *"Arsitektur serat optik murni dipadukan dengan kebebasan bandwidth tanpa batasan FUP."*
- **3 Bento Cards Sejajar**:
  - *Kartu 1*: `<Cpu size={14} />` **100% Fiber Optic Direct** - Kabel serat optik khusus dari ODP tiang ke modem router rumah. (Animasi denyut serat optik SVG).
  - *Kartu 2*: `<Repeat size={14} />` **Kecepatan Simetris 1:1** - Upload & Download sama kencangnya untuk live stream & WFH. (Indikator kecepatan simetris).
  - *Kartu 3*: `<Zap size={14} />` **Real Unlimited (0% FUP)** - Bebas unduh file game 100GB+ tanpa batasan kuota. (Counter kuota `∞ TB`).

### 3.4 Paket & Harga (`PricingSection.tsx`)
- **Eyebrow**: `PILIHAN PAKET`
- **Headline**: `Sederhana. Transparan. Pas untuk Anda.`
- **Subtitle**: *"Pilih paket promo hemat harian hingga bandwidth super cepat untuk usaha Anda. Bebas biaya tersembunyi."*
- **Segmented Control**: Switcher kapsul `Zama Fast (Promo)` ⟷ `Zama Reguler`.
- **Product Cards**: Kartu putih bersih (`32px` radius) tanpa border biru tebal, harga tebal, daftar centang `<Check size={16} />`, dan tombol `<CreditCard size={18} />` *"Berlangganan Paket Ini"* (`_blank`).

### 3.5 Kalkulator Bandwidth (`SpeedCalculator.tsx`)
- **Eyebrow**: `KALKULATOR BANDWIDTH`
- **Headline**: `Hitung Kebutuhan Mbps Anda.`
- **Subtitle**: *"Pilih profil cepat atau geser slider jumlah perangkat untuk menemukan paket yang paling pas."*
- **Interaktivitas**: 4 preset profil cepat (`Rumah`, `WFH`, `Keluarga`, `Kos`), slider interaktif jumlah perangkat, dan kartu hasil rekomendasi instan.

### 3.6 Cek Area Coverage (`CoverageChecker.tsx`)
- **Eyebrow**: `JANGKAUAN JARINGAN`
- **Headline**: `Cek Ketersediaan di Lokasi Anda.`
- **Subtitle**: *"Jaringan Fiber Optic Zamanet telah menjangkau Bantul, Sedayu, Sleman, & Kota Yogyakarta."*
- **Interaktivitas**: Form pencarian alamat ODP instan dengan indikator status tercover.

### 3.7 Dukungan / FAQ (`FaqSection.tsx`)
- **Eyebrow**: `DUKUNGAN`
- **Headline**: `Pertanyaan Umum.`
- **Subtitle**: *"Jawaban lengkap mengenai layanan, pembayaran Duitku, dan teknis pemasangan."*
- **Interaktivitas**: Accordion bersih khas Apple dengan animasi perputaran `<ChevronDown size={20} />`.
