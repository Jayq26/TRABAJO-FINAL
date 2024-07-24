const anuncioSlides = document.querySelectorAll('.slide-anuncio');
let anuncioCurrentIndex = 0;

function showAnuncioSlide(index) {
    anuncioSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    anuncioSlides[index].classList.add('active');
}

function nextAnuncioSlide() {
    anuncioCurrentIndex = (anuncioCurrentIndex + 1) % anuncioSlides.length;
    showAnuncioSlide(anuncioCurrentIndex);
}

setInterval(nextAnuncioSlide, 5000);

showAnuncioSlide(anuncioCurrentIndex);