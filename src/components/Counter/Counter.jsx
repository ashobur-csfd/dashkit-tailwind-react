import React, { useEffect, useState } from "react";

const SimpleCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const increment = value / 300;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount < value) {
        setCount(Math.floor(currentCount));
      } else {
        setCount(value);
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

export default SimpleCounter;
