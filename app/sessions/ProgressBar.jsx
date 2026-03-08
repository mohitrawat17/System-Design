import React, { useEffect, useState } from "react";
import "./progress_bar.module.css";

const Bar = ({ progress = 0 }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

    return ()=>clearTimeout(timer)
  }, [progress]);

  return (
    <div class="bar-main">
      <div
        class="bar-inner"
        style={{ transform: `translateX(${animatedProgress - 100}%)` }}
      >
        {progress}%
      </div>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div class="main">
      <Bar progress={70} />
    </div>
  );
};

export default ProgressBar;
