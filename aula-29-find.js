const lista = [
    {
        nome: 'Yuri',
        idade: 26,
        exibir: true,
    },
    {
        nome: 'João',
        idade: 21,
        exibir: false,
    },
    {
        nome: 'Maria',
        idade: 18,
        exibir: false,
    },
    {
        nome: 'Tatiana',
        idade: 24,
        exibir: false,
    },
    {
        nome: 'Mateus',
        idade: 28,
        exibir: true,
    },
    {
        nome: 'Ernande',
        idade: 36,
        exibir: true,
    },
]

const novaPessoaIdade = lista.find((pessoa) => pessoa.idade > 25);
const novaPessoaNome = lista.find((pessoa) => pessoa.nome == 'Tatiana');

console.log(novaPessoaIdade)
console.log(novaPessoaNome)

const buscaIdade = (pessoa) => pessoa.idade > 25;
const novaPessoaIdade2 = lista.find(buscaIdade);
const buscaNome = (pessoa) => pessoa.nome == 'Tatiana';
const novaPessoaNome2 = lista.find(buscaNome);

console.log(novaPessoaIdade2)
console.log(novaPessoaNome2)