import { startGame } from "./index.js";
import hideStats from "./hideStats.js";

const replayGame = () => {
  hideStats();
  startGame();
};

export default replayGame;
