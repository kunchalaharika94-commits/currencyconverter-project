import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/converter.mp4";
import Login from "./Login";
import "./Stylings/Login.css";

function Navbar() {
  const [coins, setCoins] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const newCoin = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setCoins((prev) => [...prev, newCoin]);

    setTimeout(() => {
      setCoins((prev) =>
        prev.filter((coin) => coin.id !== newCoin.id)
      );
    }, 800);
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  return (
    <div className="video-container" onMouseMove={handleClick}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="background-video"
        onError={handleVideoError}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background if video fails */}
      {videoError && <div className="video-fallback"></div>}

      <div className="content">
        {!showLogin ? (
          <div className="welcome-screen">
            <div className="cta">
              <h1>Welcome to Currency Converter</h1>
              <h3>🚀 Start Converting Now</h3>
              <p>Login and explore real-time currency conversion instantly!</p>
            </div>

            <div className="text-center mt-4">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => setShowLogin(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        ) : (
          <Login onBack={() => setShowLogin(false)} />
        )}

        {coins.map((coin) => (
          <span
            key={coin.id}
            className="coin"
            style={{
              left: coin.x,
              top: coin.y,
            }}
          >
            💰
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;