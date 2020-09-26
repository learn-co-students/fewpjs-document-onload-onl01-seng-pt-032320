document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let message = document.querySelector('p');
  message.innerHTML = "This is really cool!";
});