import { Cliente } from './Cliente.js';

//Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error(
                'Classe abstrata'
            );
        }

        this._saldo = saldoInicial;
        this._agencia = agencia;
        //cliente
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    Saque(valor) {
        throw new Error('metodo abstrato');
    }

    _Saque(valor, taxa) {
        valor *= taxa
        if (valor > 0) {
            if (this._saldo >= valor) {
                this._saldo -= valor;

                return `O valor de R$${valor} foi sacado, saldo atual R$${this._saldo}`;
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
