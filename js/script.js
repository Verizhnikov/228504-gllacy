var link = document.querySelector(".feedback > .btn");
var popup = document.querySelector(".feedback-popup");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".btn-exit");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-show");
	popup.classList.add("modal-anim");
	overlay.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-anim");
  overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-anim");
      overlay.classList.remove("modal-show");
    }
  }
});