// global.js — small shared script for all pages
document.addEventListener('DOMContentLoaded', () => {

  // mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    // Toggle menu open/close when hamburger is clicked
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuBtn.classList.toggle("open");

      // Hamburger → X
      menuBtn.textContent = navMenu.classList.contains("show") ? "X" : "☰";
    });

    // Close menu when any nav link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("open");
        menuBtn.textContent = "☰"; // back to hamburger
      });
    });

    // Close menu when clicking outside the header
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header")) {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("open");
        menuBtn.textContent = "☰"; // back to hamburger
      }
    });
  }

  // smooth anchor scroll for links with data-target
  document.querySelectorAll('a[data-target]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('data-target');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // basic testimonial rotate
  const t = document.querySelectorAll('.testimonial');
  if (t.length > 1) {
    let i = 0;
    setInterval(() => {
      t.forEach(x => x.classList.remove('active'));
      t[i].classList.add('active');
      i = (i + 1) % t.length;
    }, 4200);
  }

  // set current year
  document.querySelectorAll('span.year').forEach(s => s.textContent = new Date().getFullYear());

});
