// block access
if (sessionStorage.getItem("loggedIn") !== "true") {
  window.location.replace("login.html");
}

// prevent cache restore
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});
