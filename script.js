// Obtener referencias a los botones y los contenedores de formularios
const showFormButton1 = document.getElementById('show-form-btn-1');
const showFormButton2 = document.getElementById('show-form-btn-2');
const formContainer1 = document.getElementById('form-container-1');
const formContainer2 = document.getElementById('form-container-2');

// Función para mostrar el formulario 1 y ocultar el formulario 2
function showForm1() {
    formContainer1.style.display = 'block';
    formContainer2.style.display = 'none';
}

// Función para mostrar el formulario 2 y ocultar el formulario 1
function showForm2() {
    formContainer2.style.display = 'block';
    formContainer1.style.display = 'none';
}

// Agregar eventos de clic a los botones para mostrar los formularios correspondientes
showFormButton1.addEventListener('click', showForm1);
showFormButton2.addEventListener('click', showForm2);