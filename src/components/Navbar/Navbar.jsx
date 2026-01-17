import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
      const handleEvent=()=>{
      navigate('/login')
    }
  return (
    <nav className="navbar glass">
      <div className="nav-logo">TIME CAPSULE</div>

      <ul className="nav-links">
        <li>About</li>
        <li>How it Works</li>
        <li>Examples</li>
      </ul>

      <div className="nav-actions">
        <button className="nav-link-btn" onClick={handleEvent}>Sign In</button>
        <button className="nav-primary-btn" onClick={handleEvent}>Get started</button>
      </div>
    </nav>
  );
};

export default Navbar;
