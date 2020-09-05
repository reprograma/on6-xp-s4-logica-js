/*
Declare uma variável chamada `hortifruti`, que receberá um array com 5 elementos.
Os elementos serão itens de hortifruti
*/

const hortifruti = ['uva', 'maça', 'banana', 'alface', 'pera']
//console.log(hortifruti)
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

console.log('A banana está na posição', hortifruti.indexOf('banana')) // retorna um número que represente a posição do elemento no array

function mostrarFruta(posicao) {
    if (hortifruti[posicao] === undefined) {
        return "Fruta não encontrada"
    } else {

        return `A ${hortifruti[posicao]} está na posição ${posicao}`
    }
}

console.log(mostrarFruta(1)) // chama a função com o elemento da posição 1
console.log(mostrarFruta(0)) // chama a função com o elemento da posição 0
console.log(mostrarFruta(10)) // chama a função com o elemento da posição 10, como não tem, retorna "Fruta não encontrada"
console.log(hortifruti[1]) // exibe a fruta na posição 1
console.log(hortifruti)

// console.log(mostrarFruta(1))

/*
Escolha 2 itens de hortifruti e mostre a posição dele, usando a
função acima. Entre esses 2, adicione 1 que um item novo
*/

console.log(mostrarFruta(4))
console.log(mostrarFruta(1))

// métido splice para adicionar ou remover elementos no meio do array
// primeiro argumento: posição inicial
// segundo argumento: quantidade de itens a serem removidos
// terceiro argumento: elemento a ser adicionado depois da posição inicial, caso o segundo argumento seja 0

hortifruti.splice(1, 0, 'abacate', 'goiaba') // adiciona abacate entre maçã e banana
console.log(hortifruti)

hortifruti.splice(3, 2, 'atemoia') // remove ítens na posição 3 e 2 e adiciona atemoia
console.log(hortifruti)

// adicione três itens na lista hortifruti

hortifruti.push('laranja')
hortifruti.push('abacaxi')
hortifruti.push('tangerina')

console.log(hortifruti)

// remova o item na posição 3

hortifruti.splice(3, 1) // 3 é a posição inicial e 1 é a quantidade de ítens que eu quero apagar. Atemoia será apagada
console.log(hortifruti)


// crie um array chamado 'aluno1' que receberá 4 itens que serão suas notas no semestre (crie valores aleatórios)


const aluno1 = [1, 3, 7, 5, 2, 10]


//mostre no console essas notas organizadas por ordem crescente

console.log(aluno1.sort()) // ordem crescente
