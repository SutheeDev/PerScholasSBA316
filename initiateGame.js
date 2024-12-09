const initiateGame = () => {
  const text = document.getElementById("text");

  const textContainer = document.createElement("div");
  textContainer.classList.add("letter");

  // Create three layers of typing area
  const textDisplay = document.createElement("h4");
  const cursorLayer = document.createElement("textarea");
  const exampleText = document.createElement("textarea");

  // Add classes
  textDisplay.classList.add("textDisplay");
  cursorLayer.classList.add("cursor");
  exampleText.classList.add("placeholder");

  // Add attribute and content
  exampleText.setAttribute("disabled", true);

  // Assemble the typing area
  textContainer.append(textDisplay);
  textContainer.append(cursorLayer);
  textContainer.append(exampleText);

  return { text, textContainer, textDisplay, cursorLayer, exampleText };
};

export default initiateGame;
