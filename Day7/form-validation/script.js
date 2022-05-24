const form = document.querySelector("#form");
const errors = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");
const submitBtn = document.getElementsByTagName("button");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const passConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");

form.addEventListener("submit", (e) => {
  clearErrors();

  const errorMessages = [];

  if (userName.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters");
  }

  if (password.value.length < 10) {
    errorMessages.push("Password must be atleast 10 characters");
  }

  if (passConfirmation.value != password.value) {
    errorMessages.push("Password must match");
  }

  if (!terms.checked) {
    errorMessages.push("Please accept terms & Conditions ");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

function clearErrors() {
  errorList.innerHTML = "";
  errors.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorList.appendChild(li);
  });

  errors.classList.add("show");
}
