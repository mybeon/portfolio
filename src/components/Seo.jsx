import React from "react";
import Helmet from "react-helmet";
import iconSvg from "../images/audit-svg.svg";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={iconSvg} type="image/x-icon" />
    </Helmet>
  );
};

export default Seo;
