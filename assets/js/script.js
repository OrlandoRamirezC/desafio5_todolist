const listaTareas = document.getElementById("lista_tareas")
const tareaInput = document.getElementById("input_tarea")
const boton = document.getElementById("agregar_tarea")
const tareasTotales = document.getElementById("tareas_totales")
const tareasRealizadas = document.getElementById('tareas_realizadas')

const tareas = [
    { id: 1234532342342, tareatipo: 'Ir de compras', realizada: false },
    { id: 2234552342342, tareatipo: 'Estudiar', realizada: false },
    { id: 3234244567457, tareatipo: 'Pasear al perro', realizada: false }
]
boton.addEventListener("click", () => {
    if (tareaInput.value === '') return
    tareas.push({ id: Date.now(), tareatipo: tareaInput.value, realizada: false })
    tareaInput.value = ""
    agregar()
})

const agregar = () => {
    listaTareas.innerHTML = tareas.map((tarea) =>
        `<li>${tarea.id}
            <span class="${tarea.realizada ? 'tachar' : ''}" onclick="cambiar(${tarea.id})">${tarea.tareatipo}</span>
    <button onclick='eliminar(${tarea.id})'>Quitar</button> 
         </li>`
    ).join('')
    renderizar()
}

const eliminar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index, 1)
    agregar()
    renderizar()
}

const cambiar = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea) {
        tarea.realizada = !tarea.realizada
        renderizar()
    }
}

const renderizar = () => {
    const html = tareas.map(tarea =>
        `<li>${tarea.id}
        <span class="${tarea.realizada ? 'tachar' : ''}" onclick='cambiar(${tarea.id})'>${tarea.tareatipo}</span>
        <button onclick='eliminar(${tarea.id})'>Quitar</button>
        </li>`
    ).join('')

    //Contar tareas 
    const trealizadas = tareas.filter(tarea => tarea.realizada).length
    listaTareas.innerHTML = html
    tareasRealizadas.innerHTML = trealizadas
    tareasTotales.innerHTML = tareas.length
}
renderizar()





