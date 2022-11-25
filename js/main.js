/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger"); //Query selector returns first element which suits the selector
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    menu.classList.add("show");
});
close.addEventListener("click", () => {
    menu.classList.remove("show");
});
