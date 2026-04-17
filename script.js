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

function testContact() {
   event.preventDefault();

   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});

   const senderName = document.getElementById("name").value
   const senderEmail = document.getElementById("email").value
   const message = document.getElementById("message").value

   console.log(senderName)
   console.log(senderEmail)
   console.log(message)
}