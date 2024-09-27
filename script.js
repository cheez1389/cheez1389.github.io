const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 0;
const size = images[0].clientWidth;

// Move to next slide
function slideTo(index) {
  carouselSlide.style.transform = 'translateX(' + (-size * index) + 'px)';
}

// Next button event listener
nextBtn.addEventListener('click', () => {
  nextSlide();
});

// Previous button event listener
prevBtn.addEventListener('click', () => {
  prevSlide();
});

// Auto Slide Function
function nextSlide() {
  if (counter >= images.length - 1) counter = -1;
  counter++;
  slideTo(counter);
}

function prevSlide() {
  if (counter <= 0) counter = images.length;
  counter--;
  slideTo(counter);
}

// Auto Slide at intervals (every 3 seconds)
let autoSlide = setInterval(nextSlide, 3000);

// Stop auto-slide on hover and restart on mouse leave
carouselSlide.addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

carouselSlide.addEventListener('mouseout', () => {
  autoSlide = setInterval(nextSlide, 3000);
});
