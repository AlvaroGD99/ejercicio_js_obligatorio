let sectionTareas = document.querySelector('#tareas');
let idJson = 0;
const printTareas = function (pTareas) {
    sectionTareas.innerHTML = "";
    for (let tarea of pTareas) {
        switch (tarea.prioridad) {
            case 'importante':
                idJson++;
                sectionTareas.innerHTML += `<article style='background-color:beige' data-id='${idJson}'>
                <h2 style='margin-right:200px; '>${tarea.name.toUpperCase()}</h2>
                <button id='eliminar'>ELIMINAR</button>
                </article>`
                recorrerBotones()

                break;

            case 'diaria':
                idJson++;
                sectionTareas.innerHTML += `<article style='background-color:lightblue' data-id='${idJson}'>
                <h2 style='margin-right:200px;'>${tarea.name.toUpperCase()}</h2>
                <button id='eliminar'>ELIMINAR</button>
                </article >`
                recorrerBotones()

                break;

            case 'mensual':
                idJson++;
                sectionTareas.innerHTML += `<article style='background-color:lightgreen'data-id='${idJson}'>
                <h2 style='margin-right:200px;'>${tarea.name.toUpperCase()}</h2>
                <button id='eliminar'>ELIMINAR</button>
                </article>`
                recorrerBotones()


                break;


        }

    }
}
function filtarLista(pPrioridad, pTareas) {
    let listaFiltrada = pTareas.filter((tarea) => {
        return tarea.prioridad == pPrioridad
    })

    return listaFiltrada;
}



function filtarListaNombre(pNombre, pTareas) {
    let listaFiltradaNombre = pTareas.filter((tarea) => tarea.name.toLowerCase().includes(pNombre.toLowerCase()))

    return listaFiltradaNombre;
}
printTareas(tareas)

function recorrerBotones() {

    let borrar = document.querySelectorAll('#eliminar')
    for (botonBorrar of borrar) {
        botonBorrar.addEventListener('click', eliminarTarea)
    }

}
function eliminarTarea(e) {
    let article = e.target.parentNode;
    let id = parseInt(e.target.parentNode.dataset.id)


    article.parentNode.removeChild(article)

    let position = tareas.findIndex(tarea => tarea.id == id)

    tareas.splice(position, 1)

}