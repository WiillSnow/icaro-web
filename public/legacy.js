// public/legacy.js

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const logo = document.getElementById("logo");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    logo.src = "/img/icaro-color.png";   // ← ruta absoluta
  } else {
    header.classList.remove("scrolled");
    logo.src = "/img/icaro-blanco.png";  // ← ruta absoluta
  }
});

window.addEventListener('scroll', () => {
  const contactBox = document.getElementById('contact-box');
  const hero = document.querySelector('.hero');
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  if (window.scrollY > heroBottom - 100) {
    contactBox.style.display = 'block';
  } else {
    contactBox.style.display = 'none';
  }
});
