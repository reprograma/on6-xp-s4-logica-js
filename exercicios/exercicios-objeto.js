/*
Declare uma constante `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão - iniciando com"false"
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
const pessoa = {  //variavel começa com letra minuscula, funcao letra maiuscula
    nome: "Fernanda", //primeira propriedade do objeto, sao separadas por virgulas
    sobrenome: "Oliveira", //string
    idade: 24, //number
    altura: 1.50,
    peso: 55,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
MÉTODO É A MESMA COISA DE FUNÇÃO
*/
console.log(pessoa)
pessoa.fazerAniversario = function (){ //nessa função nao tem parametros
    return pessoa.idade =pessoa.idade + 1 //para acessar a propriedade da função
}

//objeto original
console.log(pessoa)
//função fazer aniversario
console.log(pessoa.fazerAniversario())
//objeto modificado
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
pessoa.andar = function(metrosCaminhados){
    //pessoa.caminhouQuantrosMetros= pessoa.caminhouQuantosMetros + metrosCaminhados
     pessoa.caminhouQuantosMetros += metrosCaminhados;
     pessoa.andando= true;
     return 
    
};

console.log(pessoa);
pessoa.andar(5); //chamando a função andar e passando 5
console.log(pessoa);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    pessoa.andando= false
    return
} 

pessoa.parar() //chamando a função
console.log(pessoa) // mostrando o objeto com andando = false
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
    return `Olá! Meu nome ${pessoa.nome} ${pessoa.sobrenome}`
}
console.log(pessoa.nomeCompleto())


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return `Olá, eu tenho ${pessoa.idade} anos!`
}
console.log (pessoa.mostrarIdade()) // chamando a funçao para mostrar idade

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso= function(){
return `Eu peso ${pessoa.peso} kg`
}
console.log(pessoa.mostrarPeso())

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(){
    return `Minha altura é ${pessoa.altura}m`

}
console.log(pessoa.mostrarAltura()) //chamando a função para mostrar altura
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
console.log(pessoa.idade)

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

console.log(pessoa.caminhouQuantosMetros) // mostra quantos metros a pessoa andou
console.log(pessoa.andando) //mostra true
/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar() // faz a pessoa parar de andar

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando) //mostra false

/* PULAMOS
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
Crie um método chamado `mostrarDistancia` que retorne a frase:
- "[NOME] caminhou [caminhouQuantosMetros]m"
*/
pessoa.mostrarDistancia = function(){
    return `${pessoa.nome} caminhou ${pessoa.caminhouQuantosMetros} m`
}
console.log(pessoa.mostrarDistancia()) // chama a função que mostra a distancia
console.log( `caminhou ${pessoa.caminhouQuantosMetros}`) //mostra distancia

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
pessoa.apresentacao = function(){

    let anos= "anos"
    let metros= "metros"
    
    if(pessoa.idade===1){
        anos = "ano"
    }
    if (pessoa.caminhouQuantosMetros ===1){
        metros= "metro"
    }

    return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, minha altura é ${pessoa.altura} , meu peso é ${pessoa.peso} e, só hoje eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}! `
}

// Agora, apresente-se ;)

console.log(pessoa.apresentacao())


//////////////////////////////

//métodos
//entries


/*const pessoa = { 
    nome: "Fernanda", 
    sobrenome: "Oliveira", 
    idade: 24, 
    altura: 1.50,
    peso: 55,
    andando: false,
    caminhouQuantosMetros: 0
}*/

console.log(Object.entries(pessoa)) // retorna as propriedades (keys)+ valor (values) em forma da lista (array)

console.log(Object.keys(pessoa)) //retorna as propriedade em formato de lista(array)

console.log(Object.values(pessoa)) //retorna os valores em formato de lista (array) das propriedades enumeraveis (string, number, boolean)

console.log(pessoa.hasOwnProperty('nome')) //retorna true ou false para a propriedade passada por parametro