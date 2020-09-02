// Exercício 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 1, nome: 'Patricia', setor: 'tecnologia' }, { idPessoa: 2, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 5, nome: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 7, nome: 'Monaliza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1)

console.log(listaDeProjetos, 'Lista de projetos com um projeto')