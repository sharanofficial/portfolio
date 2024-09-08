import React from "react";
import { useEffect } from "react";
import "./header.css";
import cv from "../Assets/Resume Dev.pdf";

let i = 0;
let txt = "sharan.";
let speed = 50;

function typeWriter() {
  setTimeout(() => {
    if (i < txt.length) {
      document.querySelector(".name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, 200);
}

function Header() {
  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <h1>
              hello! i'am <span className="name"></span>
            </h1>
            <div>
              <div className="intro">
                A front end <span className="role"> developer </span>
              </div>
              <div className="intro">
                <span className="designer">
                  and
                  <span className="role"> designer</span>
                </span>
              </div>
            </div>
            <a href={cv} download className="resume-btn">
              <span>resume</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
