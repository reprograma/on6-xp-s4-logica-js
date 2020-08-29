//Exercicio 1

const ListadeProjetos= []

//Exercicio 2

const projeto1 = {
    idProjeto: 1, 
    tituloDoProjeto: "Semana 04",
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{IdPessoa:123, nome:'Nanda', setor: 'tecnologia'},{IdPessoa:345, nome:'Julia', setor: 'tecnologia'}, {IdPessoa:356, nome:'Karol', setor: 'tecnologia'} ],
    PessoasColaboradas: [{IdPessoa:345, nome:'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusdoProjeto: "em andamento"
}

function adicionaProjeto(projeto1){
    return ListadeProjetos.push(projeto1)
}
console.log(ListadeProjetos, 'Lista de Projeto Vazia')

adicionaProjeto()

console.log(ListadeProjetos, 'Lista de Projetos com um Projeto')