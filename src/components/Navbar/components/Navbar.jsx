import React from "react";
import "../styles/navbar.scss";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("");
  return (
    <header className="navbar-container">
      <div className="site-name">TravelMedia.in</div>
      <div className="nav-parent">
        <nav className="navbar">
          <span className="material-icons active" onClick={goToHome}>
            home
          </span>
          <span className="material-icons">notifications</span>
          <span className="material-icons">bookmark</span>
          <span className="material-icons">person</span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
