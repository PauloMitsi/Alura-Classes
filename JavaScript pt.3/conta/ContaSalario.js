import { Conta } from '../Conta.js';

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 1001);
    }

    Saque(valor) {
        const taxa = 1.02;
        return this._Saque(valor, taxa);
    }
}
