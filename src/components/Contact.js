import React from "react";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1",
        "template_re45jd8",
        form.current,
        "NMLHVJW8NDeQdykqG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  const { ref, inView } = useInView();
  return (
    <section className="contact" id="contact">
      <div ref={ref} className="contact-container">
        <div className={inView ? "contact-some-info" : ""}>
          <span className={inView ? "block" : ""}></span>
          <div className="slide">
            <div className="dash"></div>
            <p>Say hello</p>
          </div>
        </div>
        <div className={inView ? "heading-c" : ""}>
          <span className={inView ? "block-1" : ""}></span>
          <h3>Contact</h3>
        </div>
        <div className="contact-details">
          <div className="get-in-touch">
            <div className="mail">
              <h5>get in touch</h5>
              <a href="mailto:sharan1533@gmail.com">
                <HiOutlineMail className="email-icon" /> sharan1533@gmail.com
              </a>
            </div>
            <div className="c-social-links">
              <div className="c-icon">
                <a
                  href="https://www.linkedin.com/in/sharan-p/"
                  target={"_blank"}
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="c-icon">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
              <div className="c-icon">
                <a href="https://github.com/sharanofficial" target={"_blank"}>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name" className="label">
              name
            </label>
            <BsFillPersonFill className="icon" />
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              required
            />
            <label htmlFor="email" className="label">
              email
            </label>
            <MdEmail className="icon" />
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
            />
            <label htmlFor="message" className="label">
              message
            </label>
            <textarea
              name="message"
              id="message"
              className="message"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              <span>
                {" "}
                send <TbBrandTelegram className="send-icon" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
