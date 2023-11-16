import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[55px] bg-dark px-7 flex justify-between items-center text-white">
      <h3>The Developer Profile</h3>
      <Link to={"/"} className="hover:text-light">
        All Developers
      </Link>
    </nav>
  );
};

export default Navbar;
