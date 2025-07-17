import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QRCodeInput = ({ onGenerate }) => {
  const [input, setInput] = useState('');

  const validateInput = (value) => {
    if (!/^[A-Z0-9]{10}$/.test(value)) return false;

    const firstTwo = value.slice(0, 2);
    const nextTwo = value.slice(2, 4);
    const nextTwo2 = value.slice(4, 6);
    const nextTwo3 = value.slice(6, 8);
    // last two: value.slice(8, 10) (any)

    if (!['23', '24', '25'].includes(firstTwo)) return false;
    if (!['B2', 'JN', '6Q'].includes(nextTwo)) return false;
    if (!['1A', '5A'].includes(nextTwo2)) return false;
    if (!['42', '43', '44', '45', '46'].includes(nextTwo3)) return false;

    return true;
  };

  const handleClick = () => {
    if (validateInput(input)) {
      onGenerate(input);
    } else {
      toast.error('wrong entiry');
    }
  };

  return (
    <div className="container text-light">
      <div className="mb-3">
        <label htmlFor="qrInput" className="form-label">Enter text to generate QR Code:</label>
        <input
          type="text"
          className="form-control"
          id="qrInput"
          value={input}
          onChange={e => setInput(e.target.value.toUpperCase())}
          placeholder="Enter code"
          maxLength={10}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        Generate QR Code
      </button>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default QRCodeInput;