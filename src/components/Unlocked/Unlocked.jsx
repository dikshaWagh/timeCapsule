import "./Unlocked.css";
import Navbar from "../Navbar2/Navbar2";
import { useNavigate } from "react-router-dom";
export default function UnlockedCapsule() {
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/dashboard");
  };
  return (
    <div className="unlocked-page">
      <Navbar />
      {/* Back */}
      <div className="back-link" onClick={handleEvent}>← Back to Dashboard</div>

      {/* Title */}
      <h2 className="capsule-title">Letter to my future self</h2>

      {/* Main Card */}
      <div className="capsule-card">
        {/* Unlock Info */}
        <div className="unlock-info">
          <div className="unlock-icon">🔓</div>
          <p className="unlock-label">Unlocked on</p>
          <h3 className="unlock-date">
            Thursday, January 1, 2026
          </h3>
        </div>

        {/* Message */}
        <div className="content-section">
          <p className="section-title">Your Message</p>
          <div className="message-box">
            {/* Message text comes here */}
          </div>
        </div>

        {/* Media */}
        <div className="content-section">
          <p className="section-title">Preserved Moments</p>

          <div className="media-grid">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default UnlockedCapsule;