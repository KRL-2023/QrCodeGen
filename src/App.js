import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCodeInput from './components/QRCodeInput';
import QRCodeDisplay from './components/QRCodeDisplay';
import './App.css';

function App() {
  const [qrValue, setQrValue] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = (value) => {
    setQrValue(value);
    setShowQR(!!value);
  };

  return (
    <div className="App bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className={`main-content ${showQR ? 'blurred' : ''}`}>
        <h1 className="mb-4">QR Code Generator</h1>
        <QRCodeInput onGenerate={handleGenerate} />
      </div>
      {showQR && (
        <div className="qr-fade-in position-absolute top-50 start-50 translate-middle">
          <QRCodeDisplay value={qrValue} />
        </div>
      )}
    </div>
  );
}

export default App;