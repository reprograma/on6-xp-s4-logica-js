// Exercicio 1

const listaDeProjetos = []


const projeto1 = {

    idProjeto : 1 ,
    tituloDoProjeto : "Semana 04",
    descricaoDoProjeto : 'exercico da semana',
    pessoasResponsaveis : [
        {idPessoa : 123, nome: "Yasmin", setor : ' tecnologia'}, {idPessoa : 987, nome: "Larissa", setor : ' tecnologia'},],
    pessoasColaboradoras: [{}],
    dataInicio : '29/08/2020',
    statusDoProjeto : ' em andamento'
    
}

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)

}
console.log(listaDeProjetos)
adicionaProjeto(projeto1)

console.log(listaDeProjetos,'Lista de projeto com um projeto')