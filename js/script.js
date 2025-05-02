// Dynamic Text Rotator
const texts = ["Developer", "UI/UX Designer", "Data Scientist"];
let count = 0;
const dynamicText = document.getElementById("dynamic-text");

setInterval(() => {
    dynamicText.style.opacity = 0;
    setTimeout(() => {
        count = (count + 1) % texts.length;
        dynamicText.textContent = texts[count];
        dynamicText.style.opacity = 1;
    }, 500);
}, 2000);

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
