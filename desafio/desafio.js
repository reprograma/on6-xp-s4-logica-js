// Exercicio 1 

const listaDeProjetos = []

// Exercicios 2 

const projeto1 = {
    idProjeto: 001,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Alicia', setor: 'tecnologia'}, {idPessoa: 456, nome: 'Bernardo', setor: 'tecnologia'}],
    pessoaColaboradora: [{idPessoa: 789, nome: 'Kauã', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'Encerrado'
}
const projeto2 = {
    idProjeto: 002,
    tituloDoProjeto: 'Teste Automatizados',
    descricaoDoProjeto: 'Automatização dos testes do projeto',
    pessoasResponsaveis: [{idPessoa: 321, nome: 'Tainara', setor: 'Teste'}],
    pessoaColaboradora: [{idPessoa:987, nome: 'Celia', setor: 'Teste'}],
    dataInicio: '30/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto3 = {
    idProjeto: 003,
    tituloDoProjeto: 'Regressivo',
    descricaoDoProjeto: 'de ponta a ponta',
    pessoasResponsaveis: [{idPessoa: 321, nome: 'Carol', setor: 'Regressivo'},{idPessoa: 654, nome: 'Miriam', setor: 'Regressivo'}],
    pessoaColaboradora: [{idPessoa:987, nome: 'Patricia', setor: 'Regresivo'}],
    dataInicio: '31/08/2020',
    statusDoProjeto: 'em andamento'
}



// Exercício 3

function adicionarProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionarProjeto(projeto1)
adicionarProjeto(projeto2)
adicionarProjeto(projeto3)

console.log(listaDeProjetos, 'Lista de projetos com um projetoS')

// Exercício 4

function projetosCadastrados() {
    return `Lista dos Projetos: ${JSON.stringify(listaDeProjetos)}`
}
console.log(projetosCadastrados())

// Exercício 5

function posicaoDoProjeto(posicao){
    if(listaDeProjetos[posicao] === undefined){
        return 'Projeto não encontrado'    
    }else{
        return `O ${listaDeProjetos[posicao].tituloDoProjeto} esta na posição ${posicao} e seu status é ${listaDeProjetos[posicao].statusDoProjeto}`
    }
}
console.log(posicaoDoProjeto(0))
console.log(posicaoDoProjeto(2))
console.log(posicaoDoProjeto(10))

// Exercício 6

function todosOsProjetos(){
    let lista = listaDeProjetos.length
    let plural = 'Projetos Cadastrados'
    let singular = 'Projeto Cadastrado'

    if(lista > 1){
        return `Temos o total de ${lista} ${plural}.`
    }else{
        return `Temos o toal de ${lista} ${singular}.`
    }
}
console.log(todosOsProjetos())

// Exercício 7

function buscarIdProjeto(idProjeto){
    let = projetoEncontrado = listaDeProjetos.find(function (projeto){
        return projeto.idProjeto === idProjeto
    })

    if(projetoEncontrado !== undefined){
        return projetoEncontrado
    }else{
        return 'Projeto não encontrado'
    }
    
}
console.log(buscarIdProjeto(003))
console.log(buscarIdProjeto(999))

// Exercício 8

function mostrarResponsavel(idProjeto, idPessoa){
    let projeto = buscarIdProjeto(idProjeto)
    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel){
        return responsavel.idPessoa === idPessoa
    })

    return responsavel
}
console.log(mostrarResponsavel(002, 321))

// Exercício 9

function autorizacao (idProjeto, idPessoa, statusDoProjeto){
    let funcaoExercicio7 = buscarIdProjeto(idProjeto)
    let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

    if(funcaoExercicio7 === 'Projeto não encontrado'){
        return 'Id não existe'
    }else if(funcaoExercicio8 === false){
        return 'Você não tem autorização para alterar este projeto.'
    }else if(statusDoProjeto === "Encerrado"){
        return `O proejto ${listaDeProjetos[projeto].titulo} já foi encerrado e não pode ser editado.`
    }else{
        return 'Permissão concedida!!'
    }
}

console.log(autorizacao(002, 321, 'em andamento'))



// Exercício 10
function modificarProjeto(idProjeto, idPessoa){

    
}

console.log(modificarProjeto(002, 321))


