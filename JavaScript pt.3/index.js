import { Diretor } from './funcionarios/Diretor.js';
import { Gerente } from './funcionarios/Gerente.js';
import { Autententicacao } from './autententicacao.js';
import { Cliente } from './Cliente.js';

const diretor = new Diretor('Rodrigo', 5000, 123123213);
diretor.cadastrarSenha(123);

const gerente = new Gerente('Chozz', 1000, 34343242);
gerente.cadastrarSenha(123321);

const cliente = new Cliente('Paulo', 132131, 2357);

const logadoDiretor = Autententicacao.login(diretor, 123);
const logadoGerente = Autententicacao.login(gerente, 123321);
const logadoCliente = Autententicacao.login(cliente, 2357)

console.log(logadoDiretor, logadoGerente, logadoCliente);
