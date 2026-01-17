import "./Profile.css";
import Navbar from "../Navbar2/Navbar2";

export default function Profile() {
  return (
    <div className="profile-page">
      <Navbar />

      {/* Title */}
      <h1 className="page-title">Your Profile</h1>

      {/* Profile Card */}
      <div className="profile-card">
        {/* Avatar + Name */}
        <div className="profile-header">
          <div className="avatar">
            <span>👤</span>
          </div>
          <h2 className="username">Ronald</h2>
        </div>

        {/* Form */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Ronald Weasly" disabled />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="ronal.23@gmail.com" disabled />
        </div>

        <div className="form-group">
          <label>Note for your future self</label>
          <textarea placeholder="Your message here..." disabled />
        </div>

        <button className="edit-btn">Edit Profile</button>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <p className="stat-label">Member Since</p>
          <p className="stat-value">June 2024</p>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Capsules</p>
          <p className="stat-value">5</p>
        </div>
      </div>

      {/* Logout */}
      <button className="logout-btn">Log out</button>
    </div>
  );
}
