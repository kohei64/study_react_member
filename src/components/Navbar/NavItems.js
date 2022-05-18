import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

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
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavItems;
