// import "./Unlocked.css";
// import Navbar from "../Navbar2/Navbar2";
// import { useNavigate } from "react-router-dom";
// export default function UnlockedCapsule() {
//   const navigate = useNavigate();
//   const handleEvent = () => {
//     navigate("/dashboard");
//   };
//   return (
//     <div className="unlocked-page">
//       <Navbar />
//       <div className="back-link" onClick={handleEvent}>← Back to Dashboard</div>

//       <h2 className="capsule-title">Letter to my future self</h2>

//       <div className="capsule-card">
//         <div className="unlock-info">
//           <div className="unlock-icon">🔓</div>
//           <p className="unlock-label">Unlocked on</p>
//           <h3 className="unlock-date">
//             Thursday, January 1, 2026
//           </h3>
//         </div>

//         <div className="content-section">
//           <p className="section-title">Your Message</p>
//           <div className="message-box">

//           </div>
//         </div>

//         <div className="content-section">
//           <p className="section-title">Preserved Moments</p>

//           <div className="media-grid">
//             <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
//             <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
//             <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./Unlocked.css";
import Navbar from "../Navbar2/Navbar2";
import { useNavigate, useLocation } from "react-router-dom";

export default function UnlockedCapsule() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Extract the capsule data passed from Dashboard
  const { capsule } = location.state || {};

  const handleEvent = () => {
    navigate("/dashboard");
  };

  // Helper to format the date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Base URL for Supabase storage images
  // Replace with your actual project URL from image_bc1008.png
  const STORAGE_BASE_URL = "https://wntyjduwaxbrqgynxyre.supabase.co/storage/v1/object/public/capsules/";

  return (
    <div className="unlocked-page">
      <Navbar />
      <div className="back-link" onClick={handleEvent}>← Back to Dashboard</div>

      {/* Dynamic Title */}
      <h2 className="capsule-title">{capsule?.title || "Your Memory"}</h2>

      <div className="capsule-card">
        <div className="unlock-info">
          <div className="unlock-icon">🔓</div>
          <p className="unlock-label">Unlocked on</p>
          <h3 className="unlock-date">
            {capsule ? formatDate(capsule.release_time) : "Loading..."}
          </h3>
        </div>

        {/* Dynamic Message */}
        <div className="content-section">
          <p className="section-title">Your Message</p>
          <div className="message-box">
            {capsule?.message || "No message preserved for this capsule."}
          </div>
        </div>

        {/* Dynamic Media from Supabase */}
        <div className="content-section">
          <p className="section-title">Preserved Moments</p>
          <div className="media-grid">
            {capsule?.media?.file?.length > 0 ? (
              capsule.media.file.map((file, index) => (
                <img 
                  key={index} 
                  src={`${STORAGE_BASE_URL}${file.path}`} 
                  alt={file.name} 
                  onError={(e) => e.target.style.display = 'none'} // Hide broken images
                />
              ))
            ) : (
              <p className="no-media">No images were uploaded to this capsule.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}