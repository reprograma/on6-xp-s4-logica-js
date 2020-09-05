(// Exercicio 1

const listaDeProjetos = []

//exer 2

const projeto1 = {

    idProjeto : 1 ,
    tituloDoProjeto : "Semana 04",
    descricaoDoProjeto : 'exercico da semana',
    pessoasResponsaveis : [
        {idPessoa : 123, nome: "Deise", setor : ' tecnologia'}, {idPessoa : 987, nome: "Larissa", setor : ' tecnologia'},],
    pessoasColaboradoras: [{ idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia' },
    { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' },],
    dataInicio : '29/08/2020',
    statusDoProjeto : ' em andamento'
    
}
const projeto2 ={ 
idProjeto : 2 ,
tituloDoProjeto : "Desafio",
descricaoDoProjeto : 'resolvendo Desafio da semana',
pessoasResponsaveis : [
    {idPessoa :231, nome: "Pedro", setor : ' tecnologia'}, {idPessoa : 987, nome: "Joana", setor : ' tecnologia'},],
pessoasColaboradoras: [{ idPessoa: 345, nome: 'Felipe', setor: 'marketing' },
{ idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
{ idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },],
dataInicio : '29/05/2020',
statusDoProjeto : ' Encerrado'

}
const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Atendo em Libras',
    descricaoDoProjeto:
      'projeto para conectar profissionais de saúde a pessoas surdas',
    pessoasResponsaveis: [
      { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
      { idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },
    ],
    pessoasColaboradoras: [
      { idPessoa: 893, nome: 'Fabiola', setor: 'marketing' },
    ],
    dataInicio: '15/03/2020',
    statusDoProjeto: 'em andamento',
  };

    

//exercicio 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)

}
console.log(listaDeProjetos, ' Lista de projetos vazio')
adicionaProjeto(projeto1)

console.log(listaDeProjetos,'Lista de projeto com um projeto')

// Exercicio 4

function listarProjetos(){
    return `Lista de projetos ${JSON.stringify(listaDeProjetos)}`;
   // return listaDeProjetos
   // funciona se nao usar a template string
}
console.log(listarProjetos())

// Exercicio 5

function  posicaoDOProjeto(posicao){
    if (listaDeProjetos[posicao]=== undefined){
        return 'projeto nao encontrado'
    }else{
        return `O ${listaDeProjetos[posicao].tituloDoProjeto} esta na posicao ${[posicao]} e seu status e ${listaDeProjetos[posicao].statusDoProjeto}`
    }
}

console.log (posicaoDOProjeto(0))//retorna projeto 1
console.log(posicaoDOProjeto(2))// retorna projeto 3

//Exercicio 6

function totalDeProjetos(){
    let objetos = listaDeProjetos.length
    let plural = 'projetos cadastrados'
    let singular = ' projeto cadastrado'
    if(objetos>1){
        return `Temos o total ${objetos}  ${plural}`
    }else{
        return  `Temos o total ${objetos}  ${singular}`
    }


}

//exercicio 7

function buscarProjeto (idProjeto){
    // atribui a variavel o projeto encontrado o retorno do filtro
    // projeto é cada posicao do array que o filtro vai acessar para buscar nossa condicao
    // return é o resultado da nossa condicao
    // tambem poderiamos usar o metodo find
    //let projetoEncontrado = listaDeProjetos.filter(function (projeto){
       // return projeto.idProjeto === idProjeto;
       let projetoEncontrado = listaDeProjetos.find(function (projeto){
         return projeto.idProjeto === idProjeto;
    });
    if(projetoEncontrado !== undefined){
        return projetoEncontrado;

    }else{
        return 'Projeto não encontrado'
    }
    
}
console.log(buscarProjeto(3))// retorna projeto3

//exercicio 8

function mostrarResponsavel(idProjeto, idPessoa){
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel){
        return responsavel.idPessoa === idPessoa;
    });
    if(responsavel !== undefined){
        return true;
    }else{
        return false;
    }
    
}
console.log(mostrarResponsavel(2,589));// return true
console.log(mostrarResponsavel(2,111));// return false

// exericio9
function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto) {

    let funcaoExercicio7 = buscarProjeto(idProjeto)
    let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

    if (funcaoExercicio7 === 'Projeto não encontrado') {
        return 'ID não existe';
    } else if (funcaoExercicio8 === false ) {
        return 'Você não tem autorização para alterar este projeto!';
    } else if (statusDoProjeto === "Encerrado") {
        return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado!`
    } else {
        return 'Permissão concedida';
    }
}

console.log(autorizarAlteracao(1, 123, ))


//exercicio10
function modificandoStatusProjeto(projeto, pessoa) {

    let funcaoExercicio7 = acharId(projeto) 
    let funcaoExercicio8 = existeProjeto(projeto, pessoa)

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return "ID Inválido"
    } else  if (!funcaoExercicio8) {
        return "Você não tem autorização para alterar este projeto!"
    }  else {

        if (listaDeProjetos[projeto -1].statusDoProjeto === "Em andamento") {
            listaDeProjetos[projeto -1].statusDoProjeto = "Encerrado" 
            return `Projeto ${listaDeProjetos[projeto -1].tituloProjeto} encerrado.`
        } else {
            return "Esse projeto já foi encerrado anteriormente."
        }
    }
        
}

console.log(queroModificar(1, 123))


