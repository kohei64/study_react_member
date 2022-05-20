import React from "react";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavItems />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
