import handleNewItem from './componestes/criaTarefa.js';
import { carregarTarefa } from './componestes/carregarTarefa.js';

const botaoTarefa = document.querySelector('[data-form-button]');

botaoTarefa.addEventListener('click', handleNewItem);

carregarTarefa();
