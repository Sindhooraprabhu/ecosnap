import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CarbonTracker from "./pages/CarbonTracker";
import Challenges from "./pages/Challenges";
import Rewards from "./pages/Rewards";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AcceptChallenge from "./pages/AcceptChallenge";
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 w-100 bg-light text-dark">
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold" to="/">EcoSnap</Link>

      {/* Toggle button for mobile view */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tracker">Carbon Tracker</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/challenges">Challenges</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rewards">Rewards</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



        {/* Main content */}
        <main className="container py-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<CarbonTracker />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/accept-challenge/:id" element={<AcceptChallenge />} />

          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-success text-white text-center py-2">
          © 2025 EcoSnap. Go green, earn rewards!
        </footer>
      </div>
    </Router>
  );
};

export default App;
