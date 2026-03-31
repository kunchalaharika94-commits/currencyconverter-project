import { useState } from "react";
import "./Stylings/Currency.css";

// Country Data with flags, currency info, and images
const countriesData = [
  {
    id: 1,
    name: "United States",
    flag: "🇺🇸",
    currencyCode: "USD",
    currencyName: "US Dollar",
    currencySymbol: "$",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/e/e8/US_notes_series_2009_%26_2013_obverse.jpg",
    currencyInfo: {
      description: "The United States dollar is the official currency of the United States and its territories. It is the world's primary reserve currency and is used in international transactions.",
      symbol: "$",
      code: "USD",
      issuer: "Federal Reserve System",
      coinsAndNotes: "Coins: 1¢, 5¢, 10¢, 25¢, 50¢, $1 | Notes: $1, $2, $5, $10, $20, $50, $100",
      interestingFact: "The US dollar is the most traded currency in the foreign exchange market.",
      exchangeRate: "1 USD = 83 INR (approx)"
    }
  },
  {
    id: 2,
    name: "India",
    flag: "🇮🇳",
    currencyCode: "INR",
    currencyName: "Indian Rupee",
    currencySymbol: "₹",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Indian_rupee_symbol.jpg",
    currencyInfo: {
      description: "The Indian rupee is the official currency of India. The rupee is named after the silver coin 'rupiya' issued by Sher Shah Suri in the 16th century.",
      symbol: "₹",
      code: "INR",
      issuer: "Reserve Bank of India",
      coinsAndNotes: "Coins: ₹1, ₹2, ₹5, ₹10, ₹20 | Notes: ₹10, ₹20, ₹50, ₹100, ₹200, ₹500, ₹2000",
      interestingFact: "The Indian rupee symbol ₹ was designed by Udaya Kumar and was adopted in 2010.",
      exchangeRate: "1 USD = 83 INR (approx)"
    }
  },
  {
    id: 3,
    name: "United Kingdom",
    flag: "🇬🇧",
    currencyCode: "GBP",
    currencyName: "British Pound Sterling",
    currencySymbol: "£",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Bank_of_England_%C2%A350_polymer_2021.jpg",
    currencyInfo: {
      description: "The pound sterling is the official currency of the United Kingdom. It is the oldest currency still in use today.",
      symbol: "£",
      code: "GBP",
      issuer: "Bank of England",
      coinsAndNotes: "Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2 | Notes: £5, £10, £20, £50",
      interestingFact: "The pound sterling is the fourth most traded currency in the foreign exchange market.",
      exchangeRate: "1 GBP = 105 INR (approx)"
    }
  },
  {
    id: 4,
    name: "European Union",
    flag: "🇪🇺",
    currencyCode: "EUR",
    currencyName: "Euro",
    currencySymbol: "€",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Euro_banknotes_%28first_series%29.jpg",
    currencyInfo: {
      description: "The euro is the official currency of the European Union and is used by 19 of its 27 member states. It is the second most traded currency in the world.",
      symbol: "€",
      code: "EUR",
      issuer: "European Central Bank",
      coinsAndNotes: "Coins: 1c, 2c, 5c, 10c, 20c, 50c, €1, €2 | Notes: €5, €10, €20, €50, €100, €200, €500",
      interestingFact: "The euro was introduced as an accounting currency in 1999 and physical coins and notes in 2002.",
      exchangeRate: "1 EUR = 89 INR (approx)"
    }
  },
  {
    id: 5,
    name: "Japan",
    flag: "🇯🇵",
    currencyCode: "JPY",
    currencyName: "Japanese Yen",
    currencySymbol: "¥",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/10000_yen_2004_obverse.jpg",
    currencyInfo: {
      description: "The Japanese yen is the official currency of Japan. It is the third most traded currency in the foreign exchange market.",
      symbol: "¥",
      code: "JPY",
      issuer: "Bank of Japan",
      coinsAndNotes: "Coins: ¥1, ¥5, ¥10, ¥50, ¥100, ¥500 | Notes: ¥1000, ¥2000, ¥5000, ¥10000",
      interestingFact: "The yen was introduced in 1871 as part of the Meiji government's modernization of Japan's monetary system.",
      exchangeRate: "1 JPY = 0.56 INR (approx)"
    }
  },
  {
    id: 6,
    name: "Canada",
    flag: "🇨🇦",
    currencyCode: "CAD",
    currencyName: "Canadian Dollar",
    currencySymbol: "$",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Canadian_$100_polymer_banknote_2011_obverse.jpg",
    currencyInfo: {
      description: "The Canadian dollar is the official currency of Canada. It is the fifth most held reserve currency in the world.",
      symbol: "$",
      code: "CAD",
      issuer: "Bank of Canada",
      coinsAndNotes: "Coins: 5¢, 10¢, 25¢, 50¢, $1, $2 | Notes: $5, $10, $20, $50, $100",
      interestingFact: "The Canadian dollar is nicknamed the 'loonie' because of the loon bird on the $1 coin.",
      exchangeRate: "1 CAD = 61 INR (approx)"
    }
  },
  {
    id: 7,
    name: "Australia",
    flag: "🇦🇺",
    currencyCode: "AUD",
    currencyName: "Australian Dollar",
    currencySymbol: "$",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Australian_$100_banknote.jpg",
    currencyInfo: {
      description: "The Australian dollar is the official currency of Australia and its territories. It was introduced in 1966.",
      symbol: "$",
      code: "AUD",
      issuer: "Reserve Bank of Australia",
      coinsAndNotes: "Coins: 5c, 10c, 20c, 50c, $1, $2 | Notes: $5, $10, $20, $50, $100",
      interestingFact: "Australia was the first country to introduce polymer banknotes.",
      exchangeRate: "1 AUD = 54 INR (approx)"
    }
  },
  {
    id: 8,
    name: "China",
    flag: "🇨🇳",
    currencyCode: "CNY",
    currencyName: "Chinese Yuan",
    currencySymbol: "¥",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/4/4b/100_renminbi_2005_obverse.jpg",
    currencyInfo: {
      description: "The renminbi is the official currency of the People's Republic of China. The yuan is the basic unit of the renminbi.",
      symbol: "¥",
      code: "CNY",
      issuer: "People's Bank of China",
      coinsAndNotes: "Coins: ¥0.1, ¥0.5, ¥1 | Notes: ¥1, ¥5, ¥10, ¥20, ¥50, ¥100",
      interestingFact: "The renminbi is the 5th most traded currency in the world.",
      exchangeRate: "1 CNY = 11.5 INR (approx)"
    }
  },
  {
    id: 9,
    name: "Switzerland",
    flag: "🇨🇭",
    currencyCode: "CHF",
    currencyName: "Swiss Franc",
    currencySymbol: "Fr",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/CHF_1000_%28banknote%29_2019.jpg",
    currencyInfo: {
      description: "The Swiss franc is the official currency of Switzerland and Liechtenstein. It is known for its stability.",
      symbol: "Fr",
      code: "CHF",
      issuer: "Swiss National Bank",
      coinsAndNotes: "Coins: 5c, 10c, 20c, 50c, Fr.1, Fr.2, Fr.5 | Notes: Fr.10, Fr.20, Fr.50, Fr.100, Fr.200, Fr.1000",
      interestingFact: "The Swiss franc is considered a safe-haven currency.",
      exchangeRate: "1 CHF = 94 INR (approx)"
    }
  },
  {
    id: 10,
    name: "Singapore",
    flag: "🇸🇬",
    currencyCode: "SGD",
    currencyName: "Singapore Dollar",
    currencySymbol: "$",
    currencyImage: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Singapore_$100_1999_banknote.jpg",
    currencyInfo: {
      description: "The Singapore dollar is the official currency of Singapore. It is one of the strongest currencies in Asia.",
      symbol: "$",
      code: "SGD",
      issuer: "Monetary Authority of Singapore",
      coinsAndNotes: "Coins: 5c, 10c, 20c, 50c, $1 | Notes: $2, $5, $10, $50, $100, $1000, $10000",
      interestingFact: "Singapore dollar notes feature portraits of Singapore's first president, Yusof bin Ishak.",
      exchangeRate: "1 SGD = 62 INR (approx)"
    }
  }
];

