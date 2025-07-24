import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (<div>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 p-md-5 rounded bg-white shadow-lg">
      {/* Text Content */}
      <div className="text-center text-md-start mb-4 mb-md-0 w-100 w-md-50">
        <h1 className="display-5 fw-bold text-success">Welcome to EcoSnap</h1>
        <p className="lead text-secondary">
          Track your carbon footprint, take eco challenges, earn rewards, and
          compete on the leaderboard – all while saving the planet!
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/tracker" className="btn btn-success btn-lg px-4 me-md-2">
            Start Tracking
          </Link>
          <Link to="/challenges" className="btn btn-outline-success btn-lg px-4">
            View Challenges
          </Link>
        </div>
      </div>

      {/* Image or Illustration */}
      <div className="w-100 w-md-50 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2907/2907811.png"
          alt="EcoSnap Illustration"
          className="img-fluid"
          style={{ maxHeight: "300px" }}
        />
      </div>
      <br></br></div>
      {/* Features Section */}
<section className="mt-5 p-4 bg-light rounded shadow-sm">
  <h2 className="text-center fw-bold mb-4 text-success">Why Choose EcoSnap?</h2>
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body text-center">
          <i className="bi bi-globe2 fs-1 text-success mb-3"></i>
          <h5 className="card-title fw-bold">Carbon Tracker</h5>
          <p className="card-text">Monitor your daily carbon emissions and understand your impact on the environment.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body text-center">
          <i className="bi bi-lightbulb-fill fs-1 text-success mb-3"></i>
          <h5 className="card-title fw-bold">Eco Challenges</h5>
          <p className="card-text">Complete fun and educational challenges to adopt more sustainable habits.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body text-center">
          <i className="bi bi-award-fill fs-1 text-success mb-3"></i>
          <h5 className="card-title fw-bold">Rewards & Leaderboard</h5>
          <p className="card-text">Earn rewards and compete with friends by making greener choices every day.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="mt-5 p-4 bg-white rounded shadow-sm">
  <h2 className="text-center fw-bold mb-4 text-success">How It Works</h2>
  <div className="row text-center">
    <div className="col-md-4 mb-3">
      <h5 className="fw-bold">1. Sign Up</h5>
      <p>Create your free account to get started with EcoSnap.</p>
    </div>
    <div className="col-md-4 mb-3">
      <h5 className="fw-bold">2. Track & Act</h5>
      <p>Log your daily habits and complete challenges to reduce your carbon footprint.</p>
    </div>
    <div className="col-md-4 mb-3">
      <h5 className="fw-bold">3. Earn & Compete</h5>
      <p>Gain coins, unlock badges, and climb the leaderboard while helping the planet!</p>
    </div>
  </div>
</section>

{/* Call to Action Section */}
<section className="mt-5 p-4 text-center bg-success text-white rounded shadow-lg">
  <h2 className="fw-bold mb-3">Join the Eco Movement Today</h2>
  <p className="lead mb-4">Your small steps today create a greener tomorrow. Be part of the change with EcoSnap!</p>
  <Link to="/login" className="btn btn-light btn-lg fw-bold">Get Started</Link>
</section>

    
   </div> 
  );
};

export default Home;
