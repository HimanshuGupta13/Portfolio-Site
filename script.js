// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach
    (anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute
                ('href')).scrollIntoView({
                    behavior: 'smooth'
                });
        });
    });
// Navbar scroll effect

window.addEventListener('scroll', () => {
    const navbar = document.querySelector(' .navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent click from bubbling
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    }
});

// Optional: close menu when clicking on a nav link
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
