const submit = document.getElementById("submit");
const error = document.querySelectorAll(".error");
const errorSign = document.querySelectorAll(".errorSign");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

submit.addEventListener("click", myFunc);

function myFunc() {
  if (firstName.value == "") {
    error[0].classList.add("active");
    errorSign[0].classList.add("active");
  } else {
    error[0].classList.remove("active");
  }
  if (lastName.value == "") {
    error[1].classList.add("active");
    errorSign[1].classList.add("active");
  } else {
    error[1].classList.remove("active");
  }
  if (email.value == "") {
    error[2].classList.add("active");
    errorSign[2].classList.add("active");
  } else {
    error[2].classList.remove("active");
  }
  if (password.value == "") {
    error[3].classList.add("active");
    errorSign[3].classList.add("active");
  } else {
    error[3].classList.remove("active");
  }
}
