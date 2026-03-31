import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stylings/Login.css";

function Login({ onBack, setShowNavbarLogin }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login clicked with email:", email);
    
    // Pattern specifically for @gmail.com
    let gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email === "") {
      window.alert("Please enter your Gmail address");
      return;
    }
    
    if (!gmailPattern.test(email)) {
      window.alert("Please enter a valid Gmail address (username@gmail.com)");
      return;
    }
    
    // If validation passes
    localStorage.setItem("user", email);
    console.log("User saved:", localStorage.getItem("user"));
    navigate("/home");
    window.location.reload();
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Login</h2>
        <p className="text-center text-muted mb-4">
          Enter your Gmail address to continue
        </p>
        
        <div className="mb-3">
          <label className="form-label">Gmail Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleLogin();
              }
            }}
          />
          <small className="text-muted mt-2 d-block">
            Only @gmail.com addresses are allowed
          </small>
        </div>

        <button 
          className="btn btn-primary w-100 mb-3"
          onClick={handleLogin}
        >
          Login
        </button>

        <button 
          className="btn btn-outline-light w-100"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Login;