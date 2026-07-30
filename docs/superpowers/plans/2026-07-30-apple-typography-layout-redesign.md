# Apple Pro Experience (Typography, Layout, & Copywriting Redesign) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Zamanet landing page into a world-class Apple.com style experience with ultra-large editorial typography (5.5rem), high-contrast gradients, 32px card radii, minimalist bold copywriting, and a strict no-emoji policy (using Lucide vector icons exclusively).

**Architecture:** Update central CSS design tokens in `index.css`, followed by refactoring each section component (`Header.tsx`, `Hero.tsx`, `Features.tsx`, `PricingSection.tsx`, `SpeedCalculator.tsx`, `CoverageChecker.tsx`, `FaqSection.tsx`) to enforce strict Apple Pro styling, high-converting copywriting, and clean Lucide SVG icons.

**Tech Stack:** React 18, TypeScript, Vite, Vanilla CSS, Lucide React Icons.

## Global Constraints

- **Strict No-Emoji Policy**: Zero emoticons/emojis allowed in code or copy. Use Lucide React SVG icons exclusively.
- **Apple Editorial Scale**: Hero title `5.5rem` (88px), Section title `3.5rem` (56px), letter-spacing `-0.038em`.
- **Card Radius**: `32px` (`--radius-lg`).
- **Conventional Commits**: All commits must follow Conventional Commits format (`feat:`, `style:`, `fix:`).

### Mandatory SaaS & Engineering Standards (Enforced for All Projects):
1. **Conventional Commits**: All commit steps MUST use Conventional Commits format.
2. **Security Considerations (OWASP Audit)**: Zero secrets in code, input sanitization on form inputs.
3. **Structured Logging & Error Boundaries**: Enforce clean console error handling.
4. **Enterprise PRD & Compliance**: UU PDP data privacy compliance for customer address and contact data.

---

### Task 1: Refactor Global CSS Tokens and Typography (`src/index.css`)

**Files:**
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Google Font Inter & Space Grotesk.
- Produces: Apple Editorial CSS variables (`--radius-lg: 32px;`, `--font-heading`, letter-spacing tokens, gradient text utilities).

- [ ] **Step 1: Update CSS tokens and typography in index.css**

```css
:root {
  --apple-blue: #0071e3;
  --apple-blue-dark: #005bb5;
  --apple-blue-hover: #0077ed;
  --apple-blue-light: #f0f6ff;

  --text-main: #1d1d1f;
  --text-muted: #86868b;
  --text-dim: #a1a1a6;

  --font-heading: 'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'SF Pro Text', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 32px;
  --radius-full: 9999px;

  --shadow-apple: 0 30px 90px rgba(0, 0, 0, 0.07), 0 10px 30px rgba(0, 0, 0, 0.04);
}

.gradient-text-apple {
  background: linear-gradient(135deg, #1d1d1f 0%, #0071e3 50%, #2997ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

- [ ] **Step 2: Build project to verify CSS compilation**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit CSS tokens update**

```bash
git add src/index.css
git commit -m "style: update global CSS design tokens for Apple Pro Experience"
```

---

### Task 2: Redesign Header and Ribbon (`src/components/Header.tsx`)

**Files:**
- Modify: `src/components/Header.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Wifi`, `Menu`, `X`, `CreditCard`, `Zap`).
- Produces: Header navigation bar without emojis.

- [ ] **Step 1: Replace ribbon emoji with Lucide Zap icon and clean copy**

```tsx
<div className="apple-top-ribbon">
  <div className="container ribbon-content">
    <Zap size={14} className="ribbon-icon" />
    <span><strong>Zamanet Fast Promo:</strong> 50 Mbps Rp 135.000 & 100 Mbps Rp 165.000. Duitku Payment Gateway Verified.</span>
  </div>
</div>
```

- [ ] **Step 2: Build project to verify Header**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Header update**

```bash
git add src/components/Header.tsx
git commit -m "style: remove emojis and refine header typography in Header.tsx"
```

---

### Task 3: Redesign Hero Section with Apple Editorial Scale (`src/components/Hero.tsx`)

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: Lucide icons (`CreditCard`, `ChevronRight`, `Network`, `Server`, `Gauge`, `Download`, `Upload`, `Activity`, `Check`).
- Produces: Ultra-large 5.5rem headline, gradient accents, floating 32px speedtest card.

- [ ] **Step 1: Update Hero headline and subhead copywriting without emojis**

```tsx
<div className="apple-hero-text">
  <span className="apple-eyebrow">BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
  <h1 className="apple-hero-title">
    Zamanet.<br />
    <span className="gradient-text-apple">Kecepatan Serat Optik Murni.</span>
  </h1>
  <p className="apple-hero-subtitle">
    Internet tanpa batas untuk rumah dan usaha Anda. <strong>0% FUP (Real Unlimited)</strong>. Tanpa kompromi.
  </p>
