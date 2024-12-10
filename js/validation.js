let users = [];
const localStorageName = "usersList";
if (localStorage.getItem(localStorageName) != null) {
  users = JSON.parse(localStorage.getItem(localStorageName));
}
const signupMessage = document.querySelector("#signupMessage");
const signinMessage = document.querySelector("#signinMessage");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Validate input fields
function areFieldsEmpty(...fields) {
  for (let field of fields) {
    if (field.value.trim() === "") {
      return false;
    }
  }
  return true;
}
// Check if the email is valid
function isValidEmail(email) {
  return emailRegex.test(email);
}
// Check if the email already exists in the users list
function isEmailExist() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return true;
    }
  }
}

function showMessage(messageId, type) {
  let messageContainer;
  if (type === "signup") {
    messageContainer = signupMessage;
  } else {
    messageContainer = signinMessage;
  }

  const allMessages = messageContainer.querySelectorAll("span");
  for (let i = 0; i < allMessages.length; i++) {
    allMessages[i].classList.add("d-none");
  }

  const message = document.getElementById(messageId);
  if (message) {
    message.classList.remove("d-none");
  }

  messageContainer.classList.remove("d-none");
}

export { isValidEmail, isEmailExist, showMessage, areFieldsEmpty };
