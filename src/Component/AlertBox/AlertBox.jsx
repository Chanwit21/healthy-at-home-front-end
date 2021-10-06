import React from 'react';
import './AlertBox.css';

function AlertBox({ alertMessage, color }) {
  return <div className={`alert-box ${color}`}>{alertMessage}</div>;
}

export default AlertBox;
