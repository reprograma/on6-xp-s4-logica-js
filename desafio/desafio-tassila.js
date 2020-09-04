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