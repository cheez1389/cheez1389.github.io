document.addEventListener('DOMContentLoaded', function () {
    console.log('Carousel initialized');
    new Splide('#image-carousel', {
        heightRatio: 0.5,
        type       : 'loop',
        autoplay   : true,
        interval   : 3000,
        cover      : true,
        height     : '100%',
        width      : '100%',
        arrows     : true,
        pagination : false,
    }).mount();
});
