const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
const navbar = document.querySelector("nav");

// Event listener pada elemen hamburger
hamburger.addEventListener("click", function () {
  // Toggle kelas CSS 'active' pada elemen hamburger dan menu
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

// Event listener pada elemen window untuk menutup navbar saat mengklik di luar area
window.addEventListener("click", function (event) {
  // Periksa apakah klik dilakukan di luar area navbar dan hamburger
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    // Toggle kelas CSS 'active' pada elemen hamburger dan menu
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
  }
});
