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

const pessoa = {
    yuri: {
        idade: 26
    },
    tatiana: {
        idade: 24
    },
    mateus: {
        idade: 28
    }
}

const pessoas = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade,
            exibir: objeto.exibir
        }
    }
}, {});

console.log(pessoas);
console.log(pessoas.Yuri.idade)

const reducePessoas = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade,
            exibir: objeto.exibir
        }
    }
};
const pessoas2 = lista.reduce(reducePessoas, {
    Julio: {
        idade: 27
    }
});

console.log(pessoas2);
console.log(pessoas2.Tatiana.idade);

const pessoas3 = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas3);