import { startGame } from "./index.js";
import hideStats from "./hideStats.js";

const statsContainer = document.querySelector(".stats");
const wpm = document.querySelector(".wpm");
const acc = document.querySelector(".acc");
const reset = document.querySelector(".reset");
const next = document.querySelector(".next");

const showStats = (wordsPerMins, accuracy, cursorLayer) => {
  wpm.textContent = `WPM ${wordsPerMins}`;
  acc.textContent = `ACC ${accuracy}%`;

  statsContainer.style.visibility = "visible";
  statsContainer.style.zIndex = "10";

  reset.addEventListener("click", () => {
    console.log("reset game");
    cursorLayer.value = "";
    hideStats();
    startGame();
  });

  next.addEventListener("click", () => {
    console.log("Next game");
    cursorLayer.value = "";
    hideStats();
    startGame();
  });
};

export default showStats;
