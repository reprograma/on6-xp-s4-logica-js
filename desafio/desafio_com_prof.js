// Exercicio 1

const listaDeProjetos = []
console.log("--------------------------------------------------------------")
// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04.1',
    descricaoDoProjeto: 'exercicio da semana 04.1',
    pessoasResponsaveis: [{idPessoa: '123', nome: 'Yasminn', setor: 'tecnologia'}, {idPessoa: '987', nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: '345', nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Semana 04.2',
    descricaoDoProjeto: 'exercicio da semana 04.2',
    pessoasResponsaveis: [{idPessoa: '697', nome: 'Tainara', setor: 'tecnologia'}, {idPessoa: '621', nome: 'Lorenna', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: '361', nome: 'Luana', setor: 'tecnologia'}],
    dataInicio: '30/08/2020',
    statusDoProjeto: 'encerrado'
}

const projeto3 = {
    idProjeto: 3,
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

function listaProjetos(){
    return `Lista de Projetos: ${JSON.stringify(listaDeProjetos)}`
}

console.log(listaProjetos())

console.log("--------------------------------------------------------------")

//5

function posicaoDoProjeto (p){
    if(listaDeProjetos[p] === undefined){
        return `Projeto não encontrado`
    }else{
        return `O "${listaDeProjetos[p].tituloDoProjeto}" está na posição ${p} e seu status é "${listaDeProjetos[p].statusDoProjeto}"`
    }
}
console.log(posicaoDoProjeto(1))
console.log(posicaoDoProjeto(2))
console.log(posicaoDoProjeto(9))

console.log("--------------------------------------------------------------")

//6

function totalDeProjetos(){
    let objetos = listaDeProjetos.length
    let plural = 'projetos cadastrados'
    let singular = 'projeto cadastrado'

    if(objetos > 1) {
        return `Temos o total de ${objetos} ${plural}`
    }else{
        return `Temos o total de ${objetos} ${singular}`

    }
    }
console.log(totalDeProjetos())

console.log("--------------------------------------------------------------")

//7

function buscarProjeto(idProjeto) {
    // atribui a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
    // return é o resultado da nossa condição
  
    // também poderíamos usar o método find
  
    // let projetoEncontrado = listaDeProjetos.filter(function (projeto) {
    //   return projeto.idProjeto === idProjeto;
    // });
  
    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
      return projeto.idProjeto === idProjeto;
    });
  
    if (projetoEncontrado !== undefined) {
      return projetoEncontrado;
    } else {
      return `Projeto não encontrado`;
    }
  }
  
  console.log(buscarProjeto(6)); // retorna projeto3

console.log("--------------------------------------------------------------")

