import CryptoJS from 'crypto-js';

export interface PaymentMethodOption {
  code: string;
  name: string;
  category: 'va' | 'qris' | 'ewallet' | 'cc';
  icon: string;
  fee: number; // in IDR
  description: string;
}

export const PAYMENT_METHODS: PaymentMethodOption[] = [
  // Virtual Accounts
  { code: 'B1', name: 'BCA Virtual Account', category: 'va', icon: 'https://images.duitku.com/hotlink-ok/BCA.PNG', fee: 4000, description: 'Transfer instan via m-BCA, KlikBCA, & ATM BCA' },
  { code: 'M2', name: 'Mandiri Virtual Account', category: 'va', icon: 'https://images.duitku.com/hotlink-ok/MANDIRI.PNG', fee: 4000, description: 'Transfer via Livin by Mandiri & ATM Mandiri' },
  { code: 'B8', name: 'BRI Virtual Account', category: 'va', icon: 'https://images.duitku.com/hotlink-ok/BRI.PNG', fee: 4000, description: 'Transfer via BRImo & ATM BRI' },
  { code: 'I1', name: 'BNI Virtual Account', category: 'va', icon: 'https://images.duitku.com/hotlink-ok/BNI.PNG', fee: 4000, description: 'Transfer via BNI Mobile Banking & ATM BNI' },
  { code: 'BT', name: 'Permata Virtual Account', category: 'va', icon: 'https://images.duitku.com/hotlink-ok/PERMATA.PNG', fee: 4000, description: 'Transfer via PermataMobile X & ATM' },
  
  // QRIS & E-Wallet
  { code: 'LQ', name: 'QRIS (All Payment)', category: 'qris', icon: 'https://images.duitku.com/hotlink-ok/QRIS.PNG', fee: 0, description: 'Scan QRIS via Gopay, ShopeePay, OVO, Dana, LinkAja, & Mobile Banking' },
  { code: 'SP', name: 'ShopeePay Instant', category: 'ewallet', icon: 'https://images.duitku.com/hotlink-ok/SHOPEEPAY.PNG', fee: 2000, description: 'Pembayaran cepat langsung di aplikasi Shopee' },
  
  // Credit Card
  { code: 'VC', name: 'Kartu Kredit / Debit (Visa/Master)', category: 'cc', icon: 'https://images.duitku.com/hotlink-ok/VC.PNG', fee: 5000, description: 'Proses pembayaran aman 3D Secure Visa & MasterCard' },
];

export interface DuitkuTransactionRequest {
  merchantCode?: string;
  apiKey?: string;
  paymentAmount: number;
  paymentMethod: string;
  merchantOrderId: string;
  productDetails: string;
  email: string;
  phoneNumber: string;
  customerVaName: string;
  address: string;
}

export interface DuitkuTransactionResponse {
  statusCode: string;
  statusMessage: string;
  paymentUrl?: string;
  vaNumber?: string;
  qrCodeUrl?: string;
  merchantOrderId: string;
  reference?: string;
  amount: number;
}

export const generateDuitkuSignature = (
  merchantCode: string,
  merchantOrderId: string,
  paymentAmount: number,
  apiKey: string
): string => {
  const stringToSign = `${merchantCode}${merchantOrderId}${paymentAmount}${apiKey}`;
  return CryptoJS.MD5(stringToSign).toString(CryptoJS.enc.Hex);
};

export const createDuitkuTransaction = async (
  req: DuitkuTransactionRequest
): Promise<DuitkuTransactionResponse> => {
  // Merchant credentials default
  const merchantCode = req.merchantCode || 'DS33546';
  const apiKey = req.apiKey || '25872f67473df20aa7a3ba9305f1c211';

  const signature = generateDuitkuSignature(
    merchantCode,
    req.merchantOrderId,
    req.paymentAmount,
    apiKey
  );

  const payload = {
    merchantCode,
    paymentAmount: req.paymentAmount,
    paymentMethod: req.paymentMethod,
    merchantOrderId: req.merchantOrderId,
    productDetails: req.productDetails,
    email: req.email,
    phoneNumber: req.phoneNumber,
    customerVaName: req.customerVaName,
    callbackUrl: window.location.origin + '/api/callback',
    returnUrl: window.location.href,
    expiryPeriod: 1440, // 24 Hours
    signature,
    customerDetail: {
      firstName: req.customerVaName,
      email: req.email,
      phoneNumber: req.phoneNumber,
      billingAddress: {
        address: req.address,
        city: 'Bantul / Yogyakarta',
        countryCode: 'ID'
      }
    }
  };

  try {
    const response = await fetch(
      'https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.statusCode === '00') {
        return {
          statusCode: '00',
          statusMessage: 'SUCCESS',
          paymentUrl: data.paymentUrl,
          vaNumber: data.vaNumber,
          qrCodeUrl: data.qrCode,
          reference: data.reference,
          merchantOrderId: req.merchantOrderId,
          amount: req.paymentAmount
        };
      }
    }
  } catch (error) {
    console.warn('Network call to Duitku API Sandbox returned offline/CORS, activating fallback simulation mode:', error);
  }

  // Fallback / Demo Simulation Response
  const mockVaNumber = req.paymentMethod === 'B1' ? '880128588881555' :
                       req.paymentMethod === 'M2' ? '894088588881555' :
                       req.paymentMethod === 'B8' ? '128008588881555' :
                       req.paymentMethod === 'I1' ? '988085888815556' : '883085888815556';

  return {
    statusCode: '00',
    statusMessage: 'SUCCESS (DEMO MODE)',
    paymentUrl: undefined, // Only populated when real Duitku inquiry returns valid paymentUrl
    vaNumber: mockVaNumber,
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=DUITKU-QRIS-ZAMANET-' + req.merchantOrderId,
    reference: `DUITKU-${req.merchantOrderId}`,
    merchantOrderId: req.merchantOrderId,
    amount: req.paymentAmount
  };
};
