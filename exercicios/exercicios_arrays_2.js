/*Crie uma função chamada `mostrarFruta` com as seguintes características:
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
    "Fruta não encontrada"*/



const estoque=["abacaxi", "mamão", "melancia","uva"]
console.log(estoque)

function mostrarFruta(posicao){
    if(estoque[posicao]===undefined){
        return "Fruta não encontrada"
    }else{
    return `A fruta ${estoque[posicao]} está na ${posicao}`
    }
}
console.log(mostrarFruta(10))
console.log(mostrarFruta(1))

//console.log(estoque.indexOf("abacaxi"))

/*Escolha 2 itens de hortifruti e mostre a posição dele, usando a
função acima. Entre esses 2, adicione 1 que um item novo*/
console.log(mostrarFruta(2))
console.log(mostrarFruta(0))


//estoque.splice(1,0,"abacate", "goiaba")// adiciona o item entre eles a partir da posição setada em primeiro; em segundo, ele deleta a quantidade de elementos na posição 2
//estoque.splice(1,3)// ele exclui os itens "x entre y"
//console.log(estoque)

//adicione três itens na lista hortifruti 
estoque.push("laranja","mexerica","tamarindo")
console.log(estoque)

//remova o item na posição 3 */ 
estoque.splice(3,1)
console.log(estoque)