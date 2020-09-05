<h1 align="center">
  <br>
  <img src="../assets/developer.png" alt="Front-End Checklist" width="250">
  <br>
    <br>
        Desafio - Semana 04
  <br>
  <br>
</h1>

## Descrição

Você é a nova pessoa desenvolvedora na Agência Estrela e é a responsável por criar um programa de gerenciamento de projetos. Para isso, você recebeu uma lista com as informações para cadastrar um projeto e a lista de requisitos que o sistema deve ter:

- Informações do Projeto:

  - idDoProjeto - String
  - tituloDoProjeto - String
  - descricaoDoProjeto - String
  - pessoasResponsaveis - Array de Objetos
    - idPessoa - String
    - nomePessoa - String
    - setor - String
  - pessoasColaboradoras - Array de Objetos
    - idPessoa - String
    - nomePessoa - String
    - setor - String - Data de Início
  - dataInicio - String
  - statusDoProjeto - String ('em andamento' ou 'encerrado')

- Lista de Requisitos:
  - Qualquer pessoa pode criar um novo projeto.
  - Somente a pessoa responsável pelo projeto pode editar suas informações.
  - Somente a pessoa responsável pelo projeto pode excluí-lo.
  - Projetos com _status_ "encerrado" não podem sofrer alteração.

---

A partir dessas informações, execute as tarefas a seguir:

1. Crie uma constante que irá receber a lista de projetos.

2. Crie 3 objetos diferentes que irão receber as informações do projeto.

3. Crie uma função que adiciona os objetos criados à lista de projetos.

   > Dica: use o método que adiciona itens no Array

4. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]".

5. Crie uma função com as seguintes características:

   - A função deve receber um número por parâmetro
   - A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o _status_ [PROJETO.STATUS]
   - Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'

6. Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.

7. Crie uma função com as seguintes características:

   - A função deve receber o parâmetro id do projeto
   - Se o id do projeto existir, retorne o projeto encontrado
   - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
     > Dica: use o método que filtre as informações do Array

8. Crie uma função com as seguintes características:

   - A função deve receber dois parâmetros: idProjeto e idPessoa
   - Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
     > Dica1: use a função criada no exercício 7 para verificar se o projeto existe  
     > Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis

9. Crie uma função com as seguintes características:

   - A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
   - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o _status_ é diferente de "encerrado" para permitir edição.
     > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
   - Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
   - Se o _status_ do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".

10. Crie uma função com as seguintes características:

    - A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
    - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'
      > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
    - Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".

### Para ajudar:

- [arrays]: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [objetos]: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [métodos map(), filter() e find()]: (https://medium.com/reprogramabr/m%C3%A9todos-de-arrays-find-map-e-filter-dcbbdf7c5be0)
