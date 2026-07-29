export interface PackageItem {
  id: string;
  name: string;
  speed: number; // in Mbps
  price: number; // in IDR
  badge?: string;
  installationFee?: number; // 0 means free
  isPopular?: boolean;
  features: string[];
  type: 'fast' | 'reguler';
}

export const ZAMA_FAST_PACKAGES: PackageItem[] = [
  {
    id: 'fast-50',
    name: 'Z-Fast 50',
    speed: 50,
    price: 135000,
    badge: 'Favorit Paling Laris',
    isPopular: true,
    installationFee: 0,
    type: 'fast',
    features: [
      '100% Fiber Optic Murni',
      'Kecepatan Simetris 1:1 (Upload = Download)',
      'Real Unlimited Tanpa FUP',
      'Gratis Dipinjamkan 1 Unit Router Wi-Fi',
      'Cocok untuk 4-7 Perangkat (WFH, Gaming, Streaming 4K)'
    ]
  },
  {
    id: 'fast-100',
    name: 'Z-Fast 100',
    speed: 100,
    price: 165000,
    badge: 'Super Speed Monster',
    isPopular: false,
    installationFee: 0,
    type: 'fast',
    features: [
      '100% Fiber Optic Murni',
      'Kecepatan Simetris 1:1 (Upload = Download)',
      'Real Unlimited Tanpa FUP',
      'Gratis Dipinjamkan 1 Unit Router Wi-Fi High Gain',
      'Prioritas Routing Low Latency',
      'Perangkat Tak Terbatas (10+ Perangkat Aktif)'
    ]
  }
];

export const ZAMA_REGULER_PACKAGES: PackageItem[] = [
  {
    id: 'reg-30',
    name: 'Z-Reguler 30',
    speed: 30,
    price: 180000,
    installationFee: 35000,
    type: 'reguler',
    features: [
      'Fiber Optic Stable Connection',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi',
      'Biaya Instalasi Rp 35.000',
      'Layanan Support 24/7'
    ]
  },
  {
    id: 'reg-40',
    name: 'Z-Reguler 40',
    speed: 40,
    price: 235000,
    installationFee: 35000,
    type: 'reguler',
    features: [
      'Fiber Optic Stable Connection',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi',
      'Biaya Instalasi Rp 35.000',
      'Layanan Support 24/7'
    ]
  },
  {
    id: 'reg-60',
    name: 'Z-Reguler 60',
    speed: 60,
    price: 275000,
    installationFee: 35000,
    type: 'reguler',
    features: [
      'Fiber Optic Stable Connection',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi',
      'Biaya Instalasi Rp 35.000',
      'Layanan Support 24/7'
    ]
  },
  {
    id: 'reg-80',
    name: 'Z-Reguler 80',
    speed: 80,
    price: 325000,
    badge: 'Free Instalasi',
    installationFee: 0,
    type: 'reguler',
    features: [
      'Fiber Optic High Speed',
      'Gratis Biaya Instalasi (Free Rp 0)',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi Dual Band',
      'Layanan Support Prioritas'
    ]
  },
  {
    id: 'reg-100',
    name: 'Z-Reguler 100',
    speed: 100,
    price: 380000,
    badge: 'Free Instalasi',
    installationFee: 0,
    type: 'reguler',
    features: [
      'Fiber Optic Ultra Speed',
      'Gratis Biaya Instalasi (Free Rp 0)',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi Dual Band',
      'Layanan Support Prioritas'
    ]
  },
  {
    id: 'reg-150',
    name: 'Z-Reguler 150',
    speed: 150,
    price: 440000,
    badge: 'Free Instalasi',
    installationFee: 0,
    type: 'reguler',
    features: [
      'Fiber Optic Extreme Speed',
      'Gratis Biaya Instalasi (Free Rp 0)',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi Dual Band',
      'Layanan Support Prioritas VIP'
    ]
  },
  {
    id: 'reg-200',
    name: 'Z-Reguler 200',
    speed: 200,
    price: 580000,
    badge: 'Free Instalasi VIP',
    installationFee: 0,
    type: 'reguler',
    features: [
      'Fiber Optic Ultimate Bandwidth',
      'Gratis Biaya Instalasi (Free Rp 0)',
      'Harga Sudah Termasuk PPN 11%',
      'Sistem Pembayaran Prepaid',
      'Dipinjamkan 1 Unit Router Wi-Fi Dual Band GigaPort',
      'Layanan Support Dedicated 24/7'
    ]
  }
];
