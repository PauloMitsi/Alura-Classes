export class Funcionario {
    constructor(nome, salario, cpf) {
        if (this.constructor == Funcionario) {
            throw new Error(
                'Classe abstrata'
            );
        }
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;

        this._bonificacao = 1;
        this._senha;
    }
 
    autenticar(senha){
        return senha == this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}
