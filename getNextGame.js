import hideStats from "./hideStats.js";
import textToType from "./textToType.js";
import getTextToType from "./getTextToType.js";

const getNextGame = (id, level) => {
  console.log("Next game");
  hideStats();

  // console.log(id, level);

  const newTextArr = textToType.filter(
    (text) => text.level === level && text.textId !== id
  );
  // console.log(newTextArr);
  const chosenStrObj = getTextToType(level, newTextArr);
  // console.log(chosenStrObj);
  return chosenStrObj;
};

export default getNextGame;
