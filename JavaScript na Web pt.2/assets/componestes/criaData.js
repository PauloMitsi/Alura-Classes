import { Tarefa } from './criaTarefa.js';

export const criaData = (Data) => {
    const data = document.createElement('li');
    const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];

    const dataMoment = moment(Data, 'DD/MM/YYYY');

    const conteudo = `<p class=data>${dataMoment.format('DD/MM/YYYY')}</p>`;

    data.innerHTML = conteudo;

    tarefas.forEach((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');
        const diff = dataMoment.diff(dia);

        if (diff == 0) {
            data.appendChild(Tarefa(tarefa, id));
        }
    });

    return data;
};
