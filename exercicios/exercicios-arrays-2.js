/*
Declare uma variável chamada `hortifruti`, que receberá um array com 5 elementos.
Os elementos serão itens de hortifruti
*/

    const hortifruti = ['uva', 'maça', 'banana', 'alface', 'pera'];
    console.log(hortifruti);

/*
Crie uma função chamada `mostrarFruta` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "A[FRUTA] está na posição [POSIÇAO]";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e fruta é a fruta
    que está nessa posição no array criado acima com os itens de hortifruti.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - Se não houver um item para a posição passada, deve retornar a mensagem:
    "Fruta não encontrada"
*/

//    console.log(hortifruti.indexOf('banana')); //retorna um numero que representa a posição do elemento no array

    function mostrarFruta(posicao){
        if(hortifruti[posicao] === undefined){
            return "Fruta não encontrada";
        }
        return `A ${hortifruti[posicao]} está na posição ${posicao}.`;
    }

    console.log(mostrarFruta(2));
    //console.log(mostrarFruta(15));

/*
Escolha 2 itens de hortifruti e mostre a posição dele, usando a
função acima. Entre esses 2, adicione 1 que um item novo
*/

    console.log(mostrarFruta(4));
    console.log(mostrarFruta(1));

//metodo splice para adicionar ou remover elementos no meio do array
//primeiro argumento: posição inicial
//segundo argumento: quantidade de itens a serem removidos
//terceiro argumento: elemento a ser adicionado na posição passada no primeiro argumento, caso o segundo argumento seja 0

    hortifruti.splice(1, 0, "abacate", "goiaba"); //adiciona abacate entre maça e banana
    console.log(hortifruti); // ['uva', 'abacate', 'goiaba', 'maça', 'banana', 'alface', 'pera']

    hortifruti.splice(3, 2, "atemoia");
    console.log(hortifruti); // ['uva', 'abacate', 'goiaba', 'atemoia', 'alface', 'pera']

    hortifruti.splice(1, 3);
    console.log(hortifruti); // ['uva', 'alface', 'pera']


/* adicione três itens na lista hortifruti */

    hortifruti.push("atemoia");
    hortifruti.push("laranja");
    hortifruti.push("melancia");
    
    console.log(hortifruti);

/* remova o item na posição 3 */

    hortifruti.splice(3, 1); //3 é a posição inicial e 1 é a quantidade de itens que eu quero apagar
    console.log(hortifruti);

    hortifruti.splice(3, 2);
    console.log(hortifruti);

/*
crie um array chamado 'aluno1' que receberá 4 itens que serão suas notas no semestre (crie valores aleatórios)
*/

    const aluno1 = [1, 3, 7, 5];

/*
mostre no console essas notas organizadas por ordem crescente
*/

    console.log(aluno1.sort()); //ordena em ordem crescente