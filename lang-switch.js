document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav a[data-page]');
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.style.display = 'none';
    section.style.opacity = 0;
  });
  const first = document.getElementById('home');
  first.style.display = 'block';
  setTimeout(() => first.style.opacity = 1, 50);


  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-page');
      const targetSection = document.getElementById(targetId);

      sections.forEach(section => {
        section.style.opacity = 0;
        setTimeout(() => {
          section.style.display = 'none';
        }, 400);
      });

      setTimeout(() => {
        targetSection.style.display = 'block';
        setTimeout(() => {
          targetSection.style.opacity = 1;
        }, 50);
      }, 400);
    });
  });
});
