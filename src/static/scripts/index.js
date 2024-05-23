const botonLike = document.querySelector('.container-like')
const corazonLike = document.querySelector('.img-like')

// Generador de chispitas
const generateSparkles = (numSparkles) => {
    const buttonRect = botonLike.getBoundingClientRect();

    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
  
        // Randomize position around the button
        const randomAngle = Math.random() * 2 * Math.PI; // Random angle in radians
        const randomRadius = botonLike.offsetWidth / 2 + (Math.random() * 20 + 10); // Random radius

        const randomX = buttonRect.left + (botonLike.offsetWidth / 2) + randomRadius * Math.cos(randomAngle);
        const randomY = buttonRect.top + (botonLike.offsetHeight / 2) + randomRadius * Math.sin(randomAngle);

        sparkle.style.left = `${randomX - buttonRect.left}px`; // Adjust position relative to the button
        sparkle.style.top = `${randomY - buttonRect.top}px`; // Adjust position relative to the button
  
        botonLike.appendChild(sparkle); // Append sparkle to the like button container

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
        generateSparkles(30);
    }
})