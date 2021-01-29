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