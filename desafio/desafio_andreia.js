//array []-----
//objeto{}----
// ------------------------------Exercicio 1!
const listaDeProjetos = []
//--------------------------------------------
//-------------------------------Exercicios 2!
const projeto1 = {
    idProjeto: 1,
    tituloProjeto: 'Reprograma1',
    descricaoProjeto: 'exercicio da semana4',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Andreia', setor: 'TI'},
                          {idPessoa: 456, nome: 'Rosa',setor:'tecnologia'}],
                         pessoasColaboradores: [{idPessoa: 789, nome: 'Amanda', setor: 'tecnologia'}],
                         datainicio: '29/08/2020',
                         statusProjeto: 'em andamento'

}
const projeto2 = {
    idProjeto: 2,
    tituloProjeto: 'Reprograma2',
    descricaoProjeto: 'exercicio da semana4',
    pessoasResponsaveis: [{idPessoa: 001, nome: 'Rosa', setor: 'TI'},
                          {idPessoa: 002, nome: 'Thalia',setor:'tecnologia'}],
                         pessoasColaboradores: [{idPessoa: 100, nome: 'Fernanda', setor: 'tecnologia'}],
                         datainicio: '28/08/2020',
                         statusProjeto: 'em andamento'

}
const projeto3 = {
    idProjeto: 3,
    tituloProjeto: 'Reprograma3',
    descricaoProjeto: 'exercicio da semana4',
    pessoasResponsaveis: [{idPessoa: 010, nome: 'Nicolas', setor: 'TI'},
                          {idPessoa: 020, nome: 'Whitney',setor:'tecnologia'}],
                         pessoasColaboradores: [{idPessoa: 101, nome: 'Fernando', setor: 'tecnologia'}],
                         datainicio: '27/08/2020',
                         statusProjeto: 'encerrado'

}
//-----------------------------------------Exercicio 3!
function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)    
}
adicionaProjeto(projeto1)
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)
console.log(listaDeProjetos, '\n--------')


//-----------------------------------------Exercicio 4-OK!
function listaDeProjetosCadastrados(listadecadastrados) {
    return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`   
    //return listaDeProjetos
      
}
console.log(listaDeProjetosCadastrados())

//-----------------------------------------Exercicio 5-OK!
function mostraProjeto(posicao) {
    if (listaDeProjetos [posicao] === undefined ) {
        return "Projeto não encontrado!"
    }
    return `O ${listaDeProjetos[posicao].tituloProjeto} está na posição ${posicao} e seu status 
              ${listaDeProjetos[posicao].statusProjeto};`    
}
console.log(mostraProjeto(0))
console.log(mostraProjeto(2))
//console.log(mostraProjeto(20)) --- TESTE para projeto não encontrado

//-----------------------------------------Exercicio 6-OK!
function totalProjetos(total) {
    return `Temos ${[listaDeProjetos.length]} projetos cadastrados!`    
}
console.log(totalProjetos())

/*function totaldeProjetos(){
    let objetos = listaDeProjetos.length
    let plural = 'projetos cadstados'
    let singular = 'projeto cadastrado

    if(objeto > 1){
        return `Temos o total de ${objeto} ${plural}`

    }else{
        return `Temos o total de ${objeto} ${singular}`;
    }
}
console.log(totalProjetos())
}*/

//------------------------------------------Exercicio 7
//atribui a variavel projetoEncontrado o retorno do filtro
//projto é cada posição do array que o filtro vai crescer para buscar nossa condição
//return é o resultado da nossa condição
function buscarProjeto(idProjeto) {
    let projetoEncontrado = listaDeProjetos.filter(function(projeto){
        return projeto.idProjeto === idProjeto
    });

    //return projetoEncontrado
    if (projetoEncontrado !== undefined) {
        return projetoEncontrado
    }else{
        return `Projeto não encontrado`
    }
}
    //if (idProjeto === idProjeto) {        
    //    return "Projeto encontrado!"        
    //}
    //return `Projeto não encontrado!`    

console.log(buscarProjeto(3)) //retorna projeto3

//--------------------------------------------------------Exe8
function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto)
    let responsavel = projeto.find(function (responsavel) {
       return responsavel.idPessoa === idPessoa 
    });
    
    //return responsavel 
    if (responsavel !== undefined) {
        return true        
    } else{
        return false
    }      
    
}
console.log(mostrarResponsavel(123))
console.log(mostrarResponsavel(010))

//-------------------------------------------------------------Exe9
function autorizarAlteracao(idProjeto, idPessoa, statusProjeto) {
    let exe7 = mostraProjeto(idProjeto)
    let exe8 = mostrarResponsavel(idProjeto, idPessoa)

    if (exe7 === 'Projeto não encontrado') {
        return 'ID não existe'
    }else if (exe8 === false) {
        return 'Você não tem autorização para alterar este projeto!'
    }else if (statusProjeto === 'encerrado') {
        return `O projeto ${listaDeProjetos[projeto].tituloProjeto} já foi encerrado e não pode ser editado!` 
    }else{
        return 'Permissão concedida';
    }
    
}
console.log(autorizarAlteracao(1, 444, 'encerrado'))

//----------------------------------------------------Exer10
function modificandoProjeto(idProjeto, idPessoa) {

    let exe7 = mostraProjeto(idProjeto)
    let exe8 = mostrarResponsavel(idProjeto, idPessoa)

    if (exe7 === 'Projeto não encontrado') {
        return 'Id não existe!';        
    }else if (exe8 === false) {
        return 'Você não tem autorização para "Alter Project"!!!'
    }else if(listaDeProjetos[idProjeto -1].statusProjeto === 'em andamento' && listaDeProjetos[idProjeto -1].statusProjeto === "encerrado" ){
                return `Projeto ${listaDeProjetos[idProjeto -1].tituloProjeto} encerrado`
        }else{
            return 'Projeto já encerrado'
        }    
        
        
}   
   

console.log(modificandoProjeto(2,01111))














/**function queroModificar(projeto, pessoa) {

    let funcaoExercicio7 = acharId(projeto) 
    let funcaoExercicio8 = existeProjeto(projeto, pessoa)

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return "ID Inválido"
    } else  if (!funcaoExercicio8) {
        return "Você não tem autorização para alterar este projeto!"
    }  else {

        if (listaDeProjetos[projeto -1].statusDoProjeto === "Em andamento") {
            listaDeProjetos[projeto -1].statusDoProjeto = "Encerrado" 
            return `Projeto ${listaDeProjetos[projeto -1].tituloProjeto} encerrado.`
        } else {
            return "Esse projeto já foi encerrado anteriormente."
        }
    }
        
}

console.log(queroModificar(1, 123)) */

