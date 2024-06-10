import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = () => {
    let converted;
    if (fromCurrency === 'USD' && toCurrency === 'INR') {
      converted = amount * 83.50; // 1 USD = 83.50 INR
    } else if (fromCurrency === 'INR' && toCurrency === 'USD') {
      converted = amount / 83.50; // 1 INR = 0.01196 USD
    }
    setConvertedAmount(converted);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </label>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <p>
          Converted Amount: {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
