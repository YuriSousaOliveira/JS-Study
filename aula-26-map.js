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

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.idade} - ${objeto.nome}`
    }
}

console.log(lista);
console.log(lista.map((objeto)=>objeto.idade));
console.log(lista.map(converterObjeto))