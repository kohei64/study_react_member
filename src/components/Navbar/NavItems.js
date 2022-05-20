import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div>
      <div className="navbarItems">
        <Link to="/" className="logo">
          Do'er
        </Link>

        <nav>
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
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
