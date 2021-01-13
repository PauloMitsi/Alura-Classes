import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta {
    
    Saque(valor){
        taxa = 1.02
        return this._sacar(valor, taxa)
    }
}
