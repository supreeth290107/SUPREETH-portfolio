// Show welcome message
function showMessage() {
  alert("Hello! Welcome to my portfolio 😊");
}

// Change theme color
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Display current date & time
function showDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText =
    "Current time: " + now.toLocaleString();
}

// Simple contact validation
function validateContact() {
  const contact = "supreeth290107";
  alert("Contact saved: " + contact);
}

// Run on page load
window.onload = function () {
  showDateTime();
};
