export const conferidor = (dados) => {
    const tarefa = dados.tarefaValor;
    const data = dados.dataFormatada;

    if ((tarefa == '' || data == 'Invalid date')) {
        throw Error(alert('Preencha todos os campo!'));
    }
};
