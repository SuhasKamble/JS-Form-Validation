let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
  let allForms = document.querySelectorAll(".form-control");
  let formLength = allForms.length - 1;
  let successNo = 0;
  allForms.forEach((form) => {
    if (form.classList.contains("success")) {
      successNo++;
    }
  });

  if (successNo == formLength) {
    console.log("Form Submmited");
    swal("Success", "Form Submitted!", "success");
  }
});

const validate = () => {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  let passwordValue = password.value.trim();
  let cpasswordValue = cpassword.value.trim();

  //   username check
  if (!usernameValue) {
    setError(username, "Username must not be blank");
  } else if (usernameValue.length < 3) {
    setError(username, "Username atleast containt 3 chars");
  } else {
    setSuccess(username);
  }

  //   email check
  if (emailValue == "") {
    setError(email, "Email must not be blank");
  } else if (emailValue.indexOf("@") === -1) {
    setError(email, "Email must contain @ char");
  } else if (emailValue.length < 3) {
    setError(email, "Email must contain atleast 3 chars");
  } else {
    setSuccess(email);
  }

  //   phone check
  if (phoneValue.length < 10) {
    setError(phone, "Phone number atleast contains 10 numbers");
  } else {
    setSuccess(phone);
  }

  //   password check
  if (passwordValue == "") {
    setError(password, "Password must not be blank ");
  } else if (passwordValue.length < 6) {
    setError(password, "Password atleast contains 6 char");
  } else {
    setSuccess(password);
  }

  //   cpassword check
  if (cpasswordValue == "") {
    setError(cpassword, "Confirm Password must not be blank ");
  } else if (passwordValue != cpasswordValue) {
    setError(cpassword, "Password do not match");
  } else {
    setSuccess(cpassword);
  }
};

const setSuccess = (parent) => {
  let parentEle = parent.parentElement;
  parentEle.className = "form-control success";
};

const setError = (parent, msg) => {
  let parentEle = parent.parentElement;
  parentEle.className = "form-control error";
  let small = parentEle.querySelector("small");
  small.innerText = msg;
};
