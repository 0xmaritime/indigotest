import { useState } from 'react';

export default function useExchangeRate() {
  // Exchange rates
  const ROBUX_TO_USD = 0.0035; // 1 Robux = 0.0035 USD
  const USD_TO_ROBUX = 0.8; // 1 USD cent = 0.8 Robux
  
  const [robux, setRobux] = useState('');
  const [usd, setUsd] = useState('');
  
  const convertRobuxToUsd = (robuxAmount) => {
    if (!robuxAmount || isNaN(robuxAmount)) return '';
    return (parseFloat(robuxAmount) * ROBUX_TO_USD).toFixed(2);
  };
  
  const convertUsdToRobux = (usdAmount) => {
    if (!usdAmount || isNaN(usdAmount)) return '';
    return Math.round(parseFloat(usdAmount) * 100 * USD_TO_ROBUX);
  };
  
  const handleRobuxChange = (e) => {
    const value = e.target.value;
    setRobux(value);
    setUsd(convertRobuxToUsd(value));
  };
  
  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    setRobux(convertUsdToRobux(value));
  };
  
  return {
    robux,
    usd,
    handleRobuxChange,
    handleUsdChange,
    ROBUX_TO_USD,
    USD_TO_ROBUX,
    convertRobuxToUsd,
    convertUsdToRobux
  };
}