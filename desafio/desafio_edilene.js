//Exercicio 1

const listaDeProjetos = [];

// Exercício 2

const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Semana 04',
  descricaoDoProjeto: 'exercicio da semana',
  pessoasResponsaveis: [
    { idPessoa: 123, nome: 'Edilene', setor: 'tecnologia' },
    { idPessoa: 1804, nome: 'Pedro', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 548, nome: 'Andreza', setor: 'tecnologia' },
  ],
  dataInicio: '29/08/2020',
  statusDoProjeto: 'em andamento',
};

const projeto2 = {
  idProjeto: 2,
  tituloDoProjeto: 'Teste aprendizado',
  descricaoDoProjeto: 'testando o conteúdo apresentado',
  pessoasResponsaveis: [{ idPessoa: 541, nome: 'Steve', setor: 'marketing' }],
  pessoasColaboradoras: [
    { idPessoa: 238, nome: 'Rafaela', setor: 'marketing' },
    { idPessoa: 897, nome: 'Helena', setor: 'pessoas' },
    { idPessoa: 123, nome: 'Edilene', setor: 'tecnologia' },
  ],
  dataInicio: '18/04/2020',
  statusDoProjeto: 'encerrado',
};

const projeto3 = {
  idProjeto: 3,
  tituloDoProjeto: 'Cálculos financeiros',
  descricaoDoProjeto: 'Ajuda nos cálculos de rendimentos financeiros',
  pessoasResponsaveis: [
    { idPessoa: 897, nome: 'Helena', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Amaury', setor: 'financeiro' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 893, nome: 'Fabiola', setor: 'marketing' },
  ],
  dataInicio: '15/03/2020',
  statusDoProjeto: 'em andamento',
};


// Exercício 3
console.log("Exe 3")
function adicionaProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada



// Exercicio 4
console.log("Exe 4")

function listarProjetos() {
  // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
  return listaDeProjetos;
}

console.log(listarProjetos());

// Exercicio 5
console.log("Exe 5")

function posicaoDoProjeto(posicao) {
  if (listaDeProjetos[posicao] === undefined) {
    return `Projeto não encontrado`;
  } else {
    return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} 
    e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`;
  }
}

console.log(posicaoDoProjeto(1)); // retorna projeto2
console.log(posicaoDoProjeto(2)); // retorna projeto3
console.log(posicaoDoProjeto(999)); // retorna Projeto não encontrado

// Exercicio 6
console.log("Exe 6")

function totalDeProjetos() {
  let objetos = listaDeProjetos.length;
  let plural = 'projetos cadastrados';
  let singular = 'projeto cadastrado';

  if (objetos > 1) {
    return `Temos o total de ${objetos} ${plural}`;
  } else {
    return `Temos o total de ${objetos} ${singular}`;
  }
}

console.log(totalDeProjetos()); // retorna 3

// Exercicio 7
console.log("Exe 7")

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

console.log(buscarProjeto(2)); // retorna projeto2
console.log(buscarProjeto(999)); // retorna a mensagem

// Exercicio 8
console.log("Exe 8")

function exibirResponsavel(idProjeto, idPessoa) {
  let proj = buscarProjeto(idProjeto);
  let responsavel = proj.pessoasResponsaveis.find(function (responsavel) {
    return responsavel.idPessoa === idPessoa;
  });
  
  if (responsavel !== undefined){
    return true;
  }else {
    return false;
  }
}

console.log(exibirResponsavel(2, 999));
console.log(exibirResponsavel(2, 541));
console.log("---------------------------------------")


//Exercício 9
console.log("Exe 9")

function autorizarEdicao(idProjeto, idPessoa,statusDoProjeto){
  let funcaoExercicio7 = buscarProjeto(idProjeto)
  let funcaoExercicio8 = exibirResponsavel(idProjeto, idPessoa)
  
  if(funcaoExercicio7 === "Projeto não encontrado"){
    return "ID não existe";
  } else if(funcaoExercicio8 === false) {
     return "Você não tem autorização para alterar este projeto!";
  } else if(statusDoProjeto === "Encerrado") {
    return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto}
    já foi encerrado e não pode ser editado!`
  } else {
    return "Permissão concedida";
  }
      
}

console.log(autorizarEdicao(1, 898, "em andamento"));


// Exercicio 10
console.log("Exe 10")

function modificando(idProjeto, idPessoa){
  
  let funcaoExercicio7 = buscarProjeto(idProjeto)
  let funcaoExercicio8 = exibirResponsavel(idProjeto, idPessoa)

  if(funcaoExercicio7 === "Projeto não encontrado"){
    return "Id não existe!"
  } else if(funcaoExercicio8 === false){
      return "Você não tem autorização para alterar esse projeto"
  } else {
    if(listaDeProjetos[idProjeto-1].statusDoProjeto === "em andamento"){
      listaDeProjetos[idProjeto-1].statusDoProjeto = "encerrado"
        return `Projeto ${listaDeProjetos[idProjeto-1].tituloDoProjeto} encerrado`
  } else {
    return "Projeto já estava encerrado"
  }
  }
}

console.log(modificando(3, 897))
