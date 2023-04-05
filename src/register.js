const API_ENDPOINT = " http://localhost:3000/users";

const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const registerButton = document.getElementById("register-button");

// Username regex
const alphabetRegex = /[a-zA-Z]/;
// Email regex
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Password Regex
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /\d/;
const symbolRegex = /(?=.*?[^\w\s])/;

// Check username
const checkUsername = () => {
  if (!alphabetRegex.test(usernameInput.value) || !usernameInput) {
    usernameInput.style.backgroundColor = "pink";
    registerButton.disabled = true;
    return false;
  } else {
    usernameInput.style.backgroundColor = "lightgreen";
    registerButton.disabled = false;
    return true;
  }
};

// Check email
const checkEmail = () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.backgroundColor = "pink";
    registerButton.disabled = true;
    return false;
  } else {
    emailInput.style.backgroundColor = "lightgreen";
    registerButton.disabled = false;
    return true;
  }
};

// Check password
const checkPassword = () => {
  if (
    !uppercaseRegex.test(passwordInput.value) ||
    !lowercaseRegex.test(passwordInput.value) ||
    !numberRegex.test(passwordInput.value) ||
    symbolRegex.test(passwordInput.value) ||
    !passwordInput
  ) {
    passwordInput.style.backgroundColor = "pink";
    registerButton.disabled = true;
    return false;
  } else {
    passwordInput.style.backgroundColor = "lightgreen";
    registerButton.disabled = false;
    return true;
  }
};

// Check password confirm
const checkPasswordConfirm = () => {
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmInput.style.backgroundColor = "pink";
    registerButton.disabled = true;
    return false;
  } else {
    passwordConfirmInput.style.backgroundColor = "lightgreen";
    registerButton.disabled = false;
    return true;
  }
};

// Send registration data to json server
const saveUserData = () => {
  fetch(API_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      username: `${usernameInput.value}`,
      email: `${emailInput.value}`,
      password: `${passwordInput.value}`,
      id: ``,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json().then((data) => console.log(data)));
};

// Check user exist
const checkUserExist = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      const registeredUsername = data.find(
        (e) => e.username === usernameInput.value
      );
      const registeredEmail = data.find((e) => e.email === emailInput.value);

      if (registeredUsername !== undefined || registeredEmail !== undefined) {
        alert("Username / email already registered");
      } else {
        alert("Registration Succesful! Redirecting soon...");
        window.location.href = "./index.html";
        saveUserData();
      }
    });
};

const validateForm = (e) => {
  e.preventDefault();
  if (
    !checkUsername() ||
    !checkEmail() ||
    !checkPassword() ||
    !checkPasswordConfirm()
  ) {
    alert("Please complete the registration process");
  } else {
    checkUserExist();
  }
};

usernameInput.addEventListener("input", checkUsername);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
passwordConfirmInput.addEventListener("input", checkPasswordConfirm);
registerButton.addEventListener("click", validateForm);
