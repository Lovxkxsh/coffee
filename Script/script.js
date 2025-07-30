
const form = document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("status");
  emailjs.sendForm("service_m6a45t5", "template_nxg6xas", this)
    .then(function() {
      status.innerText = "✔ Message sent successfully!";
      status.style.color = "green";
    }, function(error) {
      status.innerText = ":x: Failed to send message. Try again.";
      status.style.color = "red";
      console.error("EmailJS Error:", error);
    });
  this.reset();
});

