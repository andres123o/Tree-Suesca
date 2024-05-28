const botonLike = document.querySelector('.container-like')
const corazonLike = document.querySelector('.img-like')
const containerInfo = document.querySelector('.container-info')
const containerImg = document.querySelector('.container-img')
const containerImgHeight = containerImg.offsetHeight

// Generador de chispitas
const generateSparkles = (numSparkles) => {
    const buttonRect = botonLike.getBoundingClientRect(); // Obtener las dimensiones y posición del botón

    const radius = buttonRect.width / 2 + 8; // Radio del círculo (ajustable según necesites)
    const angleIncrement = (2 * Math.PI) / numSparkles; // Incremento de ángulo para distribuir uniformemente las chispitas

    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Calcular posición uniformemente distribuida alrededor del botón
        const angle = i * angleIncrement;
        const sparkleX = buttonRect.left + buttonRect.width / 2 + radius * Math.cos(angle);
        const sparkleY = buttonRect.top + buttonRect.height / 2 + radius * Math.sin(angle);

        sparkle.style.left = `${sparkleX - buttonRect.left}px`; // Ajustar la posición relativa al botón
        sparkle.style.top = `${sparkleY - buttonRect.top}px`; // Ajustar la posición relativa al botón

        botonLike.appendChild(sparkle);

        // Eliminar la chispita después de que la animación haya terminado
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

let isLike = false // Inicialmente no marca, sin like

botonLike.addEventListener('click', () => {
    if (isLike) {
        // Si esta marcado, desmarcarlo
        corazonLike.src = '/src/static/utils/icons8-corazones-32.png';
        isLike = false
    } else {
        // Si no esta marcado, marcarlo
        corazonLike.src = '/src/static/utils/icons8-me-gusta-relleno-48.png';
        isLike = true
        // Generate sparkles on click
        generateSparkles(20);
    }
})

// Lógica para "more" y "less" en el texto de la descripción
const descripcion = document.getElementById('descripcion-texto');
const fullText = descripcion.textContent;
const maxTextLength = 100; // Máxima longitud del texto visible antes de "more"

if (fullText.length > maxTextLength) {
    const visibleText = fullText.slice(0, maxTextLength) + '... ';
    const moreText = document.createElement('span');
    moreText.classList.add('show-more');
    moreText.textContent = 'more';

    descripcion.textContent = visibleText;
    descripcion.appendChild(moreText);

    moreText.addEventListener('click', function () {
        if (descripcion.classList.contains('show-more-expanded')) {
            descripcion.textContent = visibleText;
            moreText.textContent = 'more';
            descripcion.appendChild(moreText);
            descripcion.classList.remove('show-more-expanded');
        } else {
            descripcion.textContent = fullText + ' ';
            moreText.textContent = 'less';
            descripcion.appendChild(moreText);
            descripcion.classList.add('show-more-expanded');
        }
    });
}

// Funcionalidad del carrusel
document.addEventListener("DOMContentLoaded", () => {
    const carruselImages = document.querySelectorAll(".carrusel-img");
    console.log(carruselImages)

    carruselImages.forEach(img => {

        img.addEventListener("click", () => {
            // Quitar la clase 'selected' de todas las imágenes
            carruselImages.forEach(img => img.classList.remove("selected"));
            
            // Añadir la clase 'selected' a la imagen clicada
            img.classList.add("selected");

            // Cambiar la imagen de fondo de .container-img
            containerImg.style.backgroundImage = `url(${img.src})`;
        });
    });
});
