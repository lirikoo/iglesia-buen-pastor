document.addEventListener("DOMContentLoaded", function() {
    
    // Efecto de sombra y cambio en la barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.add('py-2'); // Reduce el padding superior/inferior
            navbar.classList.remove('py-3');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-3'); // Vuelve al padding original
        }
    });

});