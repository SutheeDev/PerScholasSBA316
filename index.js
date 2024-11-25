let letterStr =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolore voluptas quaerat, tenetur placeat ipsa ullam iste aliquid, et neque tempora! Natus earum officia voluptate corporis dolores ab reprehenderit! Numquam, minus. Debitis, animi id repellendus in expedita, adipisci ullam molestiae explicabo cumque ducimus modi repellat dolor minima quo, corrupti ipsam temporibus labore voluptatem illum? Suscipit consectetur odio eligendi eveniet fugit doloribus deserunt! Debitis, corporis laboriosam? Deserunt dicta recusandae omnis reiciendis!";

const text = document.getElementById("text");
const textContainer = document.createElement("div");
textContainer.classList.add("letter");
const topText = document.createElement("textarea");
const bottomText = document.createElement("textarea");
topText.classList.add("top");
bottomText.classList.add("bottom");
// topText.textContent = letterStr;
bottomText.textContent = letterStr;
bottomText.setAttribute("value", letterStr);
bottomText.setAttribute("disabled", true);
textContainer.append(topText);
textContainer.append(bottomText);
text.prepend(textContainer);
topText.focus();

const letterArr = letterStr.split("");
topText.addEventListener("keydown", (e) => {
  const char = e.key;
  if (char.length === 1) {
    if (char === letterArr[0]) {
      console.log(char);
      letterArr.shift();
    }
  }
});
