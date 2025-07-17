import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = ({ value }) => (
  <div>
    <QRCodeCanvas value={value} size={200} />
  </div>
);

export default QRCodeDisplay;