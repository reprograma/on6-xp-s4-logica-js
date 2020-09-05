// Exercicio 1
console.log("-------------------------------Exercício 1------------------------")


const listaDeProjetos = []

// Exercício 2
console.log("-------------------------------Exercício 2------------------------")


const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Semana 05',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Victoria', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Leticia', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Rejane', setor: 'tecnologia'}],
    dataInicio: '31/08/2020',
    statusDoProjeto: 'em andamento'
}
const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Semana 06',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Rose', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Bruno', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Maria', setor: 'tecnologia'}],
    dataInicio: '02/09/2020',
    statusDoProjeto: 'em andamento'
}

// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES


// Exercício 3
console.log("-------------------------------Exercício 3------------------------")

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)

// Exercício 4
console.log("-------------------------------Exercício 4------------------------")

function lista(){
    console.log('Lista de projetos com um projeto', listaDeProjetos)
}

lista()

// Exercício 5
console.log("-------------------------------Exercício 5------------------------")

function encontrarProjeto(posicao){
    if (listaDeProjetos[posicao] === undefined){
        return `Projeto não encontrado`
    }else{
        return `"${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`
    }
}

console.log(encontrarProjeto(0))
console.log(encontrarProjeto(5))
console.log(encontrarProjeto(1))

// Exercício 6
console.log("-------------------------------Exercício 6------------------------")

function contarProjetos(){
    let objetos = listaDeProjetos.length
    let plural = `projetos cadastrados`
    let singurar = `projeto cadastrado`

    if (objetos > 1){
        return `Temos o total de ${objetos} ${plural}`
    
    }else{
        return `Temos o total de ${objetos} ${singular}`
    }
}

console.log(contarProjetos())

// Exercício 7
console.log("-------------------------------Exercício 7------------------------")
