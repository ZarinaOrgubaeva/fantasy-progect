import { useState, useEffect } from "react";

export const useTimer = (initial) => {
  const [timer, setTimer] = useState(initial);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);
  const startHandler = (event) => {
    event.preventDefault();
    setStart((prevState) => !prevState);
  };
  const restartHandler = () => {
    setTimer(60);
  };
  const stopHandler = () => {
    setStart((prevState) => !prevState);
  };

  return {
    timer,
    startHandler,
    restartHandler,
    stopHandler,
  };
};
