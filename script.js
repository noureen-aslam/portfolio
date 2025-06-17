// Fade header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.opacity = 1 - window.scrollY / 600;
});
