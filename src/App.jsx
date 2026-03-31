import { HashRouter,Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DashboardNavbar from "./Components/Dashboardnavbar";
import Home from "./Components/Home";
import Converter from "./Components/Converter";
import Currencies from "./Components/Currencies";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login"; // ✅ import Login

function App() {
  const user = localStorage.getItem("user");

  return (
    <>
      {user ? <DashboardNavbar /> : <Navbar />}
      <HashRouter>
      <Routes>
        {/* Root: redirect based on login status */}
        <Route path="/" element={
          user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        } />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/home" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />
        <Route path="/converter" element={
          <PrivateRoute><Converter /></PrivateRoute>
        } />
        <Route path="/currencies" element={
          <PrivateRoute><Currencies /></PrivateRoute>
        } />
      </Routes>
        </HashRouter>
    </>
  );
}

export default App;
