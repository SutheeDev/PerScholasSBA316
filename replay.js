import { startGame } from "./index.js";
import hideStats from "./hideStats.js";

const replayGame = () => {
  console.log("reset game");
  hideStats();
  startGame();
};

export default replayGame;
