import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Homepage/Homepage.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LockedCapsule from './components/Locked/Locked.jsx'
import CreateCapsule from './components/CreateCapsule/CreateCapsule.jsx'
import UnlockedCapsule from './components/Unlocked/Unlocked.jsx'
import Profile from './components/Profile/Profile.jsx'
import Settings from './components/Settings/Settings.jsx'
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/locked/:id" element={<ProtectedRoute><LockedCapsule /></ProtectedRoute>} />
      <Route path="/create" element={<ProtectedRoute><CreateCapsule /></ProtectedRoute>} />
      <Route path="/unlocked/:id" element={<ProtectedRoute><UnlockedCapsule /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
    </Routes>
    </>
  )
}

export default App
