const getTextToType = (level = "easy", textArr) => {
  const textArray = textArr.filter((text) => text.level === level);

  // Randomly pick text
  const textIndex = Math.floor(Math.random() * textArray.length);
  const str = textArray[textIndex].str;
  const textId = textArray[textIndex].textId;
  return { string: str, id: textId };
};

export default getTextToType;
