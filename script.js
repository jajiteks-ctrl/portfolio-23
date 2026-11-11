
/* TYPING ANIMATION */

const typingElement = document.getElementById("typing");

const roles = [
    "Python Developer",
    "Full-Stack Developer",
    "Django Developer",
    "Backend Developer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    typingElement.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        deleting = !deleting;

        if (!deleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeEffect, deleting ? 1200 : 400);
    }
}

typeEffect();


/* DARK / LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function updateThemeIcon() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";

    themeToggle.innerHTML = dark
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

    if (window.lucide) lucide.createIcons();
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    updateThemeIcon();
});


/* MOBILE NAVBAR */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.innerHTML = navLinks.classList.contains("active")
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) lucide.createIcons();
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) lucide.createIcons();
    });
});


/* FOOTER YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ICONS */

if (window.lucide) {
    lucide.createIcons();
}
