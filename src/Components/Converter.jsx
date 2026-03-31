import { useState } from "react";
import "./Stylings/Converterstyle.css";

const exchangeRates = {
  USD: 1,
  INR: 83.12,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 150.23,
  CAD: 1.35,
  AUD: 1.52,
  CNY: 7.21,
  SGD: 1.34,
  CHF: 0.89
};

function Converter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validateAmount = (value) => {
    if (value === "" || value === null) {
      setError("Please enter an amount");
      return false;
    }
    if (isNaN(value) || value <= 0) {
      setError("Please enter a valid positive number");
      return false;
    }
    setError("");
    return true;
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value !== "") {
      validateAmount(parseFloat(value));
    } else {
      setError("");
    }
  };

  const convert = () => {
    const numAmount = parseFloat(amount);
    
    if (!validateAmount(numAmount)) {
      return;
    }

    const rateFrom = exchangeRates[fromCurrency];
    const rateTo = exchangeRates[toCurrency];

    const convertedAmount = (numAmount / rateFrom) * rateTo;
    setResult(convertedAmount.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    if (result) {
      // Recalculate if there was a previous result
      setTimeout(() => convert(), 0);
    }
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1 className="converter-title">💱 Currency Converter</h1>
        <p className="converter-subtitle">Convert between major world currencies</p>

        <div className="input-group">
          <label className="input-label">Amount</label>
          <input
            type="number"
            className="amount-input"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            step="any"
          />
          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="currency-group">
          <div className="currency-select">
            <label className="input-label">From</label>
            <select
              className="currency-select-input"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency} - {getCurrencyName(currency)}
                </option>
              ))}
            </select>
          </div>

          <button className="swap-button" onClick={swapCurrencies}>
            ⇄
          </button>

          <div className="currency-select">
            <label className="input-label">To</label>
            <select
              className="currency-select-input"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency} - {getCurrencyName(currency)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="convert-button" onClick={convert}>
          Convert Now
        </button>

        {result && (
          <div className="result-container">
            <div className="result-card">
              <p className="result-label">Converted Amount</p>
              <h2 className="result-value">
                {amount} {fromCurrency} = {result} {toCurrency}
              </h2>
              <p className="result-rate">
                Exchange Rate: 1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to get full currency names
function getCurrencyName(code) {
  const currencyNames = {
    USD: "US Dollar",
    INR: "Indian Rupee",
    EUR: "Euro",
    GBP: "British Pound",
    JPY: "Japanese Yen",
    CAD: "Canadian Dollar",
    AUD: "Australian Dollar",
    CNY: "Chinese Yuan",
    SGD: "Singapore Dollar",
    CHF: "Swiss Franc"
  };
  return currencyNames[code] || code;
}

export default Converter;