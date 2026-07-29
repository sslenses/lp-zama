<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = file_get_contents('php://input');
$requestData = json_decode($input, true);

$merchantCode = isset($requestData['merchantCode']) && !empty($requestData['merchantCode']) 
    ? $requestData['merchantCode'] 
    : 'DS33546';

$apiKey = isset($requestData['apiKey']) && !empty($requestData['apiKey']) 
    ? $requestData['apiKey'] 
    : '25872f67473df20aa7a3ba9305f1c211';

$paymentAmount = isset($requestData['paymentAmount']) ? (int)$requestData['paymentAmount'] : 135000;
$merchantOrderId = isset($requestData['merchantOrderId']) ? $requestData['merchantOrderId'] : 'ZAMA-' . time();

$stringToSign = $merchantCode . $merchantOrderId . $paymentAmount . $apiKey;
$signature = md5($stringToSign);

$payload = [
    'merchantCode' => $merchantCode,
    'paymentAmount' => $paymentAmount,
    'paymentMethod' => isset($requestData['paymentMethod']) ? $requestData['paymentMethod'] : 'BC',
    'merchantOrderId' => $merchantOrderId,
    'productDetails' => isset($requestData['productDetails']) ? $requestData['productDetails'] : 'Internet Zamanet',
    'email' => isset($requestData['email']) ? $requestData['email'] : 'pelanggan@zama.co.id',
    'phoneNumber' => isset($requestData['phoneNumber']) ? $requestData['phoneNumber'] : '08123456789',
    'customerVaName' => isset($requestData['customerVaName']) ? $requestData['customerVaName'] : 'Pelanggan',
    'callbackUrl' => 'https://zama.co.id/api/callback.php',
    'returnUrl' => 'https://zama.co.id',
    'expiryPeriod' => 1440,
    'signature' => $signature,
    'customerDetail' => [
        'firstName' => isset($requestData['customerVaName']) ? $requestData['customerVaName'] : 'Pelanggan',
        'email' => isset($requestData['email']) ? $requestData['email'] : 'pelanggan@zama.co.id',
        'phoneNumber' => isset($requestData['phoneNumber']) ? $requestData['phoneNumber'] : '08123456789',
        'billingAddress' => [
            'address' => isset($requestData['address']) ? $requestData['address'] : 'Sedayu, Bantul',
            'city' => 'Bantul / Yogyakarta',
            'countryCode' => 'ID'
        ]
    ]
];

$ch = curl_init('https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen(json_encode($payload))
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
echo $response;
