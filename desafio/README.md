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

  - Id do projeto
  - Título do projeto
  - Descrição do projeto
  - Pessoas responsáveis, contendo id da pessoa, nome da pessoa e setor
  - Pessoas colaboradoras, contendo id da pessoa, nome da pessoa e setor
  - Data de Início
  - _Status_ do Projeto (em andamento ou encerrado)

- Lista de Requisitos:
  - Qualquer pessoa pode criar um novo projeto.
  - Somente a pessoa responsável pelo projeto pode editar suas informações.
  - Somente a pessoa responsável pelo projeto pode excluí-lo.
  - Projetos com _status_ "encerrado" não podem sofrer alteração.

---

A partir dessas informações, execute as tarefas a seguir:

1. Crie uma constante que irá receber a lista de projetos.

2. Crie uma função que adiciona um objeto contendo as informações do projeto à lista de projetos.

3. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos".

4. Crie uma função que retorne todos os projetos com _status_ "em andamento" com a seguinte frase "Lista de projetos em andamento"

5. Crie uma função que retorne todos os projetos com _status_ "encerrado" com a seguinte frase "Lista de projetos encerrados"

6. Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.

7. Crie uma função com as seguintes características:

   - A função deve receber o parâmetro id do projeto
   - Se o id do projeto existir, retorne o projeto encontrado
   - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
