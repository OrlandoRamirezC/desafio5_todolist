const seccionTareas = document.getElementById("listatareas")
const tareaInput = document.getElementById("nuevaTarea")
const boton = document.getElementById("agregarTarea")
const tareasTotales = document.getElementById("tareasTotales")
const tareasRealizadas = document.getElementById('tareasrealizadas')

const tareas = [
    { id: 1, tareatipo: 'Ir de compras', realizada: false },
    { id: 2, tareatipo: 'Estudiar', realizada: false },
    { id: 3, tareatipo: 'Pasear al perro', realizada: false }
]
boton.addEventListener("click", () => {
    if (tareaInput.value === '') return
    tareas.push({ id: Date.now(), tareatipo: tareaInput.value, realizada: false })
    tareaInput.value = ""
    agregar()
})

const agregar = () => {
    seccionTareas.innerHTML = tareas.map((tarea) =>
        `<li>${tarea.id} ${tarea.tareatipo}
    <button onclick='eliminar(${tarea.id})'>Quitar</button>
         <input type="checkbox" id="realizada"> 
         </li>`
    ).join('')

}

const eliminar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index, 1)
    agregar()
}

agregar()

const cambiarStatus = () => {
    const tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea) {
        tarea.realizada = !tarea.realizada
        renderizar()
    }
}


const renderizar = () => {
    seccionTareas.innerHTML = tareas.map(tarea =>
        `<li>${tarea.id}
        <span class="${tarea.realizada ? 'tachar' : ''}" onclick="cambiarStatus(${tarea.id})">${tarea.tareatipo}</span>
        <button onclick='eliminar(${tarea.id})'>Quitar</button>
        <input type="checkbox" id="${tarea.realizada ? 'realizada' : ''}" onclick="cambiarStatus(${tarea.id})">
        </li>`
    ).join('')

    //Contar tareas 
    const tareasrealizadass = tareas.filter(tarea => tarea.realizada).length
    const tareasTot = tareas.lenght
    seccionTareas.innerHTML = html
    tareasRealizadas.innerHTML = tareasrealizadass
    tareasTotales.innerHTML = tareasTot
}
renderizar()


// si existe ? true(verdadera) : false (falso)



