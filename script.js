const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const siteHeader = document.getElementById('siteHeader');
const fadeItems = document.querySelectorAll('.fade-up');
const testimonialCards = document.querySelectorAll('.testimonial-card');
let testimonialIndex = 0;

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add('is-scrolled');
  } else {
    siteHeader.classList.remove('is-scrolled');
  }
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

fadeItems.forEach(item => observer.observe(item));

function rotateTestimonials() {
  testimonialCards.forEach((card, index) => {
    card.classList.toggle('active', index === testimonialIndex);
  });
  testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
}

if (testimonialCards.length > 0) {
  rotateTestimonials();
  setInterval(rotateTestimonials, 7000);
}

const navLinks = siteNav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

// Stat counter animation
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
  statNumbers.forEach(el => {
    const target = el.dataset.target;
    
    // Skip text-based stats
    if (el.classList.contains('stat-text')) {
      el.textContent = target;
      return;
    }
    
    const targetNum = parseInt(target);
    let current = 0;
    const increment = Math.ceil(targetNum / 50);
    const duration = 2000;
    const steps = duration / 30;
    const stepIncrement = targetNum / steps;
    
    const counter = setInterval(() => {
      current += stepIncrement;
      if (current >= targetNum) {
        el.textContent = targetNum;
        clearInterval(counter);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 30);
  });
}

const statsSection = document.querySelector('.stats-grid');
const statsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

if (statsSection) {
  statsObserver.observe(statsSection);
}
