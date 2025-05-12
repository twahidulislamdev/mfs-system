// This Not Ideal Way
// document.querySelector(".loginBtn").addEventListener("click", function () {
//   let inputEmail = document.querySelector(".inputEmail").value;
//   let inputPassword = document.querySelector(".inputPassword").value;
//   if (inputEmail === "twahid746@gmail.com" && inputPassword === "123") {
//     console.log("Login Successfull");
//   } else {
//     alert("You did someThing Wrong");
//   }
// });
// This Not Ideal Way

// Try Another Way
document.querySelector(".loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  const inputEmail = document.querySelector(".inputEmail").value;
  const inputPassword = document.querySelector(".inputPassword").value;
  // console.log(inputEmail, inputPassword);

  if (inputEmail === "tw@gmail.com" && inputPassword === "123") {
    console.log("Login Successfull");
    window.location.href = "file:///A:/Programming%20Hiro/Mfs%20system/homePage.html"
  } else {
    alert("You did someThing Wrong");
  }
});
