document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        if (slides[index]) {
            slides[index].style.display = 'block';
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        console.log('Next slide clicked. Current index:', currentIndex);
    }

    // Inicie o slide apenas se existirem slides
    if (totalSlides > 0) {
        showSlide(currentIndex);

        // Adicione event listener para o botão "Próximo" apenas se existir
        const nextButton = document.getElementById('nextButton');
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
            console.log('Event listener added for nextButton.');
        } else {
            console.error('nextButton not found.');
        }
    } else {
        console.error('No slides found.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


// Função para rolar até um elemento específico
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
