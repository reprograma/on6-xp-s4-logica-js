
// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nomePessoa: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPesgitsoa: 345, nomePessoa: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

console.log(projeto1)

// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES


// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada

