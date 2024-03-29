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

const listaFiltradaExibir = lista.filter((pessoa) => !!pessoa.exibir);
const listaFiltradaIdade = lista.filter((pessoa) => pessoa.idade > 20);

console.log(listaFiltradaExibir)
console.log(listaFiltradaIdade)

const filtrarExibir = (pessoa) => !!pessoa.exibir;
const listaFiltradaExibir2 = lista.filter(filtrarExibir);
const filtrarIdade = (pessoa) => pessoa.idade > 20;
const listaFiltradaIdade2 = lista.filter(filtrarIdade);

console.log(listaFiltradaExibir2)
console.log(listaFiltradaIdade2)