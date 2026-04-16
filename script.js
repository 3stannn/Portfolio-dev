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
}

function warnUser() {
   clickSound.currentTime = 0;
   clickSound.play().catch(() => {});
   alert("The email system is currently under development. For now, you can reach me via Discord.")
}