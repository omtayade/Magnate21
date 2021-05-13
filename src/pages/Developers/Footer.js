import React from "react";
import styles from "./styles";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import "./Footer.css";

function Footer({ github, linkedIn, mail }) {
  const handleEnter = (event) => {
    event.target.style.opacity = 0.5;
  };

  const handleOut = (event) => {
    event.target.style.opacity = 1;
  };

  return (
    <>
      <div className="footer__big">
        <IconContext.Provider value={{ size: "50px", color: "#404040" }}>
          <div onClick={() => (window.location.href = github)} className="icon">
            <AiFillGithub />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "50px", color: "#2867B2" }}>
          <div
            onClick={() => (window.location.href = linkedIn)}
            className="icon"
          >
            <AiFillLinkedin />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "50px", color: "#d44638" }}>
          <div onClick={() => (window.location.href = mail)} className="icon">
            <SiGmail />
          </div>
        </IconContext.Provider>
      </div>
      <div className="footer__small">
        <IconContext.Provider value={{ size: "30px", color: "#404040" }}>
          <div onClick={() => (window.location.href = github)} className="icon">
            <AiFillGithub />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "30px", color: "#2867B2" }}>
          <div
            onClick={() => (window.location.href = linkedIn)}
            className="icon"
          >
            <AiFillLinkedin />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ size: "30px", color: "#d44638" }}>
          <div onClick={() => (window.location.href = mail)} className="icon">
            <SiGmail />
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Footer;
