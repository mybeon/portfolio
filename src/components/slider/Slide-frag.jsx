import React from "react";

const SlideFrag = ({ img, title, text }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default SlideFrag;
