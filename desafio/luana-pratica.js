const pessoas = [
    {nome: "amanda",
    idade: 32,
    genero: "F"
    },
    {nome: "daniel",
    idade: 30,
    genero: "M"
    },
    {nome: "marcelo",
    idade: 32,
    genero: "M"
    }
];

const pessoasLazer = pessoas.map(pessoa => {pessoa.lazer = "Assistir filmes"; return pessoa});
console.log(pessoasLazer);



const pessoasLazerComida = pessoasLazer.map( elemento =>{elemento.comida = "Hamburguer"; return elemento});

console.log(pessoasLazerComida)