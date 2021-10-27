import React from "react";
import Lottie from "react-lottie";
import * as loading from "./loader.json";

const Loader = () => {
  const defaultOption = {
    loop: true,
    animationData: loading,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        className="lottie-loader"
        options={defaultOption}
        height={"80%"}
      />
    </>
  );
};

export default Loader;
