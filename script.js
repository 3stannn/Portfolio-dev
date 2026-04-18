const clickSound = new Audio("audio/mouse-click.MP3");
clickSound.preload = "auto";

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

function sendEmail() {
   event.preventDefault();

   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});

   const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      message: document.getElementById("message").value
   };

   if (name || email || title || message === "") {
      alert("Please fill in all required fields.")
   } else {
      emailjs
      .send("service_bq3shtb", "template_8kq8az9", templateParams)
      .then(() => alert("Email Sent!").catch(() => alert("Email Not Sent!")));
   }
}