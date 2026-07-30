# Apple Tech Interactive Master Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the entire Zamanet landing page into a world-class, highly interactive Apple + Stripe Tech Clean experience with an interactive Hero Speed Switcher widget, clean 3-column Bento grid, no bright blue borders, zero emojis, and fluid layout scaling.

**Architecture:** Refactor CSS global design tokens in `index.css` for fluid `min-height: calc(100vh - 76px)` section scaling, build the Interactive Speed Switcher in `Hero.tsx`, and polish all 6 remaining components (`Header.tsx`, `Features.tsx`, `PricingSection.tsx`, `SpeedCalculator.tsx`, `CoverageChecker.tsx`, `FaqSection.tsx`).

**Tech Stack:** React 18, TypeScript, Vite, Vanilla CSS, Lucide React Icons.

## Global Constraints

- **Strict No-Emoji Policy**: Zero emoticons/emojis allowed in code or copy. Use Lucide React SVG icons exclusively.
- **No Bright Blue Borders**: All cards use clean, consistent `border: 1px solid var(--border-light)` with `--shadow-apple`.
- **Interactive Hero Widget**: 3 Speed Buttons (`[50 Mbps]`, `[100 Mbps]`, `[200 Mbps]`) with real-time price & benefit card preview.
- **Fluid Layout**: `min-height: calc(100vh - 76px); scroll-margin-top: 76px; padding: 60px 0 40px;` to avoid section overlaps.
- **Conventional Commits**: All commit steps MUST use Conventional Commits format (`feat:`, `style:`, `refactor:`).

---

### Task 1: Refactor Global CSS Tokens and Fluid Layout (`src/index.css`)

**Files:**
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Google Fonts Inter & Space Grotesk.
- Produces: CSS variables for Apple design tokens and fluid section container styles.

- [ ] **Step 1: Update index.css section rules and utilities**

```css
section {
  min-height: calc(100vh - 76px);
  scroll-margin-top: 76px;
  padding: 60px 0 40px;
  position: relative;
  box-sizing: border-box;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 24px;
}

.glass-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-apple);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
}
```

- [ ] **Step 2: Build project to verify CSS**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit CSS update**

```bash
git add src/index.css
git commit -m "style: establish global fluid section CSS rules and Apple design tokens"
```

---

### Task 2: Implement Interactive Speed Switcher in Hero Section (`src/components/Hero.tsx`)

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: Lucide icons (`CreditCard`, `ChevronRight`, `Zap`, `Check`, `Sparkles`).
- Produces: Interactive speed switcher buttons (`[50 Mbps]`, `[100 Mbps]`, `[200 Mbps]`) with real-time price & benefit preview card.

- [ ] **Step 1: Write interactive speed switcher state and UI in Hero.tsx**

