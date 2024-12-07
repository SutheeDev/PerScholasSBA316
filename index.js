import { startStopwatch, stopStopwatch } from "./stopwatch.js";
import showStats from "./showStats.js";
import getTextToType from "./getTextToType.js";
import difficultyMap from "./difficultyMap.js";

// Listen to difficulty-level btns
let value;
let letterStr = "";
const levelBtns = document.querySelectorAll(".level-btn");
levelBtns.forEach((levelBtn) => {
  levelBtn.addEventListener("click", () => {
    // Remove 'selected' class from all btns
    levelBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    // Add 'selected' class to clicked btn
    levelBtn.classList.add("selected");

    for (let obj of difficultyMap) {
      if (obj.display === levelBtn.textContent) {
        value = obj.value;
      } else {
        continue;
      }
    }
    letterStr = getTextToType(value);
    startGame();
  });
});
letterStr = getTextToType(value);

const wordsCount = Math.ceil(letterStr.length / 5);
let wordsPerMins = 0;
let correctKeystrokes = 0;
let totalKeystrokes = 0;
let accuracy = 0;

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

export const startGame = () => {
  // Add string the user has to type to the exampleText
  exampleText.textContent = letterStr;
  exampleText.setAttribute("value", letterStr);

  let textToDisplay = "";
  let removedText = [];
  let stopwatchStarted = false;
  textDisplay.textContent = textToDisplay;

  // Add the typing area into the text section
  text.prepend(textContainer);
  cursorLayer.focus();

  const letterArr = letterStr.split("");

  // Listen to the key event in the window document
  document.addEventListener("keydown", (e) => {
    // Start the stopwatch
    if (!stopwatchStarted) {
      stopwatchStarted = true;
      startStopwatch();
    }

    // Do nothing when it's the end of the string
    if (letterArr.length === 0) {
      return;
    }

    // Check typed character
    const char = e.key;
    let removedChar = "";
    if (char.length === 1 || char === "Spacebar") {
      if (char === letterArr[0]) {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        textToDisplay += removedChar;
        console.log(textToDisplay);
        textDisplay.innerHTML = textToDisplay;

        // Increment the correct keystrokes
        correctKeystrokes++;
        totalKeystrokes++;
      } else if (letterArr[0].charCodeAt() === 10) {
        console.log("wrong enter");
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        textToDisplay += "<br>";
        console.log(textToDisplay);
        textDisplay.innerHTML = textToDisplay;

        totalKeystrokes++;
      } else {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        const wrongText = `<span style="color:red;">${removedChar}</span>`;
        textToDisplay += wrongText;
        console.log(textToDisplay);
        textDisplay.innerHTML = textToDisplay;

        totalKeystrokes++;
      }
    } else if (char === "Enter") {
      const uni = letterArr[0].charCodeAt();
      if (uni === 10) {
        console.log("correct enter");
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        // textToDisplay += removedChar;
        textToDisplay += "<br>";
        console.log(textToDisplay);
        textDisplay.innerHTML = textToDisplay;

        // Increment the correct keystrokes
        correctKeystrokes++;
        totalKeystrokes++;
      } else {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        const wrongText = `<span style="color:red;">${removedChar}</span>`;
        textToDisplay += wrongText;
        console.log(textToDisplay);
        textDisplay.innerHTML = textToDisplay;

        totalKeystrokes++;
      }
    } else if (char === "Backspace") {
      totalKeystrokes++;

      if (textToDisplay) {
        const lineBreakRegex = /<br\s*\/?>\s*$/;
        const spanRegex = /<span[^>]*>[^<]*<\/span>\s*$/;
        const charRegex = /(\s|.)$/;
        const whitespaceRegex = /\s$/;

        // Check textToDisplay's last character if it's
        // Line break
        if (lineBreakRegex.test(textToDisplay)) {
          textToDisplay = textToDisplay.replace(lineBreakRegex, "");
          // whitespace
        } else if (whitespaceRegex.test(textToDisplay)) {
          textToDisplay = textToDisplay.replace(whitespaceRegex, "");
          // span element
        } else if (spanRegex.test(textToDisplay)) {
          textToDisplay = textToDisplay.replace(spanRegex, "");
          // Or individual letter
        } else if (charRegex.test(textToDisplay)) {
          textToDisplay = textToDisplay.replace(charRegex, "");
        }
        const returnedChar = removedText.pop();
        letterArr.unshift(returnedChar);
        textDisplay.innerHTML = textToDisplay;
      }
      console.log(textToDisplay);
    }

    if (letterArr.length === 0) {
      stopwatchStarted = false;
      const min = stopStopwatch();
      // Calculate the WPM
      wordsPerMins = (wordsCount / min).toFixed();
      // Calculate the accuracy
      accuracy = ((correctKeystrokes / totalKeystrokes) * 100).toFixed(2);
      showStats(wordsPerMins, accuracy, cursorLayer);
    }
  });

  // Display or delete text on cursorLayer
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
  });
};

startGame();
