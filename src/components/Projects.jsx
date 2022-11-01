import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import htmlSvg from "../images/techs/html.svg";
import cssSvg from "../images/techs/css.svg";
import phpSvg from "../images/techs/php.svg";
import nodeSvg from "../images/techs/node.svg";
import javascriptSvg from "../images/techs/javascript.svg";
import gatsbySvg from "../images/techs/gatsby.svg";
import mongoSvg from "../images/techs/mongodb.svg";
import ejsSvg from "../images/techs/ejs.svg";
import reactSvg from "../images/techs/react.svg";

const Projects = () => {
  return (
    <div id="portfolio" className="section porfolio-section">
      <h3>
        my <strong>portfolio</strong>
      </h3>
      <p className="nb">NB: Please keep in mind that these projects might have a long first loading time since they're hosted on public servers.</p>
      <div className="projects">
        <div className="single-project">
          <StaticImage src="../images/projects/port-react.png" height="100%" style={{ height: "100%" }} />
          <a href="https://capp-react.netlify.app/" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={javascriptSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={reactSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={nodeSvg} alt="languages used" />
            </div>
          </div>
          <p>A reactapp version of the existing social media project. Contains a chat and a search feature as well.</p>
        </div>
        <div className="single-project">
          <StaticImage src="../images/projects/port-fullstack.png" height="100%" style={{ height: "100%" }} />
          <a href="https://nodejs-backend-js.onrender.com/" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={javascriptSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={mongoSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={ejsSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={nodeSvg} alt="languages used" />
            </div>
          </div>
          <p>A simple social media app with a chat feature built upon nodejs with express, ejs &amp; Mongodb as database.</p>
        </div>
        <div className="single-project">
          <StaticImage src="../images/projects/port-pod.png" height="100%" style={{ height: "100%" }} />
          <a href="http://grid.freecluster.eu/" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={htmlSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={cssSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={phpSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={javascriptSvg} alt="languages used" />
            </div>
          </div>
          <p>A wordpress theme live search using ajax &amp; a custom dashbord where user can submit his personal notes.</p>
        </div>
        <div className="single-project">
          <StaticImage src="../images/projects/port-ecom.png" height="100%" style={{ height: "100%" }} />
          <a href="http://ecomtheme.rf.gd/" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={htmlSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={cssSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={phpSvg} alt="languages used" />
            </div>
          </div>
          <p>An E-commerce WordPress theme 100% percent compatible with the unopinionated Woocommerce plugin.</p>
        </div>
        <div className="single-project">
          <StaticImage src="../images/projects/port-weather.png" height="100%" style={{ height: "100%" }} />
          <a href="https://weather-app-gb.netlify.app" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={htmlSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={cssSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={javascriptSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={nodeSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={gatsbySvg} alt="languages used" />
            </div>
          </div>
          <p>Weather app that displays daily and hourly forecast based on the user's location</p>
        </div>
        <div className="single-project">
          <StaticImage src="../images/projects/port-bauen.png" height="100%" style={{ height: "100%" }} />
          <a href="http://wptheme.rf.gd/" target="_blank" rel="noreferrer">
            view website
          </a>
          <div className="techs">
            <div className="container">
              <img src={htmlSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={cssSvg} alt="languages used" />
            </div>
            <div className="container">
              <img src={phpSvg} alt="languages used" />
            </div>
          </div>
          <p>An Elegent WordPress custom theme, easy to install, just upload it &amp; level up your real estate agency.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
