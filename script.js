const sentModalContainer = document.getElementById("sent-modal")
const notSentModalContainer = document.getElementById("not-sent-modal")
const fillModalContainer = document.getElementById("fill-modal")
const chatbotModalContainer = document.getElementById("chatbotModalContainer")
const themeStorageKey = "portfolio-theme"

function applyThemeAssets() {
   const body = document.body;
   const isLightMode = body.classList.contains("light-mode");

   const icon = document.getElementById("theme-icon");
   if (icon) {
      icon.src = isLightMode ? "img/moon.svg" : "img/sun.svg";
   }

   const iconScroll = document.getElementById("scroll-icon")
   if (iconScroll) {
      iconScroll.src = isLightMode ? "img/light-mode-arrow.png" : "img/dark-mode-arrow.png";
   }

   const githubIcon = document.getElementById("github-icon")
   if (githubIcon) {
      githubIcon.src = isLightMode ? "img/github-light.png" : "img/github.png";
   }

   const githubIcon2 = document.getElementById("github-icon2")
   if (githubIcon2) {
      githubIcon2.src = isLightMode ? "img/github-light.png" : "img/github.png";
   }

   const chatbotIcon = document.getElementById("chatbot-icon")
   if (chatbotIcon) {
      chatbotIcon.src = isLightMode ? "img/chat.svg" : "img/chat-light.svg";
   }

   const expressIcon = document.getElementById("ex-icon")
   if (expressIcon) {
      expressIcon.src = isLightMode ? "img/express-light.png" : "img/express.png";
   }

   const messageIcon = document.getElementById("message-icon")
   if (messageIcon) {
      messageIcon.src = isLightMode ? "img/message-light.svg" : "img/message.svg";
   }

   const cvIcon = document.getElementById("cv-icon")
   if (cvIcon) {
      cvIcon.src = isLightMode ? "img/file-download-light.svg" : "img/file-download.svg";
   }
}

function initTheme() {
   if (localStorage.getItem(themeStorageKey) === "light") {
      document.body.classList.add("light-mode");
   }

   applyThemeAssets();
}

function themeFunction() {
   
   var body = document.body;
   body.classList.toggle("light-mode");

   if (body.classList.contains("light-mode")) {
      localStorage.setItem(themeStorageKey, "light");
   } else {
      localStorage.removeItem(themeStorageKey);
   }

   applyThemeAssets();
}

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

initTheme();