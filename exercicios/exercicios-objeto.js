/*
Declare uma constante `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão (iniciado com "false")
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

let pessoa = {
    nome: "Larissa",
    sobrenome: "Botelho",
    idade: -3,
    altura: 1.69,
    peso: 62,
    andando: false,
    caminhouQuantosMetros: -20
};

/*
Adicione um método (o mesmo que função) ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

console.log(pessoa)

pessoa.fazerAniversario = function (){
    return pessoa.idade = pessoa.idade + 1
};

//objeto original
console.log(pessoa)

//função fazerAniversário
console.log(pessoa.fazerAniversario())

//objeto com a propriedade idade alterado depois de chamar função
console.log(pessoa)

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metrosCaminhados) {
    pessoa.caminhouQuantosMetros += metrosCaminhados;
    pessoa.andando = true; 
    return 
};

console.log(pessoa)

pessoa.andar(5)

console.log(pessoa)
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/



pessoa.parar = function(){
    pessoa.andando = false;
    return;
};

pessoa.parar(); //chamando a função parar

console.log(pessoa);

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}.`
}

console.log(pessoa.nomeCompleto()) // chamando a função

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function(){
    return `Olá, eu tenho ${pessoa.idade} anos!`
}

console.log(pessoa.mostrarIdade())

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(){
    return `Eu peso ${pessoa.peso}Kg.`
}

console.log(pessoa.mostrarPeso()) //chamando a função para mostrar peso

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/


pessoa.mostrarAltura = function() {
    return `Minha altura é ${pessoa.altura}m.`
}

console.log(pessoa.mostrarAltura()); //chamando a função para mostral altura

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.idade) // mostra só o valor da propriedade idade

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(5)
pessoa.andar(8)
pessoa.andar(3)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.caminhouQuantosMetros)
console.log(pessoa.andando)

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar() //faz a pessoa parar de andar

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando) // mostrar false

/*
Crie um método chamado `mostrarDistancia` que retorne a frase:
- "[NOME] caminhou [caminhouQuantosMetros]m"
*/

pessoa.mostrarDistancia = function(){
    return `${pessoa.nome} caminhou ${pessoa.caminhouQuantosMetros}`
}

console.log(pessoa.mostrarDistancia()) //chama a função que mostra a distância
console.log(`${pessoa.nome} andou ${pessoa.caminhouQuantosMetros}`) //mostra a distância

/*
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentação = function() {

    let anos = "anos"
    let metros = "metros"

    if(pessoa.idade === 1){
        anos = "ano"
    } 

    if(pessoa.caminhouQuantosMetros === 1){
        metros = "metro"
    }

    return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
}

// Agora, apresente-se ;)

console.log(pessoa.apresentação())

//////////////////

//métodos

//entries

const pessoa2 = {
    nome: "Larissa",
    sobrenome: "Botelho",
    idade: -3,
    altura: 1.69,
    peso: 62,
    andando: false,
    caminhouQuantosMetros: -20.
};

console.log(Object.entries(pessoa)) //retorna as propriedades + valor em formato de lista (array)

console.log(Object.keys(pessoa)) // retorna as propriedades em formato de lista (array)

console.log(Object.values(pessoa)) //retorna as propriedades em formato de lista(array) das prorpiedades enumeráveis (string, number, boolean)
console.log(pessoa.hasOwnProperty('nome')) // retorna true ou false para a propriedade passada por parâmetro (tem que ser necessáriamente escrito dessa forma.)

/* ERRADO console.log(Object.hasOwnProperty(pessoa)) */