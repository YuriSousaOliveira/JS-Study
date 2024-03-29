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

const resultado = lista.some((objeto) => objeto.idade > 30)
console.log('Some: ', resultado);

const resultado2 = lista.every((objeto) => objeto.idade < 40)
console.log('Every: ', resultado2);
