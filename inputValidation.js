const emailInput = document.querySelector(".email");
const pwdInput = document.querySelector(".pwd");
const warning = document.querySelector(".warning");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value;
  const pwdValue = pwdInput.value;

  if (!emailInput || !pwdValue) {
    warning.textContent = "All input fields are required.";
    warning.style.display = "block";
  } else if (emailRegex.test(emailValue)) {
    warning.textContent = "";
    warning.style.display = "none";
  } else {
    warning.textContent = "Please enter a valid email address.";
    warning.style.display = "block";
  }
  setTimeout(() => {
    warning.textContent = "";
    warning.style.display = "none";
  }, 2000);

  emailInput.value = "";
  pwdInput.value = "";
});
