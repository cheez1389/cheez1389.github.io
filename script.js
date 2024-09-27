document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type       : 'loop',       // Carousel will loop
        autoplay   : true,         // Enable auto-scroll
        interval   : 3000,         // Auto-scroll interval (3 seconds)
        cover      : true,
        height     : '100%',       // Make sure the height is 100%
        width      : '100%',       // Make sure the width is 100%
        arrows     : true,         // Enable navigation arrows
        pagination : false,        // Disable pagination (dots)
    }).mount();
});
