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
