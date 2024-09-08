import React from "react";
import { useInView } from "react-intersection-observer";
import "./projects.css";
import { Data } from "../components/data";

const Projects = () => {
  let count = false;

  const { ref, inView } = useInView();
  const { ref: proRef, inView: proInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects-container">
          <div ref={ref} className="projects-header">
            <div className={inView ? "project-some-info" : ""}>
              <span className={inView ? "block" : ""}></span>
              <div className="slide">
                <div className="dash"></div>
                <p>Take a look at my</p>
              </div>
            </div>
            <div className={inView ? "heading-p" : ""}>
              <span className={inView ? "block-1" : ""}></span>
              <h3>Projects</h3>
            </div>
          </div>
          <div ref={proRef} className="project-container">
            {Data.map((project) => {
              const { id, title, image, dis, code, live, tech } = project;
              if (count) {
                count = false;
              } else {
                count = true;
              }

              return (
                <div
                  key={id}
                  className={`project ${count === true ? "one" : "two"} ${
                    proInView ? "center" : ""
                  }`}
                >
                  <div className="img-container">
                    <img src={image} alt={title} />
                  </div>
                  <div className="project-info">
                    <div className="title">
                      <h4>{title}</h4>
                      <div className="line"></div>
                    </div>
                    <p className="dis">{dis}</p>
                    <div className="details">
                      <p className="tech">
                        Technologies used :{" "}
                        <span className="tech-info"> {tech}</span>
                      </p>
                    </div>
                    <div className="project-links">
                      <a href={code} className="code" target={"_blank"}>
                        <span>code</span>
                      </a>
                      <a href={live} className="live" target={"_blank"}>
                        <span> live</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
