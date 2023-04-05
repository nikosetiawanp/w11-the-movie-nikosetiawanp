const API_ENDPOINT = " http://localhost:3000/users/";
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");

const checkUserExist = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      const registeredUsername = data.find(
        (e) => e.username === usernameInput.value
      );
      const registeredPassword = data.find(
        (e) => e.password === passwordInput.value
      );
      if (
        registeredUsername === undefined ||
        registeredPassword === undefined
      ) {
        usernameInput.style.backgroundColor = "pink";
        passwordInput.style.backgroundColor = "pink";
        alert("Invalid Email / Password");
      } else if (registeredUsername !== registeredPassword) {
        usernameInput.style.backgroundColor = "pink";
        passwordInput.style.backgroundColor = "pink";
        alert("Invalid Email / Password");
      } else if (!registeredUsername || !registeredPassword) {
        usernameInput.style.backgroundColor = "pink";
        passwordInput.style.backgroundColor = "pink";
        alert("Invalid Email / Password");
      } else {
        usernameInput.style.backgroundColor = "#D9D9D9";
        passwordInput.style.backgroundColor = "#D9D9D9";
        localStorage.setItem("userID", `${registeredUsername.id}`);
        alert("Login succesful! Redirecting soon...");
        window.location.href = "./homepage.html";
      }
    });
};
// Press enter to submit
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("login-button").click();
  }
});

loginButton.addEventListener("click", checkUserExist);
