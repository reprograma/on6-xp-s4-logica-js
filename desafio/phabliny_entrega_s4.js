/* Você é a nova pessoa desenvolvedora na Agência Estrela e é a responsável por criar um programa de gerenciamento de projetos. Para isso, você recebeu uma lista com as informações para cadastrar um projeto e a lista de requisitos que o sistema deve ter:

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

1. Crie uma constante que irá receber a lista de projetos. */

const listaDeProjetos = []

/* 2. Crie 3 objetos diferentes que irão receber as informações do projeto. */

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'exemplo projeto 1',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResposaveis: [{idPessoa: 123, nome: 'Yasmin', setor: 'tecnologia'}, {idPessoa: 754, nome: 'Larissa', setor: 'tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 364, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento',
}
const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'exemplo projeto 2',
    descricaoDoProjeto: 'dados',
    pessoasResposaveis: [{idPessoa: 658, nome: 'Regina', setor: 'tecnologia'}, {idPessoa: 258, nome: 'Ana', setor: 'tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 466, nome: 'Alessandra', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado',
}
const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'exemplo projeto 3',
    descricaoDoProjeto: 'html e css',
    pessoasResposaveis: [{idPessoa: 465, nome: 'Laura', setor: 'tecnologia'}, {idPessoa: 644, nome: 'Fernanda', setor: 'tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 632, nome: 'Luiza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento',
}

const projeto4 = {
    idProjeto: 4,
    tituloDoProjeto: 'exemplo projeto 4',
    descricaoDoProjeto: 'javascript',
    pessoasResposaveis: [{idPessoa: 213, nome: 'Beatriz', setor: 'tecnologia'}, {idPessoa: 656, nome: 'Lara', setor: 'tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 456, nome: 'Francielle', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado',
}

function adicionaProjetos(projeto){
    return listaDeProjetos.push(projeto)
}

adicionaProjetos(projeto1)
adicionaProjetos(projeto2)
adicionaProjetos(projeto3)
adicionaProjetos(projeto4)

/* 3. Crie uma função que adiciona os objetos criados à lista de projetos.

   > Dica: use o método que adiciona itens no Array
*/
const tamanhoDaLista = listaDeProjetos.length

function mostraListaDeProjetos(){
    console.log('-----------------------------------------------------------')
    console.log('                   Lista de projetos ')
    console.log('-----------------------------------------------------------')
    //console.log(`${JSON.stringify(listaDeProjetos)}`) // Assim  a apresentação da lista fica estranha só que mostra os objetos. Transforma tudo dentro da lista em string.
    //console.log(listaDeProjetos) // Assim não mostra o que tem dentro do objeto
    for(let i = 0; i < tamanhoDaLista; i++){ // Desse jeito a lista vem mais bonita e mostrando os objetos
        console.log(listaDeProjetos[i])
    }
}
console.log('***********************************************************')
console.log('                    Exercícios 1, 2 e 3')
console.log('***********************************************************')
mostraListaDeProjetos()

/* 4. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]". */

// Sem usar o filter --> mostra todos os objetos
function mostrarProjetosEmAndamento(){
    console.log('-------------------------------------------------------------')
    console.log('               Lista de projetos em andamento')
    console.log('-------------------------------------------------------------')
    for (let i = 0; i <= (tamanhoDaLista - 1); i++){
        if (listaDeProjetos[i].statusDoProjeto == 'em andamento'){
        console.log(listaDeProjetos[i])
        //listaEmAndamento.push(listaDeProjetos[i])
        }
    }
}
console.log('***********************************************************')
console.log('                       Exercício 4')
console.log('***********************************************************')
mostrarProjetosEmAndamento()

// Usando o Filter --> não mostra os objetos 
function ProjetosEmAndamentoFilter(){
    console.log('-------------------------------------------------------------')
    console.log('               Lista de projetos em andamento')
    console.log('-------------------------------------------------------------')
    const newList = listaDeProjetos.filter(emAndamento => emAndamento.statusDoProjeto === 'em andamento')
    console.log(newList)
}
//ProjetosEmAndamentoFilter()

/* 5. Crie uma função com as seguintes características:

   - A função deve receber um número por parâmetro
   - A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o _status_ [PROJETO.STATUS]
   - Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado' 
*/
function numeroProjeto(num){
    if(listaDeProjetos[num] !== undefined){
        console.log(`O projeto "${listaDeProjetos[num].tituloDoProjeto}" na posição ${num} está com o _status_ "${listaDeProjetos[num].statusDoProjeto}".`)
    }else{
        console.log('Projeto não encontrado!')
    }
}
console.log('***********************************************************')
console.log('                       Exercício 5')
console.log('***********************************************************')
numeroProjeto(2)


/* 6. Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.*/

function totalProjetos(){
    if(listaDeProjetos.length <= 1){
        return `Temos ${listaDeProjetos.length} projeto cadastrado.`
    }else{
        return `Temos ${listaDeProjetos.length} projetos cadastrados.`
    }
}
console.log('***********************************************************')
console.log('                       Exercício 6')
console.log('***********************************************************')
console.log(totalProjetos())

/* 7. Crie uma função com as seguintes características:

   - A função deve receber o parâmetro id do projeto
   - Se o id do projeto existir, retorne o projeto encontrado
   - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
     > Dica: use o método que filtre as informações do Array
*/

// Usando o Find --> retorna o primeiro elemento que achar igual ao elemento passado por parâmetro, deve ser usado para procurar algo único ou que a primeira opção encontrada seja a válida. **Mostra os objetos**
let listaParametroId = ''
function receberId(idprojeto){
    listaParametroId = listaDeProjetos.find(id => id.idProjeto === idprojeto)
    if (listaParametroId == undefined){
        return 'Projeto não encontrado!'
    }else{
        return listaParametroId
    }
}
console.log('***********************************************************')
console.log('                       Exercício 7')
console.log('***********************************************************')
console.log(receberId(4))

// Sem usar o filter --> ** Também mostra os objetos**
let temProjeto = ''
function funcao7(idprojeto){
    for (let i = 0; i <= (tamanhoDaLista - 1); i++){
        if (listaDeProjetos[i].idProjeto == idprojeto){
            temProjeto = listaDeProjetos[i]
        }
   }
   if(temProjeto !== ''){
    console.log(temProjeto)
   }else{
    console.log('Projeto não encontrado!')
   }
}
//funcao7(1)

/* 8. Crie uma função com as seguintes características:

   - A função deve receber dois parâmetros: idProjeto e idPessoa
   - Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
     > Dica1: use a função criada no exercício 7 para verificar se o projeto existe  
     > Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis 
*/
function funcao8(idprojeto, idpessoa){
    receberId(idprojeto)
    if(listaParametroId !== undefined){
        let acharIdPessoa = listaParametroId.pessoasResposaveis.filter(id => id.idPessoa == idpessoa)
        if(acharIdPessoa == ''){
            return false
        }else{
            return true
        }
    }else{
        return 'Projeto não encontrado!'
    }
}
console.log('***********************************************************')
console.log('                       Exercício 8')
console.log('***********************************************************')
console.log(funcao8(1,123))

/* 
9. Crie uma função com as seguintes características:

   - A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
   - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o _status_ é diferente de "encerrado" para permitir edição.
     > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
   - Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
   - Se o _status_ do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".
*/
function funcao9(id, idpessoa, status){
    if(receberId(id) !== 'Projeto não encontrado!'){
        if (funcao8(id, idpessoa) === true ){
            if(status === 'encerrado'){
                console.log(`O projeto "${listaParametroId.tituloDoProjeto}" já foi encerrado e não pode ser editado!`)
            }else if(status === 'em andamento'){
                console.log(`O projeto "${listaParametroId.tituloDoProjeto}" está em andamento e pode ser editado!`)
            }
        }else{
            console.log('Você não tem autorização para alterar este projeto!')
        }
    }else{
        console.log('Projeto não encontrado!')
    }
}
console.log('***********************************************************')
console.log('                       Exercício 9')
console.log('***********************************************************')
funcao9(1, 123, 'em andamento')


/* 10. Crie uma função com as seguintes características:

    - A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
    - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'
      > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
    - Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!". 
*/  
function funcao10(id, idpessoa, status){
    if(receberId(id) !== 'Projeto não encontrado!'){
        if (funcao8(id, idpessoa) === true ){
            if(status === 'encerrado'){
                console.log(`O projeto "${listaParametroId.tituloDoProjeto}" já está como encerrado`)
            }else if(status === 'em andamento'){
                console.log(`O status do projeto "${listaParametroId.tituloDoProjeto}" foi alterado para encerrado`)
                listaParametroId.statusDoProjeto = 'encerrado'
                console.log(listaParametroId)
            }
        }else{
            console.log('Você não tem autorização para alterar este projeto!')
        }
    }else{
        console.log('Projeto não encontrado!')
    }
}
console.log('***********************************************************')
console.log('                       Exercício 10')
console.log('***********************************************************')
funcao10(1, 123, 'em andamento')