const sentModalContainer = document.getElementById("sent-modal")
const notSentModalContainer = document.getElementById("not-sent-modal")
const fillModalContainer = document.getElementById("fill-modal")
const chatbotModalContainer = document.getElementById("chatbotModalContainer")

function themeFunction() {
   
   var body = document.body;
   body.classList.toggle("light-mode");

   // Save theme preference to localStorage
   const isLightMode = body.classList.contains("light-mode");
   localStorage.setItem("theme", isLightMode ? "light" : "dark");

   const icon = document.getElementById("theme-icon");
   if (!icon) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      icon.src = "img/moon.png";
   } else {
      icon.src = "img/sun.png";
   }

   const iconScroll = document.getElementById("scroll-icon")
   if (!iconScroll) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      iconScroll.src = "img/light-mode-arrow.png";
   } else {
      iconScroll.src = "img/dark-mode-arrow.png";
   }

   const githubIcon = document.getElementById("github-icon")
   if (!githubIcon) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      githubIcon.src = "img/github-light.png";
   } else {
      githubIcon.src = "img/github.png";
   }

   const githubIcon2 = document.getElementById("github-icon2")
   if (!githubIcon2) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      githubIcon2.src = "img/github-light.png";
   } else {
      githubIcon2.src = "img/github.png";
   }

   const chatbotIcon = document.getElementById("chatbot-icon")
   if (!chatbotIcon) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      chatbotIcon.src = "img/comments-light.png";
   } else {
      chatbotIcon.src = "img/comments.png";
   }

   const expressIcon = document.getElementById("ex-icon")
   if (!chatbotIcon) {
      return;
   }

   if (body.classList.contains("light-mode")) {
      expressIcon.src = "img/express-light.png";
   } else {
      expressIcon.src = "img/express.png";
   }
}

function loadTheme() {
   const savedTheme = localStorage.getItem("theme");
   
   if (savedTheme === "light") {
      // Apply light mode without triggering the full themeFunction
      var body = document.body;
      body.classList.add("light-mode");
      
      // Update icons to light mode
      const icon = document.getElementById("theme-icon");
      if (icon) icon.src = "img/moon.png";
      
      const iconScroll = document.getElementById("scroll-icon");
      if (iconScroll) iconScroll.src = "img/light-mode-arrow.png";
      
      const githubIcon = document.getElementById("github-icon");
      if (githubIcon) githubIcon.src = "img/github-light.png";
      
      const githubIcon2 = document.getElementById("github-icon2");
      if (githubIcon2) githubIcon2.src = "img/github-light.png";
      
      const chatbotIcon = document.getElementById("chatbot-icon");
      if (chatbotIcon) chatbotIcon.src = "img/comments-light.png";
      
      const expressIcon = document.getElementById("ex-icon");
      if (expressIcon) expressIcon.src = "img/express-light.png";
   }
}

// Load theme on page load
document.addEventListener("DOMContentLoaded", loadTheme);

function clearInput() {
   const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      message: document.getElementById("message").value
   };

   document.getElementById("name").value = ""
   document.getElementById("email").value = ""
   document.getElementById("title").value = ""
   document.getElementById("message").value = ""
}
 
function warnUser() {
   event.preventDefault();

   alert("The email system is currently under development. For now, you can reach me via Discord.")
}

function sendEmail() {
   event.preventDefault();

   const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      message: document.getElementById("message").value
   };

   if (
      !templateParams.name ||
      !templateParams.email ||
      !templateParams.title ||
      !templateParams.message
  ) {
      fillModalContainer.classList.add("show")
      return;
  }

   emailjs
      .send("service_bq3shtb", "template_8kq8az9", templateParams)
      .then(() => sentModalContainer.classList.add("show"))
      .catch(() => notSentModalContainer.classList.add("show"))
   
   document.getElementById("name").value = ""
   document.getElementById("email").value = ""
   document.getElementById("title").value = ""
   document.getElementById("message").value = ""
}

function closeModal() {
   sentModalContainer.classList.remove("show")
   notSentModalContainer.classList.remove("show")
   fillModalContainer.classList.remove("show")
}

function chatBot() {
   chatbotModalContainer.classList.add("show")
}

function closeChatBot() {
   chatbotModalContainer.classList.remove("show")
}