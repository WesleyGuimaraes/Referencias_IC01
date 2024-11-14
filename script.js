const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;

function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function showPreviousItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', showNextItem);
prevButton.addEventListener('click', showPreviousItem);