const button = document.querySelector("#tr-group");
const navMenu = document.querySelector(".nav-container-menu");
const body = document.querySelector("body");

button.addEventListener("click", (e) => {
    button.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
});
