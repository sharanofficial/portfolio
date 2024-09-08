import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import image from "../Images/about.jpg";

const About = () => {
  const { ref, inView } = useInView();
  return (
    <div className="about" id="about">
      <div ref={ref} className="about-container">
        <div className={inView ? "about-some-info" : ""}>
          <span className={inView ? "block" : ""}></span>
          <div className="slide">
            <div className="dash"></div>
            <p>Some info</p>
          </div>
        </div>
        <div className={inView ? "heading-a" : ""}>
          <span className={inView ? "block-1" : ""}></span>
          <h3>About me</h3>
        </div>
        <div className="about-details">
          <p className="about-info">
            I'm a self-taught front-end web developer and designer based in
            puducherry. And I'm doing my B.Sc in computer science under
            puducherry university. I am passionate about coding and solving
            problems through code, and I am excited to work alongside other
            amazing programmers and learn so much more!
          </p>
          <div className="about-img-container">
            <div className="img-background"></div>
            <img src={image} alt="my image" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
