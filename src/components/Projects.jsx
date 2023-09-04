import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import projects from "./projects-data";

const Projects = ({ images }) => {
    const imagesArr = images.map((item) => item.node);

    return (
        <div id="portfolio" className="section porfolio-section">
            <h3>
                my <strong>portfolio</strong>
            </h3>
            <p className="nb">
                NB: Please keep in mind that these projects might have a long first
                loading time since they're hosted on public servers.
            </p>
            <div className="projects">
                {projects.map((proj) => {
                    const image = imagesArr.find((arr) => arr.name === proj.image);
                    return (
                        <div key={proj.id} className="single-project">
                            <GatsbyImage
                                image={image.childImageSharp.gatsbyImageData}
                                height="100%"
                                style={{ height: "100%" }}
                                alt={proj.description}
                            />
                            <a href={proj.link} target="_blank" rel="noreferrer">
                                view website
                            </a>
                            <div className="techs">
                                {proj.techs.map((tech) => (
                                    <div className="container">
                                        <img src={tech} alt="languages used" />
                                    </div>
                                ))}
                            </div>
                            <p>{proj.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
