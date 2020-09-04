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

const projeto2 = {
    idProjeto: 2, 
    tituloDoProjeto: 'Dev para Criancas', 
    descricaoDoProjeto: 'inserindo a programacao',
    pessoasResponsaveis:[{idPessoa: 589, nome: 'Camila', setor: 'educacao'}, {idPessoa: 156 , nome: 'Mayara', setor: 'educacao'}],
    pessoasColaboradoras: [{idPessoa: 192, nome: 'Jeilla', setor: 'educacao'}, {idPessoa: 666, nome: 'Renata', setor: 'educacao'}],
    dataInicio: '31/08/2020',
    statusDoProjeto: 'a iniciar'

}

const projeto3 = {
    idProjeto: 3, 
    tituloDoProjeto: 'Iot em Petróleo',
    descricaoDoProjeto: 'Internet das Coisas no setor de petróleo',
    pessoasResponsaveis: [{idPessoa: 555, nome:'Bu', setor: 'petroleo'}, {idPessoa: 890, nome: 'Yuri', setor: 'petroleo'}],
    pessoasColaboradoras: [{idPessoa: 347, nome: 'Ramon', setor: 'petroleo'}, {idPessoa: 456, nome: 'Cauam', setor: 'petroleo'}],
    dataInicio: '01/09/2020',
    statusDoProjeto: 'encerrado'
}
// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES


// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2) // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3) // adiciona o projeto3 a lista de projetos utilizando a função criada

console.log(listaDeProjetos, 'Lista de projetos com um projeto')

//Exercício 4

function listarProjetos(){
    return `Lista de Projetos: ${JSON.stringify(listaDeProjetos)}`;
}
console.log(listarProjetos());

//Exercício 5
function posicaoDoProjeto(posicao){
    if(listaDeProjetos[posicao] === undefined){
        return `Projeto não encontrado`;

    }else{
        return`O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é " ${listaDeProjetos[posicao].statusDoProjeto}"` 
    }
}
console.log(posicaoDoProjeto(0))//retorna o projeto1
console.log(posicaoDoProjeto(2))//retorna o projeto3
console.log(posicaoDoProjeto(999))// retorna projeto não encontrado

//Exercício 6
function totalDeProjetos(){
    let objetos = listaDeProjetos.length;
    let plural = 'projetos cadastrados';
    let singular = 'projeto cadastrado';

    if(objetos > 1){
        return `Temos o total de ${objetos} ${plural}`;
    }else{
        return `Temos o total de ${objetos} ${singular}`;

    }
}
console.log(totalDeProjetos());

//Exercício 7
function buscarProjeto(idProjeto){

    let projetoEncontrado = listaDeProjetos.find(function(projeto) {
        return projeto.idProjeto === idProjeto;
    });
        if(projetoEncontrado !== undefined){
            return projetoEncontrado;
        }else{
            return `Projeto não encontrado`;
        }
}

console.log(buscarProjeto(2)) //retorna o projeto2
console.log(buscarProjeto(99))// retorna a mensagem

//Exercício 8

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.find(function(responsavel) {
      return responsavel.idPessoa === idPessoa;
    });
  
    if(responsavel!== undefined){
        return true;
    }else{
        return false;
    }
  }
  
  console.log(mostrarResponsavel(3, 555));//true
  console.log(mostrarResponsavel(1, 999)); //false

  //Exercício 9
  function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto){

    let funcaoexercicio7 = buscarProjeto(idProjeto)
    let funcaoexercicio8 = mostrarResponsavel(idProjeto , idPessoa)

    if(funcaoexercicio7 === "Projeto não encontrado"){
        return 'ID não existe';
    }else if(funcaoexercicio8 === false){
        return 'Voce nao tem autorizacao para alterar este projeto!';
    } else if(statusDoProjeto === 'Encerrado'){
        return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado`
    } else{
        return 'Permissão concedida';

    }
}
console.log(autorizarAlteracao(1,123, 'em andamento'))

//Exercício 10 

function modificando(idProjeto, idPessoa){

    let funcaoexercicio7 = buscarProjeto(idProjeto)
    let funcaoexercicio8 = mostrarResponsavel(idProjeto , idPessoa)

    if(funcaoexercicio7 === "Projeto não encontrado"){
        return 'ID não existe';
    
    }else if(funcaoexercicio8 === false){
        return 'Voce nao tem autorizacao para alterar este projeto!';
    } else {
        if(listaDeProjetos[idProjeto -1].statusDoProjeto === 'em andamento'){
            listaDeProjetos[idProjeto -1].statusDoProjeto = "Encerrado"
            return `Projeto ${listaDeProjetos[idProjeto -1].tituloDoProjeto} encerrado`
        }else{
            return `Projeto já encerrado`
        }
    }
}
console.log(modificando(1,123))