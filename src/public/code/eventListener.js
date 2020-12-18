
//funciones determinan boton de planeta seleccionado
document.getElementById('btn-mercurio').addEventListener('click', (e)=>{
  console.log('soy mercurio');
  planetaSeleccionado = 'mercurio';
  numPlaneta = 0;
  abrirVentana(e);
})

document.getElementById('btn-venus').addEventListener('click', (e)=>{
  console.log('soy venus');
  planetaSeleccionado = 'venus';
  numPlaneta = 1;
  abrirVentana(e);
})

document.getElementById('btn-tierra').addEventListener('click', (e)=>{
  console.log('soy tierra');
  planetaSeleccionado = 'tierra';
  numPlaneta = 2;
  abrirVentana(e);
})

document.getElementById('btn-marte').addEventListener('click', (e)=>{
  console.log('soy marte');
  planetaSeleccionado = 'marte';
  numPlaneta = 3;
  abrirVentana(e);
})

document.getElementById('btn-jupiter').addEventListener('click', (e)=>{
  console.log('soy jupiter');
  planetaSeleccionado = 'jupiter';
  numPlaneta = 4;
  abrirVentana(e);
})

document.getElementById('btn-saturno').addEventListener('click', (e)=>{
  console.log('soy saturno');
  planetaSeleccionado = 'saturno';
  numPlaneta = 5;
  abrirVentana(e);
})

document.getElementById('btn-urano').addEventListener('click', (e)=>{
  console.log('soy urano');
  planetaSeleccionado = 'urano';
  numPlaneta = 6;
  abrirVentana(e);
})

document.getElementById('btn-neptuno').addEventListener('click', (e)=>{
  console.log('soy neptuno');
  planetaSeleccionado = 'neptuno';
  numPlaneta = 7;
  abrirVentana(e);
})

document.getElementById('calcular').addEventListener('click', (e) => {
  let pesoNormal = document.getElementById('input-value').value;
  document.getElementById('input-value').value = "";

  if (esEntero(pesoNormal)) {
    pesoEnElPlaneta = pesoNormal * gravedad[numPlaneta] / gravedad[2];
    pesoEnElPlaneta = pesoEnElPlaneta.toFixed(2);
  } else {
    pesoEnElPlaneta = 'NaN';
    pesoNormal = "";
  }

  abrirVentanaSec(e);
});
