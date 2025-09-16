import React, { useEffect, useState } from "react";

const AnimatedNumber = ({ from = 0, to = 0, reverse = false, duration = 2000, start = false }) => {
  const [value, setValue] = useState(reverse ? from : 0);

  useEffect(() => {
    if (!start) return; 

    let startVal = reverse ? from : 0;
    let endVal = reverse ? 0 : to;
    let startTime;
    let animationFrame;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let rawProgress = Math.min((timestamp - startTime) / duration, 1);
      let easedProgress = easeOutCubic(rawProgress);
      let current = Math.floor(easedProgress * (endVal - startVal) + startVal);
      setValue(current);

      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(endVal);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, reverse, duration, start]);

  return <>{value.toLocaleString("ru-RU")}</>;
};

export default AnimatedNumber;
