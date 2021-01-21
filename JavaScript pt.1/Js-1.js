var listaCidades = new Array();
var listaDisponivel = new Array();
function resul() {
    var cidade = document.getElementById('inserir').value;
    var disponibilidade = document.getElementsByName('Disp');

    //Disponibilidade
    var disp = '';
    if (disponibilidade[0].checked) {
        disp = 'Disponível';
    } else if (disponibilidade[1].checked) {
        disp = 'Indiponível';
    }

    if (cidade != '' && disp != '') {
        //compara se a cidade ja foi adicionada
        var existeCidade = listaCidades.indexOf(cidade);

        if (existeCidade == -1) {
            listaCidades.push(cidade);
            console.log(listaCidades);
            //tabela
            var tabela = document.getElementById('corpo_da_tabela');
            var tabelaDivisao = document.createElement('tr');
            var tabelaCidade = document.createElement('td');
            var tabelaDisponivel = document.createElement('td');
            //tabela

            tabelaCidade.innerHTML = cidade;
            tabelaDisponivel.innerHTML = disp;

            tabelaDivisao.appendChild(tabelaCidade);
            tabelaDivisao.appendChild(tabelaDisponivel);
            tabela.appendChild(tabelaDivisao);
        } else {
            alert(`${cidade} já está na tabela`);
        }
    } else {
        alert('Preencha todas as lacunas');
    }
}

