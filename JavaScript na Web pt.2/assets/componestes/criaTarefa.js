import { carregarTarefa } from './carregarTarefa.js';
import BotaoConclui from './concluirTarefa.js';
import { conferidor } from '../services/conferidor.js';
import BotaoDeleta from './deletarTarefa.js';

const handleNewItem = (event) => {
    event.preventDefault();
    const inputTarefa = document.querySelector('[data-form-input]');
    const calendario = document.querySelector('[data-form-calendario]');
    const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const tarefaValor = inputTarefa.value;
    moment.locale();
    const horario = data.format('HH:mm');
    const concluida = false;
    const dados = {
        dataFormatada,
        tarefaValor,
        horario,
        concluida,
    };
    conferidor(dados);

    const listaDeTarefas = [...tarefas, dados];

    localStorage.setItem('Tarefas', JSON.stringify(listaDeTarefas));
    inputTarefa.value = '';

    carregarTarefa();
};

export const Tarefa = ({ tarefaValor, horario, concluida }, id) => {
    const tarefa = document.createElement('li');

    tarefa.classList.add('tarefa');

    if (concluida) {
        tarefa.classList.add('feita');
    }

    const conteudo = `<p class="conteudo">${horario} - ${tarefaValor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregarTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregarTarefa, id));

    return tarefa;
};

export default handleNewItem;
