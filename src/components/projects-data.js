import htmlSvg from "../images/techs/html.svg";
import cssSvg from "../images/techs/css.svg";
import phpSvg from "../images/techs/php.svg";
import nodeSvg from "../images/techs/node.svg";
import javascriptSvg from "../images/techs/javascript.svg";
import gatsbySvg from "../images/techs/gatsby.svg";
import mongoSvg from "../images/techs/mongodb.svg";
import ejsSvg from "../images/techs/ejs.svg";
import reactSvg from "../images/techs/react.svg";
import reduxSvg from "../images/techs/redux.svg";
import firebaseSvg from "../images/techs/firebase.svg";
import cssModulesSvg from "../images/techs/cssModules.svg";

const projects = [
  {
    id: 5,
    image: "port-meals",
    link: "https://react-meals-redux-firebase.netlify.app/",
    techs: [reactSvg, reduxSvg, firebaseSvg, cssModulesSvg, javascriptSvg],
    description: "A simple MealsApp with cart functionality built using redux and firebase authentication/firestore.",
  },
  {
    id: 1,
    image: "port-react",
    link: "https://capp-react.netlify.app/",
    techs: [javascriptSvg, reactSvg, nodeSvg],
    description: "A react-app version of the existing social media project. Contains a chat and a search feature as well.",
  },
  {
    id: 2,
    image: "port-fullstack",
    link: "https://nodejs-backend-js.onrender.com/",
    techs: [javascriptSvg, mongoSvg, ejsSvg, nodeSvg],
    description: "A simple social media app with a chat feature built upon nodejs with express, ejs &amp; Mongodb as database.",
  },
  {
    id: 3,
    image: "port-weather",
    link: "https://weather-app-gb.netlify.app",
    techs: [htmlSvg, cssSvg, javascriptSvg, nodeSvg, gatsbySvg],
    description: "Weather app that displays daily and hourly forecast based on the user's location.",
  },
  {
    id: 4,
    image: "port-bauen",
    link: "http://wptheme.rf.gd/",
    techs: [htmlSvg, cssSvg, phpSvg],
    description: "An Elegant WordPress custom theme, easy to install, just upload it &amp; level up your real estate agency.",
  },
];

export default projects;
