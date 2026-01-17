import "./Navbar2.css";
import { Home, Settings, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

/* ALL NAV ITEMS IN ONE CONFIG */
const navItems = [
  {
    label: "Home",
    icon: Home,
    type: "primary",
    path: "/dashboard",
  },
  {
    label: "Settings",
    icon: Settings,
    type: "icon",
    path: "/settings",
  },
  {
    label: "Profile",
    icon: User,
    type: "icon",
    path: "/profile",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="navbar2">
      <div className="navbar-inner2">

        {/* LEFT : LOGO */}
        <div
          className="navbar-logo2"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          TIME CAPSULE
        </div>

        {/* RIGHT : ALL ACTIONS */}
        <div className="navbar-actions2">
{navItems.map((item, index) => {
  const Icon = item.icon;

  const isActive =
    item.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.path);

  if (item.type === "primary") {
    return (
      <button
        key={index}
        className={`nav-pill2 ${isActive ? "active2" : ""}`}
        onClick={() => navigate(item.path)}
      >
        <Icon size={16} />
        {item.label}
      </button>
    );
  }

  return (
    <button
      key={index}
      className={`icon-btn2 ${isActive ? "active-icon" : ""}`}
      onClick={() => navigate(item.path)}
      aria-label={item.label}
    >
      <Icon size={18} />
    </button>
  );
})}

        </div>

      </div>
    </header>
  );
};

export default Navbar;
