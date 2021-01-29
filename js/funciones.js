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


                break;

            case 'diaria':
                idJson++;
                sectionTareas.innerHTML += `<article style='background-color:lightblue' data-id='${idJson}'>
                <h2 style='margin-right:200px;'>${tarea.name.toUpperCase()}</h2>
                <button id='eliminar'>ELIMINAR</button>
                </article >`


                break;

            case 'mensual':
                idJson++;
                sectionTareas.innerHTML += `<article style='background-color:lightgreen'data-id='${idJson}'>
                <h2 style='margin-right:200px;'>${tarea.name.toUpperCase()}</h2>
                <button id='eliminar'>ELIMINAR</button>
                </article>`



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
