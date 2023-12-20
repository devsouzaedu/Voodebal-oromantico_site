document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

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

    // Rolar suavemente até um elemento específico ao clicar nos links de navegação
    document.querySelectorAll('a.nav-link').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });

            // Fechar o navbar após o clique
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            
            if (navbarToggler && navbarCollapse) {
                navbarToggler.classList.add('collapsed');
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Função para rolar até um elemento específico
    window.scrollToElement = function (elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
