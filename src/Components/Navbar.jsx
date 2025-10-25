import React, { useState } from "react";
import { Navlinks } from "../constants.js";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger & close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-5 fixed top-0 backdrop-blur-md z-10 w-full text-third sm:px-15">
      <div className="flex items-center justify-end">
        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-10 font-semibold">
          {Navlinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.src}
                className="hover:text-fourth transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl max-sm:px-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col items-end px-5 gap-4 mt-4 font-semibold bg-gradient-to-r from-third/40 to-white/30 backdrop-blur-md p-5">
          {Navlinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.src}
                className="block hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)} // close on click
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
