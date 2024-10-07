const inputItem = document.getElementById('item');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Cargar ítems guardados en localStorage al iniciar la página
function cargarItems() {
    // Obtener los ítems almacenados en localStorage
    const itemsGuardados = JSON.parse(localStorage.getItem('listadoItems')) || [];
    
    // Vaciar el contenedor antes de cargar los ítems
    contenedor.innerHTML = '';
    
    // Añadir cada ítem a la lista visual
    itemsGuardados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
    });
}

// Agregar un nuevo ítem
function agregarItem() {
    // Verificar si el campo de entrada no está vacío
    if (inputItem.value.trim() !== '') {
        // Obtener los ítems almacenados en localStorage
        const itemsGuardados = JSON.parse(localStorage.getItem('listadoItems')) || [];
        
        // Agregar el nuevo ítem al array
        itemsGuardados.push(inputItem.value.trim());
        
        // Guardar el array actualizado en localStorage
        localStorage.setItem('listadoItems', JSON.stringify(itemsGuardados));
        
        // Actualizar la vista de la lista
        cargarItems();
        
        // Limpiar el campo de entrada
        inputItem.value = '';
    }
}

// Limpiar el listado (tanto en localStorage como en la vista)
function limpiarListado() {
    localStorage.removeItem('listadoItems');
    contenedor.innerHTML = '';
}

btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarListado);

document.addEventListener('DOMContentLoaded', cargarItems);