</div>
```

- [ ] **Step 2: Build project to verify Hero**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Hero update**

```bash
git add src/components/Hero.tsx
git commit -m "style: apply Apple Editorial 5.5rem scale and no-emoji copy in Hero.tsx"
```

---

### Task 4: Redesign Features Section with Apple Bento Grid (`src/components/Features.tsx`)

**Files:**
- Modify: `src/components/Features.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Cpu`, `Repeat`, `Zap`, `CreditCard`).
- Produces: Bold minimalist section header and asymmetric bento cards.

- [ ] **Step 1: Update Features section copywriting and Bento Grid without emojis**

```tsx
<div className="section-header">
  <span className="tag">KEUNGGULAN UTAMA</span>
  <h2>Dirancang untuk Performa.</h2>
  <p>Teknologi serat optik murni dipadukan dengan kebebasan internet tanpa batasan FUP.</p>
</div>
```

- [ ] **Step 2: Build project to verify Features**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Features update**

```bash
git add src/components/Features.tsx
git commit -m "style: apply Apple Bento Grid and bold copywriting in Features.tsx"
```

---

### Task 5: Redesign Pricing Section (`src/components/PricingSection.tsx`)

**Files:**
- Modify: `src/components/PricingSection.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Zap`, `Building2`, `Sparkles`, `ShieldCheck`, `Check`, `CreditCard`).
- Produces: Segmented control, 32px tall pricing cards, no emojis.

- [ ] **Step 1: Update Pricing section copywriting and card layout**

```tsx
<div className="section-header">
  <span className="tag">PILIHAN PAKET</span>
  <h2>Sederhana. Transparan. Pas untuk Anda.</h2>
  <p>Pilih paket promo hemat harian hingga bandwidth super cepat untuk usaha Anda. Bebas biaya tersembunyi.</p>
</div>
```

- [ ] **Step 2: Build project to verify Pricing**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Pricing update**

```bash
git add src/components/PricingSection.tsx
git commit -m "style: apply Apple product pricing cards and no-emoji copy in PricingSection.tsx"
```

---

### Task 6: Redesign Speed Calculator Section (`src/components/SpeedCalculator.tsx`)

**Files:**
- Modify: `src/components/SpeedCalculator.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Calculator`, `Home`, `Briefcase`, `Users`, `Building`, `Smartphone`, `Laptop`, `Tv`, `Gamepad2`, `Sparkles`, `CreditCard`).
- Produces: Interactive preset buttons and recommendation card.

- [ ] **Step 1: Update Speed Calculator section copywriting without emojis**

```tsx
<div className="calc-header">
  <div className="calc-icon-badge">
    <Calculator size={24} />
  </div>
  <div>
    <h2>Hitung Kebutuhan Mbps Anda.</h2>
    <p>Pilih profil cepat atau geser slider jumlah perangkat untuk menemukan paket yang paling pas.</p>
  </div>
</div>
```

- [ ] **Step 2: Build project to verify Speed Calculator**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Speed Calculator update**

```bash
git add src/components/SpeedCalculator.tsx
git commit -m "style: refine speed calculator typography and remove emojis in SpeedCalculator.tsx"
```

---

### Task 7: Redesign Coverage Checker and FAQ Sections (`src/components/CoverageChecker.tsx`, `src/components/FaqSection.tsx`)

**Files:**
- Modify: `src/components/CoverageChecker.tsx`
- Modify: `src/components/FaqSection.tsx`

**Interfaces:**
- Consumes: Lucide icons (`MapPin`, `Search`, `CheckCircle`, `AlertCircle`, `CreditCard`, `Navigation`, `Radio`, `HelpCircle`, `ChevronDown`).
- Produces: Coverage verification form, ODP map visual, and Apple accordion FAQ.

- [ ] **Step 1: Update Coverage Checker and FAQ section copywriting without emojis**

- Coverage Section Header:
  - Tag: `JANGKAUAN JARINGAN`
  - Title: `Cek Ketersediaan di Lokasi Anda.`
  - Subtitle: `Jaringan Fiber Optic Zamanet telah menjangkau Bantul, Sedayu, Sleman, & Kota Yogyakarta.`

- FAQ Section Header:
  - Tag: `DUKUNGAN`
  - Title: `Pertanyaan Umum.`
  - Subtitle: `Jawaban lengkap mengenai layanan, pembayaran Duitku, dan teknis pemasangan.`

- [ ] **Step 2: Build project to verify Coverage Checker and FAQ**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Coverage Checker and FAQ updates**

```bash
git add src/components/CoverageChecker.tsx src/components/FaqSection.tsx
git commit -m "style: apply Apple clean typography and remove emojis in CoverageChecker and FaqSection"
```

---

### Task 8: Sync All Changes to GitHub Repositories (`sslenses/lp-zama` & `sslenses/lp-zama-up`)

**Files:**
- Create/Run: `sync_apple_redesign.cjs`

- [ ] **Step 1: Execute sync script to push changes to GitHub**

Run: `node sync_apple_redesign.cjs`
Expected: PASS (`lp-zama` & `lp-zama-up` synced successfully)

- [ ] **Step 2: Clean up sync script**

```bash
powershell -Command "Remove-Item sync_apple_redesign.cjs -ErrorAction SilentlyContinue"
```
