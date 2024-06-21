"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;