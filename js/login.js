import { areFieldsEmpty, showMessage } from "./validation.js";

const signinEmail = document.querySelector("#signinEmail");
const signinPassword = document.querySelector("#signinPassword");
const SigninBtn = document.querySelector("#SigninBtn");
const logoutBtn = document.querySelector("#logoutBtn");

let users = [];
const localStorageName = "usersList";
if (localStorage.getItem(localStorageName) != null) {
  users = JSON.parse(localStorage.getItem(localStorageName));
}

document.addEventListener("DOMContentLoaded", function () {
  let username = localStorage.getItem("currentuser");
  if (username) {
    const usernameElement = document.getElementById("username");
    if (usernameElement) {
      usernameElement.innerHTML = `Welcome ${username}`;
    }
  }
});

if (SigninBtn) {
  SigninBtn.addEventListener("click", function () {
    login();
  });
}

function login() {
  if (!areFieldsEmpty(signinEmail, signinPassword)) {
    showMessage("errorMessage", "signin");
    return false;
  }

  let userFound = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email.toLowerCase() === signinEmail.value.toLowerCase() &&
      users[i].password === signinPassword.value
    ) {
      userFound = true;
      localStorage.setItem("currentuser", users[i].name);
      break;
    }
  }

  if (userFound) {
    window.location.href = "./home.html";
  } else {
    showMessage("incorrectMessage", "signin");
  }
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    logout();
  });
}

function logout() {
  localStorage.removeItem("currentuser");
  // window.location.href = "./index.html";
  window.location.replace("./index.html");
}
