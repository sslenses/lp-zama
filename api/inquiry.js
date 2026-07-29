import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    merchantCode = process.env.DUITKU_MERCHANT_CODE || 'DS33546',
    apiKey = process.env.DUITKU_API_KEY || '25872f67473df20aa7a3ba9305f1c211',
    paymentAmount,
    paymentMethod,
    merchantOrderId,
    productDetails,
    email,
    phoneNumber,
    customerVaName,
    address
  } = req.body;

  const stringToSign = `${merchantCode}${merchantOrderId}${paymentAmount}${apiKey}`;
  const signature = crypto.createHash('md5').update(stringToSign).digest('hex');

  const payload = {
    merchantCode,
    paymentAmount,
    paymentMethod,
    merchantOrderId,
    productDetails,
    email,
    phoneNumber,
    customerVaName,
    callbackUrl: `${req.headers.origin || 'https://zama.co.id'}/api/callback`,
    returnUrl: `${req.headers.origin || 'https://zama.co.id'}`,
    expiryPeriod: 1440,
    signature,
    customerDetail: {
      firstName: customerVaName,
      email,
      phoneNumber,
      billingAddress: {
        address,
        city: 'Bantul / Yogyakarta',
        countryCode: 'ID'
      }
    }
  };

  try {
    const response = await fetch('https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
