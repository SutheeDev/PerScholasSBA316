let letterStr = "Example sentence you can type";

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
exampleText.textContent = letterStr;
exampleText.setAttribute("value", letterStr);
exampleText.setAttribute("disabled", true);

// Assemble the typing area
let textToDisplay = "";
let removedText = [];
textDisplay.textContent = textToDisplay;
textContainer.append(textDisplay);
textContainer.append(cursorLayer);
textContainer.append(exampleText);

// Add the typing area into the text section
text.prepend(textContainer);
cursorLayer.focus();

const letterArr = letterStr.split("");

// Listen to the key event in the window document
document.addEventListener("keydown", (e) => {
  const char = e.key;
  if (char.length === 1) {
    let removedChar = "";
    if (char === letterArr[0]) {
      removedChar = letterArr.shift();
      removedText.push(removedChar);
      textToDisplay += removedChar;
      textDisplay.innerHTML = textToDisplay;
    } else {
      removedChar = letterArr.shift();
      removedText.push(removedChar);
      const wrongText = `<span style="color:red;">${removedChar}</span>`;
      textToDisplay += wrongText;
      textDisplay.innerHTML = textToDisplay;
    }
  } else if (char === "Backspace") {
    const returnedChar = removedText.pop();
    letterArr.unshift(returnedChar);
    textDisplay.innerHTML = removedText.join("");
  }
});

let currentIndex = 0;
cursorLayer.addEventListener("input", (e) => {
  if (
    currentIndex < letterStr.length &&
    e.inputType !== "deleteContentBackward"
  ) {
    cursorLayer.value = letterStr.slice(0, currentIndex + 1);
    currentIndex++;
  } else if (e.inputType === "deleteContentBackward") {
    currentIndex--;
    cursorLayer.value = letterStr.slice(0, currentIndex);
  } else {
    cursorLayer.value = letterStr;
  }
  console.log(currentIndex);
});
