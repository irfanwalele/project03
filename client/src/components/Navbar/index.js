import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-sm navbar-md navbar-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="size50" src={'https://i.ibb.co/cYW1rJ9/Streamline-Logo.png'} /> <span className="colum-blue">Streamline</span>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link> */}
          </li>
          <li className="nav-item colum-blue">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login/Register
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
