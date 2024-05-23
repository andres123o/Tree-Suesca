const botonLike = document.querySelector('.container-like')
const corazonLike = document.querySelector('.img-like')

botonLike.addEventListener('click', () => {
    corazonLike.src = '/src/static/utils/icons8-me-gusta-relleno-48.png';
    botonLike.style.backgroundColor = 'white'
    console.log('Hello world')
})