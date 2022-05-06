import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="mobileIcon" onClick={toggle}>
        {open ? <IoClose /> : <FaBars />}
      </div>
      
      <nav className={open ? 'mobileMenu':'hideMenu'}>
        <ul className="mobileUi">
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
  );
};

export default MobileMenu;
