let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let done = document.querySelector(".close");

toggler.onclick = function() {
    nav.style.transform = "translateY(0)";
};
done.onclick = function() {
    nav.style.transform = "translateY(-100%)";
};