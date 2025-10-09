// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// ===== FADE-IN ON SCROLL =====
const sections = document.querySelectorAll('.gallery, .about, .contact');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
});

// ===== HERO BACKGROUND SLIDESHOW (a1-a15 in media folder) =====
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

// Initial hero background
changeHero();
// Change hero background every 5 seconds
setInterval(changeHero, 5000);
