import React from "react";
import logos from "../assets/pwc-logo.png";
import "../Style/Header.css";
const Header = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <img src={logos} alt="logo" />
        </div>
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#ea580c" }}
          >
            <div className="icon-circle">
              <i className="fas fa-user"></i>
            </div>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="/">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
