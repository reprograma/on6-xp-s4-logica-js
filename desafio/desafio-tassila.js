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
    statusDoProjeto: 'em andamento'
}

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, ' Lista de Projeto Vazia!')
adicionaProjeto(projeto1)
console.log(listaDeProjetos, 'Lista de Projetos com Um Projeto!')

//Exercicio 3

