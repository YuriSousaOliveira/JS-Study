const lista = [
    {
        nome: 'Yuri',
        idade: 26
    },
    {
        nome: 'João',
        idade: 21
    },
    {
        nome: 'Maria',
        idade: 18
    },
    {
        nome: 'Tatiana',
        idade: 24
    },
    {
        nome: 'Mateus',
        idade: 28
    },
    {
        nome: 'Ernande',
        idade: 36
    },
]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

lista.forEach((objeto) => console.log(objeto));

let soma = 0;
lista.forEach((objeto) => {
    soma += objeto.idade;
});

console.log("IDADE TOTAL: ", soma);

let soma2 = 0;

const somaIdade = (objeto => {
    soma2 += objeto.idade
});

lista.forEach(somaIdade);

console.log("IDADE TOTAL 2: ", soma2);