
// FUNCIONES GLOBALES

// Determinar si un dato es un entero
function esEntero(x){
	var y = parseInt(x);
	if (isNaN(y)) 
		return false;
	return x == y && x.toString() == y.toString();
}

// Mayoscula la primera letra de un string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Abrir ventana Modal 
function abrirVentana(e){
  e.preventDefault();
  modalC.style.visibility = 'visible';
  modal.classList.toggle('modal-close');

  // Cambiar datos de la ventana segun el planeta
  tituloModal = document.getElementById('titulo-modal');
  tituloModal.innerHTML = capitalizeFirstLetter(planetaSeleccionado);
  
  imagenModal = document.getElementById('img-modal');
  imagenModal.src = srcImg[numPlaneta];

  document.getElementById('valor-diametro').innerHTML = new Intl.NumberFormat().format(diametroPlaneta[numPlaneta]);
  document.getElementById('valor-masa').innerHTML = masaPlaneta[numPlaneta];
  document.getElementById('valor-traslacion').innerHTML = traslacionPlaneta[numPlaneta];
  document.getElementById('valor-rotacion').innerHTML = rotacionPlaneta[numPlaneta];
  document.getElementById('valor-satelites').innerHTML = satelitePlaneta[numPlaneta];
}

function abrirVentanaSec(e) {
  e.preventDefault();
  modalCSec.style.visibility = 'visible';
  modalSec.classList.toggle('modal2-close');

  let tituloModalSec = document.getElementById('titulo2-modal');
  tituloModalSec.innerHTML = capitalizeFirstLetter(planetaSeleccionado);
  
  let resultadoPeso = document.getElementById('resultado-peso');
  resultadoPeso.innerHTML = pesoEnElPlaneta;
}

