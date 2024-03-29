const lista = [
    {
        nome: 'Yuri',
        idade: 26,
        exibir: true,
        cartoes: ['2555', '2514', '0102', '0101']
    },
    {
        nome: 'Joao',
        idade: 21,
        exibir: false,
        cartoes: ['0102', '2514', '0102', '0101']
    },
    {
        nome: 'Maria',
        idade: 18,
        exibir: false,
        cartoes: ['2555', '2514', '0102', '2125']
    },
    {
        nome: 'Tatiana',
        idade: 24,
        exibir: false,
        cartoes: ['2555', '2125', '0102', '0101']
    },
    {
        nome: 'Mateus',
        idade: 28,
        exibir: true,
        cartoes: ['2555', '2514', '2125', '0101']
    },
    {
        nome: 'Ernande',
        idade: 36,
        exibir: true,
        cartoes: ['2125', '2514', '0102', '0101']
    },
]

console.log(lista);
const cartoes = lista.map((cartao) => cartao.cartoes);
console.log(cartoes);
const cartoes2 = lista.flatMap((cartao) => cartao.cartoes);
console.log(cartoes2);
