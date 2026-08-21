const sentModalContainer = document.getElementById("sent-modal");
const notSentModalContainer = document.getElementById("not-sent-modal");
const fillModalContainer = document.getElementById("fill-modal");
const themeStorageKey = "portfolio-theme";

function initTheme() {
   if (localStorage.getItem(themeStorageKey) === "light") {
      document.body.classList.add("light-mode");
   }
}

function toggleThemeClass() {
   document.body.classList.toggle("light-mode");
   if (document.body.classList.contains("light-mode")) {
      localStorage.setItem(themeStorageKey, "light");
   } else {
      localStorage.removeItem(themeStorageKey);
   }
}

function themeFunction() {
    // Check if browser supports View Transitions API
    if (!document.startViewTransition) {
        toggleThemeClass();
        return;
    }
    
    // Animate with View Transitions
    document.startViewTransition(() => {
        toggleThemeClass();
    });
}

function clearInput() {
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("title").value = "";
   document.getElementById("message").value = "";
}

function sendEmail(event) {
   if(event) event.preventDefault();

   const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      message: document.getElementById("message").value
   };

   if (!templateParams.name || !templateParams.email || !templateParams.title || !templateParams.message) {
      fillModalContainer.classList.add("show");
      return;
   }

   emailjs
      .send("service_bq3shtb", "template_8kq8az9", templateParams)
      .then(() => sentModalContainer.classList.add("show"))
      .catch(() => notSentModalContainer.classList.add("show"));
   
   clearInput();
}

function closeModal() {
   sentModalContainer.classList.remove("show");
   notSentModalContainer.classList.remove("show");
   fillModalContainer.classList.remove("show");
}

initTheme();