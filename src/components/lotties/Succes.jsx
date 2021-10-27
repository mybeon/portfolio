import React from "react";
import Lottie from "react-lottie";
import * as succes from "./succes.json";

const Succes = () => {
  const defaultOption = {
    loop: false,
    animationData: succes,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        className="lottie-succes"
        options={defaultOption}
        height={"80%"}
        width={"40%"}
      />
    </>
  );
};

export default Succes;
