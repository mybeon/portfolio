import React from "react";

const Footer = () => {
  return (
    <footer>
      <small
        style={{
          textAlign: "center",
          margin: "6rem 0 2rem 0",
          display: "block",
        }}
      >
        Copyright &copy; {new Date().getFullYear()}. Developed by me. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
