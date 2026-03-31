import { useEffect, useState } from "react";
import "./Stylings/Home.css";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`home-container ${visible ? "show" : ""}`}>
      
      <h1 className="title">💱 Currency Converter</h1>

      <p className="intro">
        A currency converter is a powerful financial tool that allows users to 
        convert one country's currency into another using real-time exchange rates.
        It is widely used by travelers, businesses, and investors around the world.
      </p>

      {/* HISTORY SECTION */}
      <div className="section">
        <h2>📜 History of Currency Exchange</h2>
        <p>
          Currency exchange dates back thousands of years to ancient civilizations 
          like Mesopotamia and Egypt, where barter systems were gradually replaced 
          by standardized coins made of gold and silver.
        </p>
        <p>
          In the modern era, global currency systems evolved significantly after 
          the Bretton Woods Agreement in 1944, which established exchange rate rules. 
          Today, currencies float freely and are influenced by market demand, 
          international trade, and geopolitical events.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className="section">
        <h2>⚡ Key Features</h2>
        <ul>
          <li>🌍 Supports 150+ global currencies</li>
          <li>📊 Real-time exchange rates</li>
          <li>🔄 Instant conversion</li>
          <li>📱 Mobile-friendly design</li>
          <li>🔐 Secure and reliable</li>
        </ul>
      </div>

      {/* USE CASES */}
      <div className="section">
        <h2>🎯 Why Use a Currency Converter?</h2>
        <p>
          Currency converters are essential for international travel, online 
          shopping, stock trading, and business transactions. They help users 
          understand the value of money across borders instantly.
        </p>
      </div>

      
    </div>
  );
}

export default Home;