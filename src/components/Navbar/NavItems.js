import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavItems = () => {
  return (
    <div>
      <div className="navbarItems">
        <Link to="/home" className="logo">
          Do'er
        </Link>

        <nav>
          <ul className="ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavItems;
