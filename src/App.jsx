import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Navbar from "./Components/Navbar";
import DashboardNavbar from "./Components/Dashboardnavbar";
import Home from "./Components/Home";
import Converter from "./Components/Converter";
import Currencies from "./Components/Currencies";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const user = localStorage.getItem("user");

  return (
    <BrowserRouter>
      {/* Navbar logic */}
      {user ? <DashboardNavbar /> : <Navbar />}

      <Routes>
        {/* Root route */}
        <Route path="/" element={
          user ? <Navigate to="/home" replace /> : <Navigate to="/" replace />
        } />

        {/* Protected Routes */}
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/converter" element={
          <PrivateRoute>
            <Converter />
          </PrivateRoute>
        } />

        <Route path="/currencies" element={
          <PrivateRoute>
            <Currencies />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;