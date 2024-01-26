//seleccionar los elementos para poder trabajarlos en Javascript.
const textoHora = document.getElementById('pHora');
const botonProgramar = document.getElementById('btnSet');
const seleccionUsuario = document.getElementById('inputTime');
const botonCancelar = document.getElementById('btnCancelar');
const botonAceptar = document.getElementById('btnAceptar');
const botonTerminar = document.getElementById('btnTerminar');
const divModal1 = document.getElementById('modal');
const divModal2 = document.getElementById('modal2');

//crear variables globales.
let horaCompleta; 
let horaUsuario;
let detenerProceso;



//Eventos:

botonProgramar.addEventListener('click',mostrarDiv) // cuando el usuario hace clic en el boton pasa algo: (Va a mostrar el Modal 1).

seleccionUsuario.addEventListener('input',obtenerHorario); // cuando el usuario inserte el valor en el input, nosotros vamos a obtener ese codigo.

botonCancelar.addEventListener('click',ocultarModal); // quitar el modal.

botonAceptar.addEventListener('click',programandoAlarma); // quitar el modal y empezar a comprobar si la alarma y la hora son iguales.

botonTerminar.addEventListener('click',()=>{
    divModal2.classList.add('hidden'); //ocultar el modal cuando suene la alarma
})




//funciones ()

function mostrarHora(){
//obtener Hora.
let horaActual = new Date(); // aca obtuvimos fecha,hora,uso horario,etc.
let hora = horaActual.getHours(); // extrayendo la hora
let minutos = horaActual.getMinutes(); // extrayendo la hora
let segundos = horaActual.getSeconds(); // extrayendo la hora
let horaActualizada = agregandoCero(hora); // agregando cero si es necesario
let minutosActualizada = agregandoCero(minutos);    // agregando cero si es necesario
let segundosActualizada = agregandoCero(segundos);  // agregando cero si es necesario
horaCompleta = `${horaActualizada}:${minutosActualizada}:${segundosActualizada}`; //juntando todos los valores, para mostrarlos en una variable.

textoHora.textContent = horaCompleta; //actualizar el p en el HTML.

}

setInterval(mostrarHora,1000);

//funcion en donde el programa ve si algun valor de la hora es menor a 10 y le agrega un 0.
function agregandoCero(valor){
    return valor < 10 ? 0 + `${valor}`: `${valor}`; 
}

// monstrando el div cuando el usuario haga clic
function mostrarDiv(){
    divModal1.classList.remove('hidden'); // sacando la propiedad Hidden.
}

//obteniendo hora del usuario.
function obtenerHorario(){
    let horaDelInput = seleccionUsuario.value; // obteniendo la hora que eligio el usuario.
    horaUsuario = `${horaDelInput}:00`; // agregando los segundos.

}


//ocultar modal numero1
function ocultarModal(){
    divModal1.classList.add('hidden'); 
}

function programandoAlarma(){

    ocultarModal(); // ocultando modal

    //asignando el intervalo a la variable para poder detenerlos cuando sea igual.
    detenerProceso = setInterval(() => {
        comprandoHora()
    }, 1000);

}

//comprobamos que el horario sea igual.
function comprandoHora(){
    if(horaCompleta === horaUsuario){
        divModal2.classList.remove('hidden')
        clearInterval(detenerProceso);
    }
}
