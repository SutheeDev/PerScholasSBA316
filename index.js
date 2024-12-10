import { startStopwatch, stopStopwatch } from "./stopwatch.js";
import showStats from "./showStats.js";
import getTextToType from "./getTextToType.js";
import difficultyMap from "./difficultyMap.js";
import initiateGame from "./initiateGame.js";
import textToType from "./textToType.js";
import replayGame from "./replay.js";
import getNextGame from "./getNextGame.js";
import hideStats from "./hideStats.js";

let wordsPerMins = 0;
let correctKeystrokes = 0;
let totalKeystrokes = 0;
let accuracy = 0;
let wordsCount = 0;
let level = "easy";
let letterStr = "";
let textId;
let isShowStats = false;

// Initate elements to start game
const { text, textContainer, textDisplay, cursorLayer, exampleText } =
  initiateGame();

// Listen to difficulty-level btns
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
        level = obj.value;
      } else {
        continue;
      }
    }
    const { string, id } = getTextToType(level, textToType);
    letterStr = string;
    textId = id;
    cursorLayer.value = "";
    isShowStats = false;
    hideStats();
    startGame();
  });
});
const { string, id } = getTextToType(level, textToType);
letterStr = string;
textId = id;

export const startGame = () => {
  // Reset all values
  wordsPerMins = 0;
  correctKeystrokes = 0;
  totalKeystrokes = 0;
  accuracy = 0;
  wordsCount = Math.ceil(letterStr.length / 5);

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
    console.log(letterArr.length);
    // Do nothing when it's the end of the string
    if (letterArr.length === 0 || isShowStats) {
      return;
    }

    // Start the stopwatch
    if (!stopwatchStarted) {
      stopwatchStarted = true;
      startStopwatch();
    }

    // Check typed character
    const char = e.key;
    let removedChar = "";

    if (char.length === 1 || char === "Spacebar") {
      if (char === letterArr[0]) {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        textToDisplay += removedChar;
        textDisplay.innerHTML = textToDisplay;

        // Increment the correct keystrokes
        correctKeystrokes++;
        totalKeystrokes++;
      } else if (letterArr[0].charCodeAt() === 10) {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        textToDisplay += "<br>";
        textDisplay.innerHTML = textToDisplay;

        totalKeystrokes++;
      } else {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        const wrongText = `<span style="color:red;">${removedChar}</span>`;
        textToDisplay += wrongText;
        textDisplay.innerHTML = textToDisplay;

        totalKeystrokes++;
      }
    } else if (char === "Enter") {
      const uni = letterArr[0].charCodeAt();
      if (uni === 10) {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        // textToDisplay += removedChar;
        textToDisplay += "<br>";
        textDisplay.innerHTML = textToDisplay;

        // Increment the correct keystrokes
        correctKeystrokes++;
        totalKeystrokes++;
      } else {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        const wrongText = `<span style="color:red;">${removedChar}</span>`;
        textToDisplay += wrongText;
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
    }

    // Check letterArr length after keydown
    if (letterArr.length === 0) {
      stopwatchStarted = false;
      const min = stopStopwatch();
      // Calculate the WPM
      wordsPerMins = (wordsCount / min).toFixed();
      // Calculate the accuracy
      accuracy = ((correctKeystrokes / totalKeystrokes) * 100).toFixed(2);
      isShowStats = true;
      showStats(wordsPerMins, accuracy);
    }
  });

  // Display or delete text on cursorLayer
  // let currentIndex = 0;
  // cursorLayer.addEventListener("input", (e) => {
  //   // e.preventDefault();
  //   console.log(cursorLayer.value);
  //   if (
  //     currentIndex < letterStr.length &&
  //     e.inputType !== "deleteContentBackward"
  //   ) {
  //     cursorLayer.value = letterStr.slice(0, currentIndex + 1);
  //     currentIndex++;
  //   } else if (e.inputType === "deleteContentBackward") {
  //     currentIndex--;
  //     cursorLayer.value = letterStr.slice(0, currentIndex);
  //   } else {
  //     cursorLayer.value = letterStr;
  //   }
  // });
  let currentIndex = 0;
  cursorLayer.addEventListener("input", (e) => {
    e.preventDefault();

    if (e.inputType === "insertText") {
      currentIndex++;
    } else if (e.inputType === "deleteContentBackward") {
      currentIndex--;
    }

    cursorLayer.value = letterStr.slice(0, currentIndex);
  });
};

startGame();

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  cursorLayer.value = "";
  isShowStats = false;
  replayGame();
});

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  cursorLayer.value = "";
  isShowStats = false;
  const returnStr = getNextGame(textId, level);
  letterStr = returnStr.string;
  textId = returnStr.id;
  startGame();
});
