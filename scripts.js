const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");

/* Abre e fecha menu */
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Fecha o menu ao clicar em um link (mobile) */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* Garante que o menu não fique bugado ao redimensionar */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
  }
});