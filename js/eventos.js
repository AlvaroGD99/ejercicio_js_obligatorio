let selectorTypeContact = document.querySelector("#tipoPrioridad");
selectorTypeContact.addEventListener('change', getType);

function getType(e) {
    //todos los elementos de tipo formulario recojo su valor con la propiedad value
    let tipo = e.target.value;
    let lista = filtarLista(tipo, tareas)
    if (tipo != "") {
        printTareas(lista)

    }
    else {
        printTareas(tareas)
    }

}

let selectorTypeNombre = document.querySelector('#nombre')
selectorTypeNombre.addEventListener('keyup', getTypeNombre);
function getTypeNombre(e) {
    //todos los elementos de tipo formulario recojo su valor con la propiedad value
    let tipoNombre = e.target.value;
    let lista = filtarListaNombre(tipoNombre, tareas)
    if (tipoNombre != "") {
        printTareas(lista)

    }
    else {
        printTareas(tareas)
    }

}

let div = document.querySelector('#alerta')
let nombreTarea = document.querySelector('#nombreTarea')
let creacionTarea = document.querySelector('#seleccionPrioridad')
let guardar = document.querySelector('#guardarTarea')
guardar.addEventListener('click', guardarTarea)
function guardarTarea(e) {
    if (creacionTarea.value == "" || nombreTarea == "") {

        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
        let color = '';
        switch (creacionTarea.value) {
            case 'importante':
                color = 'beige'

                break;

            case 'diaria':
                color = 'lightblue'

                break;

            case 'mensual':

                color = 'lightgreen'
                break;

        }
        idJson++;

        sectionTareas.innerHTML += `<article style='background-color:${color}' data-id='${idJson}'>
        <h2 style='margin-right:200px; '>${nombreTarea.value.toUpperCase()}</h2>
        <button id='eliminar'>ELIMINAR</button>
        </article>`

        let kk = { id: idJson, name: nombreTarea.value, prioridad: creacionTarea.value }
        tareas.push(kk)
        recorrerBotones()
    }
}