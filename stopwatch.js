let stopwatch;
let min;

const startStopwatch = () => {
  const startTime = new Date().getTime();
  console.log("start");
  stopwatch = setInterval(() => {
    const elapsedTime = new Date().getTime() - startTime;
    min = (elapsedTime / (1000 * 60)).toFixed(2);
  }, 1000);
};

const stopStopwatch = () => {
  console.log("stop");
  clearInterval(stopwatch);
  return min;
};

export { startStopwatch, stopStopwatch };
