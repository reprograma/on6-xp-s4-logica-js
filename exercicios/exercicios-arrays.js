/*
1. Crie um array contendo 5 itens de tipos variados de   dados 
(número, texto, objeto, boleano) 
*/

const itens = [2, 'reprograma', true, {curso: 'backend', data: '29/08/2020'}]
console.log(itens)

console.log(itens[3])

/*
Crie uma função chamada `adicionaItem`, que recebe um parâmetro e o adiciona ao array criado.
A função deverá retornar o array atualizado.
*/

function adicionaItem(item){
    itens.push(item) // método push adiciona um item na última posição do array
    return itens // retorna o array atualizado
}

/*
Mostre no console o segundo elemento desse array, criado acima, com a
frase: "O segundo elemento do segundo array é [ELEMENTO]."
*/
const compras = ['alface', 'tomate', 'cebola']

console.log(`O segundo elemento do array é ${compras[1]}`); // retorna tomate 

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"Este array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`Esse array tem ${compras.length} itens`)

compras.unshift(`feijão`) // adiciona feijão na primeira

console.log(compras)

compras.pop() //remover o ultimo item da lista

console.log(compras)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20 feito com while:');

let numero = 10
while (numero <= 20){
    if (numero % 2 === 0){
        console.log(numero)
    }

    numero++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');

let numero2 = 10
while (numero2 <= 20){
    if (numero2 % 2 !== 0){
        console.log(numero2)
    }
    numero2++

}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
for (let num = 100; num <=120; num++){
    if(num % 2 === 0){
        console.log(num
            )
    }
}

console.log('Números ímpares entre 111 e 125:');
for (let num1 = 111; num1 <= 125; num1++){
    if(num1 % 2 !== 0){
        console.log(num1)
    }
}
