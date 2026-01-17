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
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/locked" element={<LockedCapsule />} />
      <Route path="/create" element={<CreateCapsule />} />
      <Route path="/unlocked" element={<UnlockedCapsule />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </>
  )
}

export default App
