// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Fade-in effect
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check

    // Image slider
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const totalSlides = images.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });
});
