let letterStr =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolore voluptas quaerat, tenetur placeat ipsa ullam iste aliquid, et neque tempora! Natus earum officia voluptate corporis dolores ab reprehenderit! Numquam, minus. Debitis, animi id repellendus in expedita, adipisci ullam molestiae explicabo cumque ducimus modi repellat dolor minima quo, corrupti ipsam temporibus labore voluptatem illum? Suscipit consectetur odio eligendi eveniet fugit doloribus deserunt! Debitis, corporis laboriosam? Deserunt dicta recusandae omnis reiciendis!";

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

// Add exampleText attribute and content
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
    if (char === letterArr[0]) {
      // console.log(char);
      const removedChar = letterArr.shift();
      textToDisplay += removedChar;
      textDisplay.innerHTML = textToDisplay;
    } else {
      const removedChar = letterArr.shift();
      const wrongText = `<span style="color:red;">${removedChar}</span>`;
      textToDisplay += wrongText;
      textDisplay.innerHTML = textToDisplay;
    }
  }
});
