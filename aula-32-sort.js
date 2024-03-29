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

lista.sort((a, b) => {
    if (a.idade < b.idade) 
        return -1;

    if (a.idade > b.idade) 
        return 1;

    return 0;
});

console.log(lista);