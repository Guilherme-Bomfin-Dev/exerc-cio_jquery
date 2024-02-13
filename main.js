const form = document.getElementById("form-tarefa");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputTarefa = document.getElementById('tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = inputTarefa.value;

    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle('riscado');
    });

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = '';
});
