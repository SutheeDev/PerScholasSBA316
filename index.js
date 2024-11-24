let letterStr =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolore voluptas quaerat, tenetur placeat ipsa ullam iste aliquid, et neque tempora! Natus earum officia voluptate corporis dolores ab reprehenderit! Numquam, minus. Debitis, animi id repellendus in expedita, adipisci ullam molestiae explicabo cumque ducimus modi repellat dolor minima quo, corrupti ipsam temporibus labore voluptatem illum? Suscipit consectetur odio eligendi eveniet fugit doloribus deserunt! Debitis, corporis laboriosam? Deserunt dicta recusandae omnis reiciendis!";

const text = document.getElementById("text");
const letter = document.createElement("h4");
letter.textContent = letterStr;
text.prepend(letter);

document.addEventListener("keydown", (e) => {
  const char = e.target;
  console.log(char);
});
