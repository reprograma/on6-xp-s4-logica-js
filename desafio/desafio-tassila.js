// Exercicio 1

const listaDeProjetos = []

//Exercicio 2
const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'Exercicio da Semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Tassila', setor: 'Tecnologia'}, {idPessoa: 435, nome: 'Cmila', setor: 'Tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 664, nome: 'Jamile', setor: 'Tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento.'
}

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Melhores Momentos',
    descricaoDoProjeto: 'Retrospectiva do mês',
    pessoasResponsaveis: [{idPessoa: 455, nome: 'Camila', setor: 'Redação'}, {idPessoa: 677, nome: 'Fernanda', setor: 'Tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 654, nome: 'Marcela', setor: 'Marketing'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado!'
}

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Fala Comunidade',
    descricaoDoProjeto: 'Relato dos moradores do bairro PJ',
    pessoasResponsaveis: [{idPessoa: 658, nome: 'Joana', setor: 'Relacionamento'}, {idPessoa: 320, nome: 'Andreza', setor: 'Tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 333, nome: 'Priscilq', setor: 'Tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}


//Exercicio 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, ' Lista de Projeto Vazia!')

adicionaProjeto(projeto1); //adiciona o projeto 1 a lista de projeto utilizando a 
adicionaProjeto(projeto2);
adicionaProjeto(projeto3);

console.log(listaDeProjetos, 'Lista dos Projetos com os adicionados recentes!')

//Exercicio 4

function listarProjetos(){
    return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`
}

console.log(listarProjetos());

//Exercicio 5

function posicaoDoProjeto(p){
    if(listaDeProjetos[p] === undefined){
    return `Projeto não encontrado`
} else {
    return `O ${listaDeProjetos[p].tituloDoProjeto} está na posição ${p} e o seu status é ${listaDeProjetos[p].statusDoProjeto}.`;
}
}

console.log(posicaoDoProjeto(1)) //retorna projeot 1
console.log(posicaoDoProjeto(12))

// Exercicio 6

function totalDeProjetos(){
    let objetos = listaDeProjetos.length
    let plural = 'projetos cadastrados';
    let singular = 'projeto cadastrado';

    if (objetos > 1){
        return `Temos o total de ${objetos} ${plural}. `
    } else {
        return `Temos o total de ${objetos} ${singular}`
    }
}

console.log(totalDeProjetos())

//Exercicio 7

function buscarProjeto(idProjeto){

    //atribui a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para bucar nossa condição.
    // return é o resultado da nossa condição

    let projetoEncontrado = listaDeProjetos.filter(function (projeto){
    return projeto.idProjeto === idProjeto;
    });
    
    if(projetoEncontrado !== undefined) {
        return projetoEncontrado
    } else {
        return `Projeto não encontrado`;
    }

    return projetoEncontrado
}

console.log(buscarProjeto(3)) //retorna projeto 3
console.log(posicaoDoProjeto(99))


//Exercicio 8
//erroor
function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.find(function (responsavel){
        return responsavel.idPessoa === idPessoa
    });

  if(responsavel !== undefined){
  return true;
  } else {
      return false;
  }

}

console.log(mostrarResponsavel(2, 455))