// Exercicio 1

const listaDeProjetos = []
console.log("--------------------------------------------------------------")
// Exercício 2

const projeto1 = {
    idProjeto: '1',
    tituloDoProjeto: 'Semana 04.1',
    descricaoDoProjeto: 'exercicio da semana 04.1',
    pessoasResponsaveis: [{idPessoa: '123', nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: '987', nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: '345', nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto2 = {
    idProjeto: '2',
    tituloDoProjeto: 'Semana 04.2',
    descricaoDoProjeto: 'exercicio da semana 04.2',
    pessoasResponsaveis: [{idPessoa: '697', nome: 'Tainara', setor: 'tecnologia'}, {idPessoa: '621', nome: 'Lorenna', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: '361', nome: 'Luana', setor: 'tecnologia'}],
    dataInicio: '30/08/2020',
    statusDoProjeto: 'encerrado'
}

const projeto3 = {
    idProjeto: '3',
    tituloDoProjeto: 'Semana 04.3',
    descricaoDoProjeto: 'exercicio da semana 04.3',
    pessoasResponsaveis: [{idPessoa: '641', nome: 'Maria', setor: 'tecnologia'}, {idPessoa: '543', nome: 'Lecticia', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: '644', nome: 'Heliza', setor: 'tecnologia'}],
    dataInicio: '01/08/2020',
    statusDoProjeto: 'em andamento'
}
// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES

console.log("--------------------------------------------------------------")

// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

//console.log(listaDeProjetos, `Lista de projetos com ${listaDeProjetos.length} projetos`)

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)

console.log(listaDeProjetos)

console.log("--------------------------------------------------------------")

//4
console.log(`Lista de projetos:`, listaDeProjetos)

console.log("--------------------------------------------------------------")

//5
console.log(listaDeProjetos)

function posicaoProjeto(numero){
if(listaDeProjetos === undefined){
    return `Projeto não encontrado`
}
    return `O ${listaDeProjetos[posicao]} na posição ${posicao}`

}

console.log(posicaoProjeto(1))