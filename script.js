// ===== Activity 7: Contact form =====
const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

// This only runs when all fields pass the browser's checks
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value;
  statusText.textContent = "Thanks, " + name + "! (Demo form: messages are not sent yet.)";

  form.reset(); // clear the fields
});

// ===== Activity 8: Phone menu =====
const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Tap the button: show or hide the menu
menuButton.addEventListener("click", function () {
  menu.classList.toggle("is-open");
});

// Tap a menu link: hide the menu again
const menuLinks = document.querySelectorAll("#menu a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("is-open");
  });
});
