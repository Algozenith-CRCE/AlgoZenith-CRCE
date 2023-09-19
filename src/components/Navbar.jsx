import React, { useState } from "react";
import blueLogo from '../assets/blueLogo.svg';
import "./Navbar.css";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <header className="header">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
        >
          <img src={blueLogo} alt="logo" className="logo" />
        </ScrollLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              style={{ color: activeSection === "home" ? "#0077ff" : " ", transition: "color 0.3s ease"  }}
              className="scroll-link"
            >
              Home
            </ScrollLink>
          </li>
          <li >
            <ScrollLink
              to="objectives"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleSetActive}
              style={{ color: activeSection === "objectives" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
              className="scroll-link"
            >
              Objectives
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="events"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
              onSetActive={handleSetActive}
              style={{ color: activeSection === "events" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
              className="scroll-link"
            >
              Events
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="team"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              style={{ color: activeSection === "team" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
              className="scroll-link"
            >
              Team Members
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onSetActive={handleSetActive}
              style={{ color: activeSection === "contact" ? "#0077ff" : " ", transition: "color 0.3s ease" }}
              className="scroll-link"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
