// Exercicio 1 

const listaDeProjetos = []

// Exercicios 2 

const projeto1 = {
    idProjeto: 001,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Alicia', setor: 'tecnologia'}, {idPessoa: 456, nome: 'Bernardo', setor: 'tecnologia'}],
    pessoaColaboradoras: [{idPessoa: 789, nome: 'Kauã', setor: 'tecnologia'}],
    dataInicio: '29/08/2020S',
    statusProjeto: 'em andamento'
}

function adicionarProjeto(projeto){
    return listaDeProjetos.push(projeto)

}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionarProjeto(projeto1)

console.log(listaDeProjetos, 'Lista de projetos com um projetoS')