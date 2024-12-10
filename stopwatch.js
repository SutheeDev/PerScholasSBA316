let stopwatch;
let min;

const startStopwatch = () => {
  const startTime = new Date().getTime();
  stopwatch = setInterval(() => {
    const elapsedTime = new Date().getTime() - startTime;
    min = (elapsedTime / (1000 * 60)).toFixed(2);
  }, 1000);
};

const stopStopwatch = () => {
  clearInterval(stopwatch);
  return min;
};

export { startStopwatch, stopStopwatch };
