// Exercicio 1

const listaDeProjetos = []

// Exercício 2
// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento',
}
const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Meu primeiro projeto',
    descricaoDoProjeto: 'Desafio',
    pessoasResponsaveis: [{idPessoa: 522, nome: 'Raphaela', setor: 'tecnologia'}, {idPessoa: 944, nome: 'Claudia', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 278, nome: 'Paulo', setor: 'tecnologia'}],
    dataInicio: '30/05/2020',
    statusDoProjeto: 'encerrado'
}
const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Projeto de artes',
    descricaoDoProjeto: 'Desafio semana 5',
    pessoasResponsaveis: [{idPessoa: 856, nome: 'Diego', setor: 'tecnologia'}, {idPessoa: 596, nome: 'Shirley', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 798, nome: 'Paula', setor: 'tecnologia'}],
    dataInicio: '30/06/2020',
    statusDoProjeto: 'em andamento'
}




// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3) // adiciona o projeto1 a lista de projetos utilizando a função criada

console.log("________________________________")


// Exercício 4

function lista(){
    console.log(listaDeProjetos, 'Lista de projetos com três projetos' )
}

console.log(lista())
console.log("________________________________")

//Exercício 5
/*Crie uma função com as seguintes características:

   - A função deve receber um número por parâmetro
   - A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o _status_ [PROJETO.STATUS]
   - Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'*/

   function status(numero) {
       
       if (listaDeProjetos[numero] !== undefined){
        return `O projeto " ${listaDeProjetos[numero].tituloDoProjeto} " na posição ${numero}  está com o status ${listaDeProjetos[numero].statusDoProjeto}`
       } else {
        return 'Projeto não encontrado'
       }
       
   }

   console.log(status(1))
   console.log("________________________________")

   //Exercício 6
   /* Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". 
   Extra: tente fazer a frase no singular e no plural.*/
   function numeroProjetos () {
    lista = (listaDeProjetos.length)
    if (lista > 1) {
        return `Temos "${lista}" projetos cadastrados`
    } else {
        return `Temos "${lista}" projeto cadastrado`
    }
   }

   console.log(numeroProjetos())
   console.log("________________________________")
  
   //Exercicio 7
   /* Crie uma função com as seguintes características:

   - A função deve receber o parâmetro id do projeto
   - Se o id do projeto existir, retorne o projeto encontrado
   - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
     > Dica: use o método que filtre as informações do Array */


     //atribui a variavel projetoEncontrado o retorno do filtro
     // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
     // return é o resultado da nossa condição

function buscarProjeto(idProjeto) {
    let projetoEncontrado = listaDeProjetos.filter(function (projeto) {
        return projeto.idProjeto === idProjeto;
    });
    return projetoEncontrado

    if (projetoEncontrado !== undefined) {
        return `Projeto não encontrado!`
    } else {
        return projetoEncontrado
    }
}

    console.log(buscarProjeto(3))
    console.log("________________________________")


    /*8. Crie uma função com as seguintes características:

   - A função deve receber dois parâmetros: idProjeto e idPessoa
   - Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
     > Dica1: use a função criada no exercício 7 para verificar se o projeto existe  
     > Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis
    */

     function mostrarResponsavel (idProjeto, idPessoa) {
         let projeto = buscarProjeto(idProjeto);
         let responsavel = projeto.pessoasResponsaveis.find(function (responsavel){
            return responsavel.idPessoa === idPessoa;
         });

         if (responsavel !== undefined) {
            return true;
         } else {
            return false;
         }
     }

     console.log(mostrarResponsavel (2, 522))
     console.log(mostrarResponsavel (2, 1999))