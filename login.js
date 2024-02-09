// Function to toggle visibility of signup and login forms
function toggleSignupForm() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  signupForm.style.display = "block";
  loginForm.style.display = "none";
}

function toggleLoginForm() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  signupForm.style.display = "none";
  loginForm.style.display = "block";
}

// You can add functions for handling signup and login submissions
function submitSignup() {
  // Implement signup logic
  console.log("Signup submitted");
}

function submitLogin() {
  // Implement login logic
  console.log("Login submitted");
}
