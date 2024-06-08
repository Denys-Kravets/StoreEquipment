function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

window.addEventListener('resize', function () {
    var navLinks = document.getElementById("navLinks");
    if (window.innerWidth > 600) {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});