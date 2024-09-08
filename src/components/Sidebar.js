import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-scroll";
import "./navbar.css";
import { useGlobalContext } from "./Context";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
const Sidebar = () => {
  const { navLink, setNavLink } = useGlobalContext();
  return (
    <div className={`s-links-container ${navLink && "show-links"}`}>
      <div className={`s-links-wrapper ${navLink && "slide-in"}`}>
        <ul className={`s-nav-links ${navLink && "nav-links-ani"}`}>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              onClick={() => setNavLink(false)}
            >
              Projects
            </Link>
            <div className="underline"></div>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              onClick={() => setNavLink(false)}
            >
              about
            </Link>
            <div className="underline"></div>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              onClick={() => setNavLink(false)}
            >
              contact
            </Link>
            <div className="underline"></div>
          </li>
        </ul>
        <div className="divide"></div>
        <div className={`social-links ${navLink && "social-ani"}`}>
          <div className="s-icon">
            <a
              href="https://www.linkedin.com/in/sharan-p/"
              target={"_blank"}
              onClick={() => setNavLink(false)}
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="s-icon">
            <a href="#" onClick={() => setNavLink(false)}>
              <FaInstagram />
            </a>
          </div>
          <div className="s-icon">
            <a
              href="https://github.com/sharanofficial"
              target={"_blank"}
              onClick={() => setNavLink(false)}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
