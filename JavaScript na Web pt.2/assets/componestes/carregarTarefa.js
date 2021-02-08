import { ordenaData, removeDatasRepetidas } from '../services/data.js';
import { criaData } from './criaData.js';

export const carregarTarefa = () => {
    const lista = document.querySelector('[data-lista]');

    const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];

    lista.innerHTML = '';

    const datasUnicas = removeDatasRepetidas(tarefas);
    ordenaData(datasUnicas)
    datasUnicas.forEach((tarefa) => {
        lista.appendChild(criaData(tarefa));
    });
};
