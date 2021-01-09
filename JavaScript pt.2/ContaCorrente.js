import { cliente } from './Cliente.js';

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;

    set cliente(value) {
        if (value instanceof cliente) {
            this._cliente = value;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia;
        contaCorrente.numeroDeContas += 1;
    }

    Saque(valor) {
        if (valor > 0) {
            if (this._saldo >= valor) {
                this._saldo -= valor;
                return `O valor de RS${valor} foi sacado, saldo atual R$${this._saldo}`;
            } else {
                return console.log('Saldo insuficíente');
            }
        } else {
            console.log('O valor do saque deve ser positivo');
        }
    }
    Deposito(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return `O valor de RS${valor} foi depositado, saldo atual R$${this._saldo}`;
        } else {
            console.log('O valor do depósito deve ser positivo');
        }
    }
    transferencia(conta, valor) {
        if (valor > 0) {
            if (this._saldo >= valor) {
                this.Saque(valor);
                conta.Deposito(valor);
            } else {
                console.log(
                    `Valor maior que o saldo atual!\nSaldo atual: ${this._saldo}`
                );
            }
        } else {
            console.log('O valor da transferência deve ser positivo');
        }
    }
}
