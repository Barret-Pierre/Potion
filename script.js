let potions = document.querySelectorAll(".potion");
let button = document.querySelector("button");
let alertTryAgain = document.querySelector(".alert-danger");
let solution = document.querySelector(".alert-success");

window.addEventListener("load", () => {
  for (const potion of potions) {
    potion.style.backgroundColor = "black";
  }
});

function nextColor(actualColor) {
  const potionsColor = [
    "red",
    "green",
    "black",
    "blue",
    "yellow",
    "purple",
    "pink",
  ];

  const actualIndex = potionsColor.findIndex((color) => color === actualColor);
  if (actualIndex === potionsColor.length - 1) {
    return potionsColor[0];
  } else {
    return potionsColor[actualIndex + 1];
  }
}

for (const potion of potions) {
  potion.addEventListener("click", () => {
    let alertTryAgainClass = alertTryAgain.getAttribute("class");
    if (!alertTryAgainClass.includes("d-none")) {
      alertTryAgain.setAttribute("class", `${alertTryAgainClass} d-none`);
    }
    const actualColor = potion.style.backgroundColor;
    const newColor = nextColor(actualColor);
    potion.style.backgroundColor = newColor;
  });
}

function validate() {
  const potionsColor = [];
  const solution = [
    "blue",
    "red",
    "black",
    "yellow",
    "pink",
    "green",
    "purple",
  ];
  for (const potion of potions) {
    potionsColor.push(potion.style.backgroundColor);
  }
  if (potionsColor.join("-") === solution.join("-")) {
    return true;
  } else {
    return false;
  }
}

button.addEventListener("click", () => {
  if (!validate()) {
    alertTryAgain.setAttribute("class", "alert alert-danger");
  } else {
    solution.setAttribute("class", "alert alert-success");
  }
});
