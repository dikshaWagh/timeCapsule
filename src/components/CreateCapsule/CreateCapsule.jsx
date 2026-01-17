import "./CreateCapsule.css";
import Navbar from "../Navbar2/Navbar2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateCapsule() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [unlockDate, setUnlockDate] = useState("");
  const [files, setFiles] = useState([]);

const handleSubmit = async () => {
  try {
    const token = localStorage.getItem("access");
    if (!token) {
      alert("Please login again.");
      return;
    }

    // 1️⃣ REGISTER CAPSULE
    const res = await fetch("http://localhost:8000/api/capsule/capsule/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: title || "Untitled",
        message: message || "",
        email_list: ["test@example.com"], // Must be an array
        release_time: new Date(unlockDate).toISOString() // Must be ISO string
      })
    });

    const data = await res.json(); // Read JSON ONCE

    if (!res.ok) {
      throw new Error(data.detail || "Registration failed");
    }

    const capsuleId = data.id; // Get the ID returned by register

    // 2️⃣ UPLOAD FILES
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file); // Key must be 'file'
      formData.append("id", capsuleId); // Key must be 'id'

      const uploadRes = await fetch("http://localhost:8000/api/capsule/capsule/upload/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
          // IMPORTANT: Do NOT set Content-Type for FormData
        },
        body: formData
      });

      if (!uploadRes.ok) {
        const errorHtml = await uploadRes.text();
        console.error("Server Error:", errorHtml);
        throw new Error("Cloud Storage Error: Check Supabase settings.");
      }
    }

    alert("Capsule created!");
    navigate("/dashboard");

  } catch (err) {
    alert(err.message);
  }
};


  return (
    <div className="create-page">
      <Navbar />
      <div className="back-link" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </div>

      <main className="create-container">
        <h2 className="page-title">Create Capsule</h2>

        <div className="form-card">
          <div className="form-group">
            <label>Capsule Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Write a message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Add Media</label>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files))}
            />
          </div>

          <div className="form-group">
            <label>Unlock Date</label>
            <input
              type="date"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
            />
          </div>

          <button className="lock-btn" onClick={handleSubmit}>
            Lock Capsule
          </button>
        </div>
      </main>
    </div>
  );
}
