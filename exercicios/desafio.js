//Exercicio 1

const listaProjetos = []

// Exercicio 2

const projeto1 = {
    idProjeto: 1, 
    titleProjeto: 'Semana 4',
    descricaoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Shaiene', setor: 'Marketing'}, {idPessoa: 987, nome: 'Raíza', setor: 'Marketing'}],
    colaboradores: [{idPessoa:345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/20',
    statusProjeto: 'em andamento'
} 

function adicionaProjeto(projeto){
    return listaProjetos.push(projeto)
}
console.log(listaProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1)

console.log(listaProjetos, 'Lista de projetos com um projeto')

//Exercicio 3

