import {
  isValidEmail,
  showMessage,
  isEmailExist,
  areFieldsEmpty,
} from "./validation.js";

const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const SignupBtn = document.querySelector("#SignupBtn");

let users = [];
const localStorageName = "usersList";

if (localStorage.getItem(localStorageName) != null) {
  users = JSON.parse(localStorage.getItem(localStorageName));
}

SignupBtn.addEventListener("click", function () {
  SignUp();
});

function SignUp() {
  if (!areFieldsEmpty(signupName, signupEmail, signupPassword)) {
    showMessage("errorMessage", "signup");
    return;
  }
  if (isValidEmail(signupEmail.value) == false) {
    showMessage("emailinvalid", "signup");
    return;
  }
  if (isEmailExist() == true) {
    showMessage("emailerrorMessage", "signup");
    return;
  } else {
    let user = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };
    users.push(user);
    localStorage.setItem(localStorageName, JSON.stringify(users));
    showMessage("successMessage", "signup");
    window.location.href = "./index.html";
  }
}
