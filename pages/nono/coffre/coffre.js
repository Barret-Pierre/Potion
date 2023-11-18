let input = document.querySelector("input");
let button = document.querySelector("button");
let alertTryAgain = document.querySelector(".alert-danger");
let solution = document.querySelector(".alert-success");
const secret = "3707";

function validate(codeInput) {
  console.log(codeInput);
  if (codeInput === secret) {
    return true;
  } else {
    return false;
  }
}

button.addEventListener("click", () => {
  if (!validate(input.value)) {
    alertTryAgain.setAttribute("class", "alert alert-danger");
  } else {
    window.location.href = "../../carte/carte.html";
  }
});
