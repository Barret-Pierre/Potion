let potions = document.querySelectorAll(".potion");
let button = document.querySelector("button");
let alertTryAgain = document.querySelector(".alert-danger");
let solution = document.querySelector(".alert-success");
screen.orientation.lock("landscape");

window.addEventListener("load", () => {
  for (const potion of potions) {
    potion.style.fill = "black";
  }
});

function nextColor(actualColor) {
  const potionsColor = [
    "rgb(222, 26, 24)",
    "rgb(240, 130, 56)",
    "rgb(244, 194, 8)",
    "rgb(42, 100, 108)",
    "rgb(101, 74, 142)",
    "rgb(205, 11, 91)",
    "rgb(239, 132, 167)",
  ];
  console.log(actualColor);
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
    const actualColor = potion.style.fill;
    const newColor = nextColor(actualColor);
    potion.style.fill = newColor;
  });
}

function validate() {
  const potionsColor = [];
  const solution = [
    "rgb(101, 74, 142)",
    "rgb(239, 132, 167)",
    "rgb(205, 11, 91)",
    "rgb(222, 26, 24)",
    "rgb(240, 130, 56)",
    "rgb(42, 100, 108)",
    "rgb(244, 194, 8)",
  ];
  for (const potion of potions) {
    potionsColor.push(potion.style.fill);
  }
  console.log(potionsColor);
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
