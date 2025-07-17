import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import logo from '../assets/krl.png'; // Adjust the path as necessary

const QRCodeDisplay = ({ value }) => (
  <div style={{ background: '#222', padding: '16px', borderRadius: '12px', display: 'inline-block' }}>
    <QRCodeCanvas
      value={value}
      size={250}
      bgColor="#222"
      fgColor="#fff"
      imageSettings={{
        src: logo,
        x: undefined,
        y: undefined,
        height: 50,
        width: 75,
        opacity: 1,
        excavate: true,
      }}
    />
  </div>
);

export default QRCodeDisplay;