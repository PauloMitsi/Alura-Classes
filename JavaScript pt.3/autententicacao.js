import { Funcionario } from './funcionarios/Funcionario.js';

export class Autententicacao extends Funcionario {
    static login(autenticavel, senha) {
        if (Autententicacao.autenticavel(senha)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static autenticavel(valor) {
        return 'autenticar' in valor;
    }
}
