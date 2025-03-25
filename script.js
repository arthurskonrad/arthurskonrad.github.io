const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  navLinks.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const isClickInsideMenu = navLinks.contains(event.target) || menuToggle.contains(event.target);

  if (!isClickInsideMenu) {
    navLinks.classList.remove("show");
  }
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
