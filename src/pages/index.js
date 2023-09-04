import React from "react";
import { graphql } from "gatsby";
import MainSlider from "../components/slider/MainSlider";
import "../scss/main.scss";
import heroSvg from "../images/hero_svg.svg";
import Projects from "../components/Projects";
import Form from "../components/Form";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => {
    return (
        <main>
            <Seo title="Welcome to my portfolio" />
            <div className="hero-section">
                <div className="container">
                    <h1>Front &amp; Back-End Developer</h1>
                    <p>
                        I'm a seasoned full-stack developer with a strong track record in
                        web and mobile app development. I'm excited to bring my expertise
                        to your team and help drive your projects to success.
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
            <Projects images={data.allFile.edges} />
            <Form />
            <Footer />
        </main>
    );
};

export const imagesQuery = graphql`
    query imagesQuery {
        allFile(filter: { ext: { eq: ".png" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData
                    }
                    name
                }
            }
        }
    }
`;

export default IndexPage;
