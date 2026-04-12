function themeFunction() {
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