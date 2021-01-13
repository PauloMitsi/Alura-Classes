import { Conta } from './Conta.js';

export class contaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        contaCorrente.numeroDeContas += 1;
    }

    Saque(valor) {
        let taxa = 1.1;
        valor *= taxa;
        return this._Saque(valor,taxa)
    }
}
