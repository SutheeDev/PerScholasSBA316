import hideStats from "./hideStats.js";
import textToType from "./textToType.js";
import getTextToType from "./getTextToType.js";

const getNextGame = (id, level) => {
  hideStats();

  const newTextArr = textToType.filter(
    (text) => text.level === level && text.textId !== id
  );
  const chosenStrObj = getTextToType(level, newTextArr);
  return chosenStrObj;
};

export default getNextGame;
