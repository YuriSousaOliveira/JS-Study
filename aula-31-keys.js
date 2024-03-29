const lista = [
    {
        nome: 'Yuri',
        idade: 26,
        exibir: true,
    },
    {
        nome: 'Joao',
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

const reducePessoas = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade,
            exibir: objeto.exibir
        }
    }
};
const pessoas2 = lista.reduce(reducePessoas, {});

const chaves = Object.keys(pessoas2);

console.log(pessoas2);
console.log(chaves);
console.log(Object.keys(lista[0]));

const listaDeVolta = chaves.map((chave) => ({ 
    nome: chave, 
    idade: pessoas2[chave].idade, 
    exibir: pessoas2[chave].exibir 
}));

console.log(listaDeVolta)