import React, { useEffect, useState } from "react";

const AnimatedNumber = ({ to, from = 0, startAnimation }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!startAnimation) return;

    let start = from;
    let end = to;
    let duration = 2000;
    let startTime;
    let animationFrame;

    // easeOutCubic (можно поменять на другие функции)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let rawProgress = Math.min((timestamp - startTime) / duration, 1);
      let easedProgress = easeOutCubic(rawProgress); // замедление под конец
      let current = Math.floor(easedProgress * (end - start) + start);
      setValue(current);

      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [startAnimation, to, from]);

  return <>{value.toLocaleString("ru-RU")}</>;
};

export default AnimatedNumber;
