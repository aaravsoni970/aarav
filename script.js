function toggleMenu() {
  document.getElementById("mainNav").querySelector("ul").classList.toggle("show");
}

// AOS initialization (agar add karna chaahe)
AOS.init({
  duration: 800,
  once: true
});
