const statsContainer = document.querySelector(".stats");
const wpm = document.querySelector(".wpm");
const acc = document.querySelector(".acc");

const showStats = (wordsPerMins, accuracy) => {
  wpm.textContent = `WPM ${wordsPerMins}`;
  acc.textContent = `ACC ${accuracy}%`;

  statsContainer.style.visibility = "visible";
  statsContainer.style.zIndex = "10";
};

export default showStats;
