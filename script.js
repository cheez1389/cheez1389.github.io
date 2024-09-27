const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Auto scroll function
let autoScroll = setInterval(() => {
    moveToNextSlide();
}, 3000);

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Button event listeners
nextBtn.addEventListener('click', () => {
    clearInterval(autoScroll);  // Stop auto scroll when manually clicked
    moveToNextSlide();
    autoScroll = setInterval(moveToNextSlide, 3000);  // Restart auto scroll
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoScroll);  // Stop auto scroll when manually clicked
    moveToPrevSlide();
    autoScroll = setInterval(moveToNextSlide, 3000);  // Restart auto scroll
});