function Currencies() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  };

  return (
    <div className="currencies-container">
      <div className="currencies-header">
        <h1>🌍 World Currencies</h1>
        <p>Click on any country flag to learn about its currency</p>
      </div>

      <div className="countries-grid">
        {countriesData.map((country) => (
          <div 
            key={country.id} 
            className="country-card"
            onClick={() => handleCountryClick(country)}
          >
            <div className="country-flag">
              <span className="flag-emoji">{country.flag}</span>
            </div>
            <div className="country-info">
              <h3 className="country-name">{country.name}</h3>
              <p className="currency-code">{country.currencyCode}</p>
              <p className="currency-name">{country.currencyName}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying currency details */}
      {showModal && selectedCountry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <span className="modal-flag">{selectedCountry.flag}</span>
              <h2 className="modal-country-name">{selectedCountry.name}</h2>
              <p className="modal-currency-code">{selectedCountry.currencyCode}</p>
            </div>

            <div className="modal-body">
              {/* Currency Image Section */}
              <div className="currency-image-section">
                <h3>💰 {selectedCountry.currencyName} ({selectedCountry.currencySymbol})</h3>
                <img 
                  src={selectedCountry.currencyImage} 
                  alt={`${selectedCountry.currencyName} banknotes`}
                  className="currency-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x300/667eea/ffffff?text=Currency+Image";
                  }}
                />
                <p className="image-caption">Banknotes of {selectedCountry.currencyName}</p>
              </div>

              {/* Currency Information Section */}
              <div className="currency-info-section">
                <div className="info-card">
                  <h4>📋 Description</h4>
                  <p>{selectedCountry.currencyInfo.description}</p>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <strong>💵 Symbol:</strong>
                    <span>{selectedCountry.currencySymbol}</span>
                  </div>
                  <div className="info-item">
                    <strong>🔤 Code:</strong>
                    <span>{selectedCountry.currencyCode}</span>
                  </div>
                  <div className="info-item">
                    <strong>🏦 Issuer:</strong>
                    <span>{selectedCountry.currencyInfo.issuer}</span>
                  </div>
                  <div className="info-item">
                    <strong>💱 Exchange Rate:</strong>
                    <span>{selectedCountry.currencyInfo.exchangeRate}</span>
                  </div>
                </div>

                <div className="info-card">
                  <h4>🪙 Coins & Banknotes</h4>
                  <p>{selectedCountry.currencyInfo.coinsAndNotes}</p>
                </div>

                <div className="info-card interesting-fact">
                  <h4>✨ Interesting Fact</h4>
                  <p>{selectedCountry.currencyInfo.interestingFact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Currencies;