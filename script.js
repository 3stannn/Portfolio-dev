const clickSound = new Audio("audio/mouse-click.MP3");
clickSound.preload = "auto";

const EMAILJS_PUBLIC_KEY = "ZGCaq8KxwU3V8kL-q";
const EMAILJS_SERVICE_ID = "service_bq3shtb";
const EMAILJS_TEMPLATE_ID = "template_5v61p6i";

function themeFunction() {
   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});
   
   var body = document.body;
   body.classList.toggle("light-mode");

   const icon = document.getElementById("theme-icon");
   if (!icon) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      icon.src = "img/moon.png";
      icon.alt = "Moon icon";
   } else {
      icon.src = "img/sun.png";
      icon.alt = "Sun icon";
   }

   const iconScroll = document.getElementById("scroll-icon")
   if (!iconScroll) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      iconScroll.src = "img/light-mode-arrow.png";
      iconScroll.alt = "Moon icon";
   } else {
      iconScroll.src = "img/dark-mode-arrow.png";
      iconScroll.alt = "Sun icon";
   }
}

function warnUser() {
   event.preventDefault();

   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});

   alert("The email system is currently under development. For now, you can reach me via Discord.")
}

function sendEmail(event) {
   event.preventDefault();

   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});

   const name = document.getElementById("name")?.value.trim();
   const email = document.getElementById("email")?.value.trim();
   const title = document.getElementById("title")?.value.trim();
   const message = document.getElementById("message")?.value.trim();

   if (!name || !email || !title || !message) {
      alert("Please complete all required fields.");
      return;
   }

   if (typeof emailjs === "undefined" || EMAILJS_PUBLIC_KEY === "ZGCaq8KxwU3V8kL-q") {
      alert("EmailJS is not configured yet. Add your public key in script.js.");
      return;
   }

   const submitButton = document.querySelector(".submit-email");
   if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "sending...";
   }

   const templateParams = {
      name,
      email,
      title,
      message
   };

   emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
         alert("Message sent successfully.");
         document.getElementById("contact-form")?.reset();
      })
      .catch((error) => {
         console.error("EmailJS error:", error);
         alert("Failed to send message. Please try again.");
      })
      .finally(() => {
         if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "send-email()";
         }
      });
}

document.addEventListener("DOMContentLoaded", () => {
   if (typeof emailjs !== "undefined") {
      emailjs.init({
         publicKey: EMAILJS_PUBLIC_KEY
      });
   }

   const contactForm = document.getElementById("contact-form");
   if (contactForm) {
      contactForm.addEventListener("submit", sendEmail);
   }
});