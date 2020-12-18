
let cerrar = document.querySelectorAll('.close')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];
let tituloModal;

let cerrarSec = document.querySelectorAll('.close2')[0];
let modalSec = document.querySelectorAll('.modal2')[0];
let modalCSec = document.querySelectorAll('.modal2-container')[0];

cerrarSec.addEventListener('click', () => {
  modalSec.classList.toggle('modal2-close')
  pesoEnElPlaneta = "";
  setTimeout(() => {
    modalCSec.style.visibility = 'hidden';
  }, 1000)
})

cerrar.addEventListener('click', () => {
  document.getElementById('input-value').value = "";
  modal.classList.toggle('modal-close')
  setTimeout(() => {
    modalC.style.visibility = 'hidden';
  }, 1000)
})