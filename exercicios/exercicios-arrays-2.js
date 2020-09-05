/*
Declare uma variável chamada `hortifruti`, que receberá um array com 5 elementos.
Os elementos serão itens de hortifruti
*/
let hortifruti = ['uva','maça', 'banana', 'alface', 'pera']
console.log(hortifruti)

/*
Crie uma função chamada `mostrarFruta` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "a [FRUTA] está na posição [POSIÇAO]";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e fruta é a fruta
    que está nessa posição no array criado acima com os itens de hortifruti.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - Se não houver um item para a posição passada, deve retornar a mensagem:
    "Fruta não encontrada"
*/
console.log(hortifruti.indexOf('banana'))

function mostrarFruta(posicao){
    if(hortifruti[posicao] === undefined){
        return "Fruta não encontrada!"

    }else{
        return `A ${hortifruti[posicao]} está na possição ${posicao}`
    }
}

console.log(mostrarFruta(1))
console.log(mostrarFruta(10))



// console.log(hortifruti[10])



// Escolha 2 itens de hortifruti e mostre a posição dele, usando a
// função acima. Entre esses 2, adicione 1 um item novo
console.log(mostrarFruta(4))
console.log(mostrarFruta(1))

// metodo splice para adicionar ou remover elementos no meio do array
// primeiro argumento: posição inicial
// segundo argumento: quantidade de itens a serem removidos
// terceiro elemento: elemento a ser adicionado na posição passada no primeiro argumentos, caso o segundo argumento seja 0

hortifruti.splice(1, 0, 'abacate', 'goiaba')
console.log(hortifruti)

hortifruti.splice(3, 2, 'atemoia')
console.log(hortifruti)

hortifruti.splice(1, 3)
console.log(hortifruti)
// adicione três itens na lista hortifruti

hortifruti.push('atemoia')
hortifruti.push('laranja')
hortifruti.push('melancia')

console.log(hortifruti)

//  remova um item na posição 3

hortifruti.splice(3, 1)
console.log(hortifruti)