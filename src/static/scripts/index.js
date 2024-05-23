const botonLike = document.querySelector('.container-like')
const corazonLike = document.querySelector('.img-like')

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