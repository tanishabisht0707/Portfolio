import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div  className="navbar h-full z-20 shadow-xl shadow-gray-900 pl-5 pt-16">
      <div className="logo">
        <p className="text-xl">Tanisha<span  className="text-yellow-500 text-2xl">.dev</span></p>
      </div>
      <div className="nav-links py-10 flex flex-col items-justify">
        <Link   to="Home" spy={true} smooth={true} offset={-100} duration={500}>
        <p className="text-x flex items-center cursor-pointer py-4"><span className="material-symbols-outlined text-2xl">home_pin</span>Home</p>
        </Link>
        <Link to="About-page " spy={true} smooth={true} offset={-100} duration={500}>
        <p className="text-x flex items-center cursor-pointer  py-4">
        <span className="material-symbols-outlined text-2xl">person_pin_circle</span>About</p>
        </Link>
        <Link to="Skills" spy={true} smooth={true} offset={-100} duration={500}>
        <p className="text-x flex items-center cursor-pointer py-4">
        <span className="material-symbols-outlined text-2xl">person_pin_circle</span>Skills</p>
        </Link>
        <Link  to="Projects " spy={true} smooth={true} offset={-100} duration={500}>
        <p className="text-x flex items-center cursor-pointer  py-4">
          <span className="material-symbols-outlined text-2xl">dvr</span>Project</p>
        </Link>
        <Link  to="Contact" spy={true} smooth={true} offset={-100} duration={500}>
        <p className="text-x flex items-center cursor-pointer py-4">
          <span className="material-symbols-outlined text-2xl">forward_to_inbox</span>Contact</p>
        </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
