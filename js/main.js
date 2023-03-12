const buttonCreateTask = document.querySelector(".task__create");
const captureText = document.querySelector(".new__task");
const showText = document.querySelector(".task");

let idCounter = 0;


function capturarTexto() {
    idCounter++;
    showText.innerHTML += `
        <div class="container__task" id="${idCounter}">
            <input type="checkbox">
            <p class="task__text">${captureText.value}</p>
            <i class="fa-solid fa-trash"></i>
        </div>`;
    captureText.value = "";
    actualizarEstados();
};

list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == "INPUT") {
        actualizarEstados();
    } else if (event.srcElement.nodeName == "I") {
        console.log(event.srcElement.parentNode.id)
        deleteTask(event.srcElement.parentNode.id);
    }
});

function deleteTask(id) {
    let idCapture = document.getElementById(id);
    list.removeChild(idCapture);
    actualizarEstados()
}

function actualizarEstados() {
    let elemento = list.querySelectorAll("div");
    let check = list.querySelectorAll("input[type='checkbox']:checked");
    // console.log(elemento);
    stats.innerHTML = `
        <p class="task__state">Tareas pendientes: ${elemento.length}</p>
        <p class="task__state">Tareas completas: ${check.length}</p> `;
};

// captureText.focus();
buttonCreateTask.onclick = capturarTexto;