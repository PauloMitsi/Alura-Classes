const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('Tarefas'));
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    console.log(tarefasCadastradas);
    console.log(tarefasCadastradas[id]);
    localStorage.setItem('Tarefas', JSON.stringify(tarefasCadastradas));

    atualiza();
};

const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button');

    botaoConclui.innerText = 'Finalizar';
    botaoConclui.classList.add('botaoLista-check');

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConclui;
};

export default BotaoConclui;
