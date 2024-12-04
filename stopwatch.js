let stopwatch;
let sec;
let min;

const startStopwatch = () => {
  const startTime = new Date().getTime();
  // console.log(startTime);
  stopwatch = setInterval(() => {
    const elapsedTime = new Date().getTime() - startTime;
    // console.log(elapsedTime);
    // sec = elapsedTime / 1000;
    min = (elapsedTime / (1000 * 60)).toFixed(2);
  }, 1000);
};

const stopStopwatch = () => {
  clearInterval(stopwatch);
  // console.log(`${min}`);
  return min;
};

export { startStopwatch, stopStopwatch };
