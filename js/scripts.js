const celularSlideshows = document.querySelectorAll('[data-component="slideshow"]');

celularSlideshows.forEach(initCelularSlideshow);

function initCelularSlideshow(slideshow){

    let slides = document.querySelectorAll(`#${slideshow.id} [role="lista"] .slide`);

    console.log(slides);
    let index = 0, time = 5000;

    slides[index].classList.add('active');

    setInterval( () => {
        slides[index].classList.remove('active');

        index++;

        if(index === slides.length) index = 0;

        slides[index].classList.add('active');
    }, time);
}