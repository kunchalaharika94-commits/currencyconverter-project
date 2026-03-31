import { Link, useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <h3 className="text-white mb-0">Currency Converter</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/converter">
                Converter
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/currencies">
                Know Other Currencies
              </Link>
            </li>

            <li className="nav-item">
              <button 
                className="btn btn-outline-light ms-2" 
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;