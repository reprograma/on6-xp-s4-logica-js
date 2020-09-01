// Exercício 1

const listaProjetos = []
const listaPessoas = []

//Exercício 2

const projeto1 = {
    idProjeto: '1',
    tituloProjeto: 'Semana 04',
    descricaoProjeto: 'exercicio da semana',
    pessoasResponsavel: [{idPessoa: 123, nome: "Yasmin", setor:"tecnologia"},{idPessoa: 987, nome: "Larissa", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: 345, nome: "Andreza", }]
}

function addProjetos(projeto) {
    listaProjetos.push(projeto1)
    return listaProjetos
}

console.log(addProjetos())

//teste de mudança