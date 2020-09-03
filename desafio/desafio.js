// Imprimir EXERCÍCIO

function exercicio(num) {
    console.log(`==================================================`)
    console.log(`=============== EXERCÍCIO ${num} ======================`)
    console.log(`==================================================`)
}

// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Semana 05',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 678, nome: 'Renata', setor: 'tecnologia'}, {idPessoa: 527, nome: 'Tarsila', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 901, nome: 'Fernanda', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Semana 06',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 823, nome: 'Vanessa', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado'
}

// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

// console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)

// console.log(listaDeProjetos, 'Lista de projetos com um projeto')


// Exercício 4
exercicio(4);

listaDeProjetos.getAll = function() {
    let lista = JSON.stringify(listaDeProjetos)
    return `Lista de projetos: ${lista}`

}

console.log(listaDeProjetos.getAll())

// Exercício 5
exercicio(5);

listaDeProjetos.status = function(posicao) {
    if(typeof listaDeProjetos[posicao] === "undefined")
        return `Objeto não encontrado`
    
    return `O [${listaDeProjetos[posicao].tituloDoProjeto}] na posição ${posicao} está com o __status__ [${listaDeProjetos[posicao].statusDoProjeto}]`
}

console.log(listaDeProjetos.status(1))
console.log(listaDeProjetos.status(5))

// Exercício 6
exercicio(6);

listaDeProjetos.total = function() {
    return `Temos ${listaDeProjetos.length} projetos cadastrados`
}

console.log(listaDeProjetos.total())

// Exercício 7
exercicio(7);

listaDeProjetos.find = function(idProjeto) {
    for(let i = 0 ; i < listaDeProjetos.length ; i++)
        if(listaDeProjetos[i].idProjeto === idProjeto) 
            return listaDeProjetos[i]
    
    return `Projeto não encontrado.`
}

console.log(listaDeProjetos.find(2))
console.log(listaDeProjetos.find(5))

// Exercício 8
exercicio(8);

listaDeProjetos.projeto_pessoa = function(idProjeto, idPessoa) {
    for(let i = 0 ; i < listaDeProjetos.length ; i++)
        if(listaDeProjetos[i].idProjeto === idProjeto)
            for(let j = 0 ; j < listaDeProjetos[i].pessoasResponsaveis.length ; j++)
                if(listaDeProjetos[i].pessoasResponsaveis[j].idPessoa === idPessoa)
                    return true

    return false
}

console.log(listaDeProjetos.projeto_pessoa(1,123))
console.log(listaDeProjetos.projeto_pessoa(1,321))

// Exercício 9
exercicio(9);

listaDeProjetos.projeto_pessoa_status = function(idProjeto, idPessoa, statusDoProjeto) {
    if(!listaDeProjetos.projeto_pessoa(idProjeto, idPessoa)) 
        return `Você não tem autorização para alterar este projeto!`
        
    if(listaDeProjetos.find(idProjeto).statusDoProjeto === "encerrado")
        return `O projeto [${listaDeProjetos.find(idProjeto).tituloDoProjeto}] já foi encerrado e não pode ser editado!`
}

console.log(listaDeProjetos.projeto_pessoa_status(1,098,'em andamento'))
console.log(listaDeProjetos.projeto_pessoa_status(3,123,'em andamento'))

// Exercício 10
exercicio(10);
listaDeProjetos.encerrar_projeto = function(idProjeto, idPessoa) {
    if(!listaDeProjetos.projeto_pessoa(idProjeto, idPessoa)) 
        return `Você não tem autorização para alterar este projeto!`


    listaDeProjetos.find(idProjeto).statusDoProjeto = 'encerrado'
    return `Projeto [${listaDeProjetos.find(idProjeto).tituloDoProjeto}] encerrado.`
}

console.log(listaDeProjetos.encerrar_projeto(1,123))
console.log(listaDeProjetos.encerrar_projeto(2,845))