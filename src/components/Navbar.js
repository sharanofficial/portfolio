import React, { useState } from "react";
import logob from "../Images/logo-b.svg";
import logow from "../Images/logo-w.svg";
import { Link } from "react-scroll";
import "./navbar.css";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { navLink, setNavLink, navbar, setNavbar } = useGlobalContext();
  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className={` ${navbar ? "navbar navbar-bg" : "navbar"}`}>
        <div className="nav-center">
          <div className="nav-header">
            <a href="#" className="logo">
              <img src={navbar ? logow : logob} alt="logo" />
            </a>
            <div className="nav-btn" onClick={() => setNavLink(!navLink)}>
              <div className={`hamburger ${navLink && "hide-bars"}`}>
                <span className={`bar bar-1 ${navbar && "barw"}`}></span>
                <span className={`bar bar-2 ${navbar && "barw"}`}></span>
                <span className={`bar bar-3 ${navbar && "barw"}`}></span>
              </div>
              <div className={`cross ${navLink ? "show-close" : "hide-close"}`}>
                <span className={`bar cross-1 ${navLink && "barw"}`}></span>
                <span className={`bar cross-2 ${navLink && "barw"}`}></span>
              </div>
            </div>
          </div>
          <div className="links-container">
            <ul className="nav-links">
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-63}
                  duration={500}
                  className={` ${navbar ? "link" : ""}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-63}
                  duration={500}
                  className={` ${navbar ? "link" : ""}`}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-63}
                  duration={500}
                  className={` ${navbar ? "link" : ""}`}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
