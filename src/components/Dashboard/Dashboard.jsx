import { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar2/Navbar2";
import { Plus, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem("access");

  fetch("http://localhost:8000/api/capsule/capsule/list/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setCapsules(data))
    .catch((err) => console.error(err));
}, []);


  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-content">
        <div className="hero-card">
          <div className="card-text">
            <h2>Your next memory unlocks soon</h2>
            <p>You’ve preserved {capsules.length} moments so far</p>
          </div>

          <button className="create-btn" onClick={() => navigate("/create")}>
            Create New Capsule <Plus size={20} />
          </button>
        </div>

        <div className="capsule-grid">
          {capsules.map((capsule) => (
            <div key={capsule.id} className="capsule-outer">
              <div className="capsule-inner">
                <div className="capsule-header">
                  <h3>{capsule.title}</h3>
                  <div className="lock-badge">
                    <Lock size={28} />
                  </div>
                </div>

                <div className="capsule-date">
                  📅 {new Date(capsule.release_time).toDateString()}
                </div>
              </div>

              <div className="capsule-footer">
                Unlocks on {new Date(capsule.release_time).toDateString()
}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