```tsx
import React, { useState } from 'react';
import { ChevronRight, CreditCard, Zap, Check, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (packageName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [selectedSpeed, setSelectedSpeed] = useState<50 | 100 | 200>(100);

  const speedData = {
    50: {
      name: 'Z-Fast 50 (Promo)',
      price: 'Rp 135.000',
      period: '/bulan',
      tag: 'SUPER HEMAT',
      desc: 'Ideal untuk browsing, medsos, & streaming HD hingga 5 perangkat.',
      benefits: ['Speed 50 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Router Wi-Fi', 'Gratis Biaya Pasang']
    },
    100: {
      name: 'Z-Fast 100 (Best Value)',
      price: 'Rp 165.000',
      period: '/bulan',
      tag: 'PALING POPULER',
      desc: 'Super ngebut untuk gaming 4K, WFH simultan, & 5-10 HP aktif.',
      benefits: ['Speed 100 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Router Wi-Fi High Gain', 'Prioritas Low Latency']
    },
    200: {
      name: 'Z-Reguler 200 (Pro)',
      price: 'Rp 580.000',
      period: '/bulan',
      tag: 'KAPASITAS RAKSASA',
      desc: 'Bandwidth jumbo bebas lag untuk kantor usaha, co-working, atau kos-kosan.',
      benefits: ['Speed 200 Mbps Simetris 1:1', 'Real Unlimited (0% FUP)', 'Gratis Dual Band Router', 'Dedicated Technical Support']
    }
  };

  const current = speedData[selectedSpeed];

  return (
    <section id="hero" className="apple-hero-section">
      <div className="container apple-hero-container">
        <div className="apple-hero-text">
          <span className="apple-eyebrow">BARU • FIBER OPTIC D.I. YOGYAKARTA</span>
          <h1 className="apple-hero-title">
            Internet Fiber Murni.<br />
            <span className="gradient-text-apple">Tanpa Batas.</span>
          </h1>
          <p className="apple-hero-subtitle">
            Kecepatan simetris 1:1 hingga 200 Mbps untuk rumah dan usaha Anda. <strong>0% FUP (Real Unlimited)</strong>.
          </p>

          {/* Speed Selector Pill Switcher */}
          <div className="hero-speed-switcher">
            <span className="switcher-label">Pilih Kecepatan:</span>
            <div className="speed-buttons-row">
              <button
                className={`speed-pill-btn ${selectedSpeed === 50 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(50)}
              >
                <Zap size={14} /> 50 Mbps
              </button>
              <button
                className={`speed-pill-btn ${selectedSpeed === 100 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(100)}
              >
                <Sparkles size={14} /> 100 Mbps
              </button>
              <button
                className={`speed-pill-btn ${selectedSpeed === 200 ? 'active' : ''}`}
                onClick={() => setSelectedSpeed(200)}
              >
                <Zap size={14} /> 200 Mbps
              </button>
            </div>
          </div>

          {/* Interactive Realtime Card Preview */}
          <div className="hero-preview-card glass-card">
            <div className="preview-card-header">
              <span className="preview-tag">{current.tag}</span>
              <div className="preview-price">
                <strong>{current.price}</strong> <span>{current.period}</span>
              </div>
            </div>
            <p className="preview-desc">{current.desc}</p>
            <div className="preview-benefits">
              {current.benefits.map((b, i) => (
                <span key={i} className="benefit-item">
                  <Check size={14} className="check-icon" /> {b}
                </span>
              ))}
            </div>
            <button
              className="btn btn-primary btn-full btn-lg"
              onClick={() => onOpenModal(`${current.name} (${selectedSpeed} Mbps) - ${current.price}`)}
            >
              <CreditCard size={18} />
              <span>Berlangganan Paket Ini ({current.price})</span>
            </button>
          </div>

          <div className="apple-hero-cta" style={{ marginTop: '20px' }}>
            <a href="#pricing" className="apple-link">
              <span>Lihat perbandingan semua paket</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Build project to verify Hero**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Hero update**

```bash
git add src/components/Hero.tsx
git commit -m "feat: implement interactive speed switcher widget in Hero.tsx"
```

---

### Task 3: Refactor Features Bento Grid (`src/components/Features.tsx`)

**Files:**
- Modify: `src/components/Features.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Cpu`, `Repeat`, `Zap`).
- Produces: 3 equal-width Bento cards with animated SVG graphics, no emojis, clean layout.

- [ ] **Step 1: Update Features.tsx with clean equal 3-column architecture**

- [ ] **Step 2: Build project to verify Features**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Features update**

```bash
git add src/components/Features.tsx
git commit -m "refactor: polish equal 3-column Bento grid in Features.tsx"
```

---

### Task 4: Refactor Pricing Section and Remove Blue Borders (`src/components/PricingSection.tsx`)

**Files:**
- Modify: `src/components/PricingSection.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Zap`, `Building2`, `Sparkles`, `ShieldCheck`, `Check`, `CreditCard`).
- Produces: Segmented tab switcher, 32px product cards without thick blue borders.

- [ ] **Step 1: Ensure no 2px solid apple-blue borders in PricingSection.tsx**

- [ ] **Step 2: Build project to verify Pricing**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit Pricing update**

```bash
git add src/components/PricingSection.tsx
git commit -m "style: ensure clean card borders without bright blue outlines in PricingSection.tsx"
```

---

### Task 5: Polish Speed Calculator and Coverage Checker (`src/components/SpeedCalculator.tsx`, `src/components/CoverageChecker.tsx`)

**Files:**
- Modify: `src/components/SpeedCalculator.tsx`
- Modify: `src/components/CoverageChecker.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Calculator`, `MapPin`, `Search`, `Sparkles`, `CreditCard`).
- Produces: Interactive device slider, preset buttons, ODP search form.

- [ ] **Step 1: Refactor SpeedCalculator and CoverageChecker to use fluid padding**

- [ ] **Step 2: Build project to verify SpeedCalculator & CoverageChecker**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit updates**

```bash
git add src/components/SpeedCalculator.tsx src/components/CoverageChecker.tsx
git commit -m "refactor: polish calculator and coverage checker fluid responsive layouts"
```

---

### Task 6: Polish Header and FAQ Sections (`src/components/Header.tsx`, `src/components/FaqSection.tsx`)

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/FaqSection.tsx`

**Interfaces:**
- Consumes: Lucide icons (`Zap`, `HelpCircle`, `ChevronDown`, `CreditCard`).
- Produces: Clean ribbon banner, smooth accordion list.

- [ ] **Step 1: Verify Header and FaqSection styling**

- [ ] **Step 2: Build project to verify Header & FaqSection**

Run: `cmd.exe /c "npm run build"`
Expected: PASS (0 errors)

- [ ] **Step 3: Commit updates**

```bash
git add src/components/Header.tsx src/components/FaqSection.tsx
git commit -m "refactor: polish header and FAQ accordion interactive styling"
```

---

### Task 7: Sync All Updates to GitHub Repositories (`sslenses/lp-zama` & `sslenses/lp-zama-up`)

**Files:**
- Create/Run: `sync_interactive_master.cjs`

- [ ] **Step 1: Run sync script to push overhaul to GitHub**

Run: `node sync_interactive_master.cjs`
Expected: PASS (`lp-zama` & `lp-zama-up` synced)

- [ ] **Step 2: Clean up sync script**

```bash
powershell -Command "Remove-Item sync_interactive_master.cjs -ErrorAction SilentlyContinue"
```
