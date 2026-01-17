import "./Settings.css";
import Navbar from "../Navbar2/Navbar2";
export default function Settings() {
  return (
    <div className="settings-page">
      <Navbar />
      <h1 className="settings-title">Settings</h1>
      {/* Privacy & Security */}
      <section className="settings-card">
        <div className="card-header">
          <div className="icon-circle">
            🔒
          </div>
          <h2>Privacy and Security</h2>
        </div>

        <div className="setting-row">
          <div>
            <p className="setting-label">Capsule Privacy</p>
            <p className="setting-desc">
              Keep all capsules private and encrypted
            </p>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-row">
          <div>
            <p className="setting-label">Auto-lock security</p>
            <p className="setting-desc">
              Require re-authentication after inactivity
            </p>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <button className="btn btn-outline full-width">
          Change Password
        </button>
      </section>

      {/* Capsule Preferences */}
      <section className="settings-card">
        <div className="card-header">
          <div className="icon-circle">
            📦
          </div>
          <h2>Capsule Preferences</h2>
        </div>

        <div className="select-group">
          <label>Default Unlock Duration</label>
          <select>
            <option>1 Month</option>
            <option>3 Months</option>
            <option>6 Months</option>
          </select>
        </div>

        <div className="select-group">
          <label>Reminder before lock</label>
          <select>
            <option>1 Day Before</option>
            <option>3 Days Before</option>
            <option>1 Week Before</option>
          </select>
        </div>
      </section>

      {/* Account Actions */}
      <section className="settings-card">
        <div className="card-header">
          <div className="icon-circle danger">
            ⚠️
          </div>
          <h2>Account Actions</h2>
        </div>

        <button className="btn btn-outline full-width">
          ⬇️ Export your data
        </button>

        <button className="btn btn-danger full-width">
          🗑 Delete Account
        </button>
      </section>
    </div>
  );
}
