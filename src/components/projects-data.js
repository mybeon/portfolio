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
import typeSvg from "../images/techs/typescript.svg";
import mkSvg from "../images/techs/markdown.svg";
import nextSvg from "../images/techs/nextjs.svg";
import reactNativeSvg from "../images/techs/react-native.svg";

const projects = [
    {
        id: 7,
        image: "port-notifyapp",
        link: "https://play.google.com/store/apps/details?id=com.beonma.notify",
        techs: [reactNativeSvg, firebaseSvg, nodeSvg],
        description:
            "A grocery list app that makes shopping a breeze. Create and share lists with friends using QR codes.",
    },
    {
        id: 6,
        image: "port-nextauth",
        link: "https://nextjs-nextauth-mongodb.vercel.app",
        techs: [nextSvg, typeSvg, mkSvg, mongoSvg, nodeSvg],
        description:
            "A Nextjs blog enhanced with an authentication flow using next-auth and mongodb",
    },
    {
        id: 5,
        image: "port-meals",
        link: "https://react-meals-redux-firebase.netlify.app/",
        techs: [reactSvg, reduxSvg, firebaseSvg, cssModulesSvg, javascriptSvg],
        description:
            "A simple MealsApp with cart functionality built using redux and firebase authentication/firestore.",
    },
    {
        id: 4,
        image: "port-react",
        link: "https://capp-react.netlify.app/",
        techs: [javascriptSvg, reactSvg, nodeSvg],
        description:
            "A react-app version of the existing social media project. Contains a chat and a search feature as well.",
    },
    {
        id: 3,
        image: "port-fullstack",
        link: "https://nodejs-backend-js.onrender.com/",
        techs: [javascriptSvg, mongoSvg, ejsSvg, nodeSvg],
        description:
            "A simple social media app with a chat feature built upon nodejs with express, ejs &amp; Mongodb as database.",
    },
    {
        id: 2,
        image: "port-weather",
        link: "https://weather-app-gb.netlify.app",
        techs: [htmlSvg, cssSvg, javascriptSvg, nodeSvg, gatsbySvg],
        description:
            "Weather app that displays daily and hourly forecast based on the user's location.",
    },
    {
        id: 1,
        image: "port-bauen",
        link: "http://wptheme.rf.gd/",
        techs: [htmlSvg, cssSvg, phpSvg],
        description:
            "An Elegant WordPress custom theme, easy to install, just upload it &amp; level up your real estate agency.",
    },
];

export default projects;
