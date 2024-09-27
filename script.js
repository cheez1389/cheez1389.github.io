document.addEventListener('DOMContentLoaded', function () {
new Splide('#image-carousel', {
    type       : 'loop',
    autoplay   : true,
    interval   : 3000,
    height     : '100%',
    width      : '100%',
    arrows     : true,
    pagination : false,
    heightRatio: 0.5,
}).mount();

});
