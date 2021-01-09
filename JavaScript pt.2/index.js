import { cliente } from './Cliente.js';
import { contaCorrente } from './ContaCorrente.js';

const cliente1 = new cliente('Chozz', 12321321);
const conta1 = new contaCorrente(cliente1, 1001);

const cliente2 = new cliente('Junior', 154234);
const conta2 = new contaCorrente(cliente2, 1001);

console.log(contaCorrente.numeroDeContas);
