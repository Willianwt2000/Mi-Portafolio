/*Funcion para scrolear la parte del heather */

window.addEventListener('scroll', function() {
  let menuSection = document.querySelector('.menu');
  let scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    menuSection.classList.remove('transparent');
  } else {
    menuSection.classList.add('transparent');
  }
});


// Validacion de input

function enviandoFormulario(params) {
  console.log('Enviando formulario')
  return false
}