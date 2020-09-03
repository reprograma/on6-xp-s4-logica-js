// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 123, nomePessoa: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPesgitsoa: 345, nomePessoa: 'Andreza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto2 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 123, nomePessoa: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPesgitsoa: 345, nomePessoa: 'Andreza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto3 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 123, nomePessoa: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPesgitsoa: 345, nomePessoa: 'Andreza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}


// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES


// Exercício 3

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)

console.log(listaDeProjetos, 'Lista de projetos com um projeto')

//Exercicio 4

function listarProjetos() {
    /// return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`
    return listaDeProjetos
}

console.log(listarProjetos());

//Exercicio 5

function posicaoDoProjeto(posicao) {
    if (listaDeProjetos[posicao] === undefined) {
        return 'Projeto não encontrado';
    } else {
        return ´O ${ listadeProjeto[posicao].tituloDoProjeto } ` está na posição ${posicao} e seu status é ${listarProjetos[posicao].statusDoProjeto}  

}
}

console.log(posicaoDoProjeto(0))