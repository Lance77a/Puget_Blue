const submit = document.querySelector("#submit");
const message = "You submitted this form successfully! If this was your site, you'd be getting a notification email from a form handler.";

submit.addEventListener("click", () => alert(message));