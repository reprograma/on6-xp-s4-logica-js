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
3. [Conteúdo extra](#conteúdo-extra)
4. [Referências](#referências)

---

## Objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

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

```javascript
function Pessoa(nome, idade, profissao) {
  this.nome = nome;
  this.idade = idade;
  this.profissao = profissao;
}

const pessoa1 = new Pessoa('Ariel', 25, 'desenvolvedora');
const pessoa2 = new Pessoa('Laura', 34, 'tech lead');
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

- `keys()` retorna uma lista contendo os nomes de todas as propriedades enumeráveis do objeto.
- `values()` retorna uma lista com todos os valores que correspondem a todas as propriedades enumeráveis do objeto.
- `entries()` retorna uma lista contendo todos os pares (chave, valor) das propriedades enumeráveis do objeto.
- `freeze()` impede que as propriedades do objeto sejam excluídas ou alteradas.
- `seal()` impede que as propriedades do objeto sejam excluídas.
- `assing()` copia todas as propriedades enumeráveis de um objeto para outro.
- `hasOwnProperty()` retorna um _booleano_ indicando se o objeto possui a propriedade especificada

## Arrays

## Conteúdo extra

## Referências

- ARTIGOS

  - [Trabalhando com objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos#:~:text=A%20linguagem%20JavaScript%20%C3%A9%20projetada,considerada%20um%20m%C3%A9todo%20do%20objeto.)
  - [Notação de Ponto vs Notação de Colchetes](https://www.samanthaming.com/tidbits/65-dot-vs-bracket-notation/)
  - [Convertendo Objeto em Array](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)

- CURSOS

  - [JavaScript Ninja](https://www.udemy.com/course/curso-javascript-ninja/)

- LIVROS
  - [Estruturas de Dados e Algoritmos com JavaScript](https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932)
  - [Eloquent JavaScript](https://braziljs.github.io/eloquente-javascript/)
