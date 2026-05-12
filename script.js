// THEME
function changeTheme() {
  document.body.classList.toggle("dark");
}

// CONTACT FORM (front-end demo)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("formStatus").innerText =
    `Thanks ${name}, message sent! 🚀`;

  this.reset();
});