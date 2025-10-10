// public/legacy.js
function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.style.display = "flex";
  document.body.classList.add("modal-open");     // <— bloquea scroll del body
  // cerrar tocando el fondo (una vez)
  if (!m._backdropBound) {
    m.addEventListener("click", (e) => { if (e.target === m) closeModal(id); });
    m._backdropBound = true;
  }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.style.display = "none";
  document.body.classList.remove("modal-open");  // <— reanuda scroll del body
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

// === Menú hamburguesa ===
(function () {
  const header = document.querySelector(".main-header");
  const btn = document.querySelector(".hamburger-btn");
  const nav = document.getElementById("main-nav");

  if (!header || !btn || !nav) return;

  const closeMenu = () => {
    header.classList.remove("menu-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = ""; // desbloquea scroll
  };

  const openMenu = () => {
    header.classList.add("menu-open");
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // bloquea scroll de fondo
  };

  btn.addEventListener("click", () => {
    if (header.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer click en cualquier enlace del nav (mejor UX)
  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.closest("a")) closeMenu();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Cerrar si cambias a escritorio (>768px)
  let lastW = window.innerWidth;
  window.addEventListener("resize", () => {
    const w = window.innerWidth;
    if (lastW <= 768 && w > 768) closeMenu();
    lastW = w;
  });
})();

