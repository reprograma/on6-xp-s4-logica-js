<h1 align="center">
  <br>
  <img src="assets/web-development.png" alt="Front-End Checklist" width="170">
  <br>
    <br>
        Semana 4
  <br>
</h1>
<p align="center">Resolução de Problemas/Lógica aplicada e JavaScript<p>

## Sumário

1. [Objetos](#objetos)
2. [Arrays](#arrays)
3. [Referências](#referências)

---

## Objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};
```

```javascript
const pessoa = new Object();

pessoa.nome = 'Ariel';
pessoa.idade = 25;
pessoa.profissao = 'desenvolvedora';
```

### Acessando valores

Notação de ponto

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa.nome); // Ariel
console.log(pessoa.idade); // 25
console.log(pessoa.profissao); // desenvolvedora
```

Notação de colchetes (ou índice)

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

console.log(pessoa['nome']); // Ariel
console.log(pessoa['idade']); // 25
console.log(pessoa['profissao']); // desenvolvedora
```

### Principais métodos

- `assing` copia todas as propriedades enumeráveis de um objeto para outro.
- `entries` retorna uma lista contendo todos os pares (chave, valor) das propriedades enumeráveis do objeto.
- `freeze` impede que as propriedades do objeto sejam excluídas ou alteradas.
- `hasOwnProperty` retorna um _booleano_ indicando se o objeto possui a propriedade especificada
- `keys` retorna uma lista contendo os nomes de todas as propriedades enumeráveis do objeto.
- `seal` impede que as propriedades do objeto sejam excluídas.
- `values` retorna uma lista com todos os valores que correspondem a todas as propriedades enumeráveis do objeto.

E mais!

## Arrays

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

### Inicializando Arrays

Para criar um novo Array, podemos atribuir a uma variável uma lista de elementos entre colchetes e separados por vírgula. Também é possível utilizando a palavra reservada `new` e instanciando os valores que queremos atribuir ou apenas especificando o seu tamanho.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];
```

```javascript
const alunasReprograma = new Array('Andreia', 'Fernanda', 'Mariana', ...);
```

### Acessando valores

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];

console.log(alunasReprograma[0]) // Andreia
console.log(alunasReprograma[1]) // Fernanda
console.log(alunasReprograma[2]) // Mariana
```

### Principais métodos

- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `indexOf` retorna a posição do item passado por parâmetro ou -1 caso não tenha encontrado.
- `length` retorna um número que representa o tamanho do array.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `pop` remove e retorn o último item do array.
- `push` adiciona um item na última posição do array.
- `shift` remove e retorna o primeiro item do array.
- `slice` copia o array para outra variável.
- `splice` remove o item da posição passada por parâmetro
- `unshift` adiciona um item na primeira posição do array.

E muito mais!

## Referências

- ARTIGOS

  - [Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [Convertendo Objeto em Array](https://www.samanthaming.com/tidbits/76-converting-object-to-array/) - em inglês
  - [Funções em JS](https://dev.to/mandypry/functions-em-js-cc6)
  - [JavaScript - Métodos: find( ), map( ) e filter( )](https://medium.com/reprogramabr/m%C3%A9todos-de-arrays-find-map-e-filter-dcbbdf7c5be0)
  - [Notação de Ponto vs Notação de Colchetes](https://www.samanthaming.com/tidbits/65-dot-vs-bracket-notation/)- em inglês
  - [Trabalhando com objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos#:~:text=A%20linguagem%20JavaScript%20%C3%A9%20projetada,considerada%20um%20m%C3%A9todo%20do%20objeto.)

- CURSOS/TUTORIAIS

  - [JavaScript Ninja](https://www.udemy.com/course/curso-javascript-ninja/)
  - [JavaScript para iniciantes](https://node-girls.gitbook.io/beginners-javascript/) - em inglês

- LIVROS
  - [Eloquent JavaScript](https://braziljs.github.io/eloquente-javascript/)
  - [Estruturas de Dados e Algoritmos com JavaScript](https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932)
