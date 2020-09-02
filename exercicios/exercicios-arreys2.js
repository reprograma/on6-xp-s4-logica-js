/*
Declare uma variável chamada `hortifruti`, que receberá um array com 5 elementos.
Os elementos serão itens de hortifruti
*/

const hortifruti = ['uva', 'maça', 'banana', 'alface', 'pera']
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
      return "fruta não encontrada"  
    } else {

return `A ${hortifruti[posicao]} está na posição ${posicao}`

    }
    
}

console.log(mostrarFruta(1))
console.log(hortifruti[34])

/*
Escolha 2 itens de hortifruti e mostre a posição dele, usando a
função acima. Entre esses 2, adicione 1 que um item novo
/*



/* adicione três itens na lista hortifruti /*

/* remova o item na posição 3 /*


/*
crie um array chamado 'aluno1' que receberá 4 itens que serão suas notas no semestre (crie valores aleatórios)
/*

/*
//mostre no console essas notas organizadas por ordem crescente
/* */