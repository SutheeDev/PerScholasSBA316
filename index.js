import { startStopwatch, stopStopwatch } from "./stopwatch.js";
import textToType from "./textToType.js";

const getTextToType = (level = "easy") => {
  const textArray = textToType.filter((text) => text.level === level);

  // Randomly pick text
  const textIndex = Math.floor(Math.random() * textArray.length);
  const str = textArray[textIndex].str;
  return str;
};

const difficultyMap = [
  { display: "Snail's Pace", value: "easy" },
  { display: "Hotmail Hustle", value: "medium" },
  { display: "Sonic Slug", value: "hard" },
  { display: "Flash Snail", value: "insane" },
];

const levelBtns = document.querySelectorAll(".level-btn");
levelBtns.forEach((levelBtn) => {
  levelBtn.addEventListener("click", () => {
    console.log(levelBtn.textContent);
  });
});

let letterStr = getTextToType();

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
exampleText.textContent = letterStr;
exampleText.setAttribute("value", letterStr);
exampleText.setAttribute("disabled", true);

// Assemble the typing area
textContainer.append(textDisplay);
textContainer.append(cursorLayer);
textContainer.append(exampleText);

const startGame = () => {
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
    if (char.length === 1 || char === "Spacebar") {
      let removedChar = "";
      if (char === letterArr[0]) {
        removedChar = letterArr.shift();
        removedText.push(removedChar);
        textToDisplay += removedChar;
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
        const spanRegex = /<span[^>]*>[^<]*<\/span>\s*$/;
        const charRegex = /(\s|.)$/;
        const whitespaceRegex = /\s$/;

        // Check textToDisplay's last character if it's
        // whitespace
        if (whitespaceRegex.test(textToDisplay)) {
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

    if (letterArr.length === 0) {
      stopwatchStarted = false;
      const min = stopStopwatch();
      // Calculate the WPM
      wordsPerMins = (wordsCount / min).toFixed();
      // Calculate the accuracy
      accuracy = ((correctKeystrokes / totalKeystrokes) * 100).toFixed(2);
      showStats();
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

const statsContainer = document.querySelector(".stats");
const wpm = document.querySelector(".wpm");
const acc = document.querySelector(".acc");
const reset = document.querySelector(".reset");
const next = document.querySelector(".next");

const showStats = () => {
  wpm.textContent = `WPM ${wordsPerMins}`;
  acc.textContent = `ACC ${accuracy}%`;

  statsContainer.style.visibility = "visible";
  statsContainer.style.zIndex = "10";

  reset.addEventListener("click", () => {
    console.log("reset game");
    cursorLayer.value = "";
    hideStats();
    startGame();
  });

  next.addEventListener("click", () => {
    console.log("Next game");
    cursorLayer.value = "";
    hideStats();
    startGame();
  });
};

const hideStats = () => {
  statsContainer.style.visibility = "hidden";
  statsContainer.style.zIndex = "-10";
};

startGame();
