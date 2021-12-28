import React from "react";
import MainSlider from "../components/slider/MainSlider";
import "../scss/main.scss";
import heroSvg from "../images/hero_svg.svg";
import Projects from "../components/Projects";
import Form from "../components/Form";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <main>
      <Seo title="Welcome to my portfolio" />
      <div className="hero-section">
        <div className="container">
          <h1>Designer, Front &amp; Back-End Developer</h1>
          <p>
            I design and code beautifully simple things. Specialized in WordPress custom theme development. If you're a business seeking a web
            presence, you are in the perfect place.
          </p>
          <div className="call-to-action">
            <a href="#portfolio">portfolio</a>
            <a href="#contact">contact me</a>
          </div>
        </div>
        <img src={heroSvg} alt="hero section" />
      </div>

      <div className="section services-section">
        <h3>
          what i <strong>can do</strong>
        </h3>
        <MainSlider />
      </div>
      <Projects />
      <Form />
      <footer>
        <small
          style={{
            textAlign: "center",
            margin: "6rem 0 2rem 0",
            display: "block",
          }}
        >
          Coryright &copy; {new Date().getFullYear()}. Developed by me. All Rights Reserved.
        </small>
      </footer>
    </main>
  );
};

export default IndexPage;
