// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinksLeft = document.querySelector('.nav-links.left');
const navLinksRight = document.querySelector('.nav-links.right');

hamburger.addEventListener('click', () => {
  navLinksLeft.classList.toggle('active');
  navLinksRight.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close the menu when a link is clicked (optional)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksLeft.classList.remove('active');
    navLinksRight.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Fade-in on Scroll for Content Sections
const faders = document.querySelectorAll('.content');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
