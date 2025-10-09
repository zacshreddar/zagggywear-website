// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// ===== FADE-IN ON SCROLL =====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// ===== HERO BACKGROUND SLIDESHOW (media/a1-a15) =====
const hero = document.querySelector('.hero');
const heroImages = [];
for (let i = 1; i <= 15; i++) {
  heroImages.push(`media/a${i}.jpg`);
}
let currentHeroIndex = 0;

function changeHero() {
  hero.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
}

changeHero();
setInterval(changeHero, 5000);

// ===== GALLERY IMAGES (images/drop1-drop8) =====
const galleryGrid = document.getElementById('galleryGrid');
for (let i = 1; i <= 8; i++) {
  const img = document.createElement('img');
  img.src = `images/drop${i}.jpg`;
  img.alt = `Drop ${i}`;
  galleryGrid.appendChild(img);
}

