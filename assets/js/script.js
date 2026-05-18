// Hamburger menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('show');
  });
});

// Scroll fade-in for .fade-in sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}
