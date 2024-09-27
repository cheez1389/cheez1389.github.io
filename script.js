document.addEventListener('DOMContentLoaded', function () {
    alert("JavaScript is working!"); // Check if JS is working

    new Splide('#image-carousel', {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        cover: true,
        height: '100%',
        width: '100%',
        arrows: true,
        pagination: false,
    }).mount();
});
