import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  /* ================= LOGIN ================= */
const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.detail || "Login failed");
      return;
    }

    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    navigate("/profile");
  } catch (err) {
    alert("Server error");
  }
};




  /* ================= SIGNUP ================= */
const handleSignup = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/auth/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.detail || JSON.stringify(data));
      return;
    }

    alert("Signup successful. Please login.");
    setIsLogin(true);
  } catch (err) {
    alert("Server error");
  }
};



  return (
    <div className="login-wrapper">
      <h1 className="title">TIME CAPSULE</h1>
      <p className="auth-subtitle">Preserve moments for your future self</p>

      <div className="login-card">
        {/* Tabs */}
        <div className="tab-buttons">
          <button
            className={`tab ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={`tab ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Name (Signup only) */}
        {!isLogin && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="login-btn"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="signup-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Log In</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
