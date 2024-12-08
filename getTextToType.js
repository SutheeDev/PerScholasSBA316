import textToType from "./textToType.js";

const getTextToType = (level = "easy") => {
  const textArray = textToType.filter((text) => text.level === level);

  // Randomly pick text
  const textIndex = Math.floor(Math.random() * textArray.length);
  const str = textArray[textIndex].str;
  return str;
};

export default getTextToType;
