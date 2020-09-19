/*Você é a nova pessoa desenvolvedora na Agência Estrela e é a responsável por criar um programa de gerenciamento de projetos. Para isso, você recebeu uma lista com as informações para cadastrar um projeto e a lista de requisitos que o sistema deve ter:

Informações do Projeto:
idDoProjeto - String
tituloDoProjeto - String
descricaoDoProjeto - String
pessoasResponsaveis - Array de Objetos
idPessoa - String
nomePessoa - String
setor - String
pessoasColaboradoras - Array de Objetos
idPessoa - String
nomePessoa - String
setor - String - Data de Início
dataInicio - String
statusDoProjeto - String ('em andamento' ou 'encerrado')
Lista de Requisitos:

Qualquer pessoa pode criar um novo projeto.
Somente a pessoa responsável pelo projeto pode editar suas informações.
Somente a pessoa responsável pelo projeto pode excluí-lo.
Projetos com status "encerrado" não podem sofrer alteração.*/

/*A partir dessas informações, execute as tarefas a seguir:


1- Crie uma constante que irá receber a lista de projetos.*/
const listaDeProjetos = []


/*2-Crie 3 objetos diferentes que irão receber as informações do projeto.*/
const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Git e GiHub',
    descricaoDoProjeto: 'exercicio da primeira semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '14/08/2020',
    statusDoProjeto: 'concluso'
}

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Introdução Lógica de Programação',
    descricaoDoProjeto: 'exercicio da segunda semana',
    pessoasResponsaveis: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}],
    dataInicio: '21/08/2020',
    statusDoProjeto: 'concluso'
}

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Lógica de Programação aplicada ao Java Script',
    descricaoDoProjeto: 'exercicio da terceira semana',
    pessoasResponsaveis: [{idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}, {idPessoa: 567, nome: 'Manuella', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '28/08/2020',
    statusDoProjeto: 'em andamento'
}


/*3-Crie uma função que adiciona os objetos criados à lista de projetos.
Dica: use o método que adiciona itens no Array*/
function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')
adicionaProjeto(projeto4) // adicionando mais um projeto a lista criada
adicionaProjeto(projeto5) // adicionando mais um projeto a lista criada
adicionaProjeto(projeto6) // adicionando mais um projeto a lista criada
console.log(listaDeProjetos, 'Lista de projetos com projeto relacionados: ') //mostra os projetos adicionados a lista



/*4-Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]".*/
function listarProjetos(){
    return `Lista de projetos: ${JSON.stringfy(listaDeProjetos)}`;
}
console.log(listarProjetos());


/*5-Crie uma função com as seguintes características:
 A função deve receber um número por parâmetro
 A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o status [PROJETO.STATUS]
 Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'*/
     function posicaoDoProjeto(posicaoProjeto){
         if(listaDeProjetos[posicaoProjeto] === undefined){
             return 'O projeto não foi localizado'
         }else{
             return `O projeto ${listaDeProjetos[posicaoProjeto].tituloDoProjeto}, corresponde a posição: ${posicaoProjeto}. Status: ${listaDeProjetos[posicaoProjeto].statusDoProjeto}`;
         }
        }
           console.log(posicaoDoProjeto(2))//Irá retornar o projeto 3
           console.log(posicaoDoProjeto(10))//Irá retornar a informação de 'O projeto não foi localizado'
   


/*6-Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.*/
    function totalDeProjetos(){
    this.totalProjetos = listaDeProjetos.length;
    }
    
    const singular = 'projeto';
    const plural =  'projetos';

    if (totalProjetos === 1){
        console.log(`Há somente ${totaProjeto} ${singular} cadastrado até o presente momento.`)
        }else{
        console.log(`Há ${totaProjetos} ${plural} cadastrados.`)
    
}



/*7-Crie uma função com as seguintes características:
A função deve receber o parâmetro id do projeto
Se o id do projeto existir, retorne o projeto encontrado
Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
Dica: use o método que filtre as informações do Array*/

function buscarProjeto(idProjeto){
    let projetoLocalizado = listaDeProjetos.find(function(projeto){
    return projeto.idProjeto === idProjeto; // retorna o resultado da condição determinada
    });
    if (projetoLocalizado !== undefined){
        return projetoLocalizado
    }else{
        return 'projeto não Localizado.'; 
    }
}
console.log(buscarProjeto(1)) 
console.log(buscarProjeto(10)) 



/*8-Crie uma função com as seguintes características:
A função deve receber dois parâmetros: idProjeto e idPessoa
Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas responsáveis e retorne um boleano
Dica1: use a função criada no exercício 7 para verificar se o projeto existe
Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis*/



/*9-Crie uma função com as seguintes características:
A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o status é diferente de "encerrado" para permitir edição.
Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição

Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
Se o status do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".*/



/*10-Crie uma função com as seguintes características:
A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'
Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".*/


