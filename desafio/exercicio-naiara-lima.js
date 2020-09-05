//Tudo feito com ajuda e muitas lágrimas! #socorro


// Exercicio 1

const listaDeProjetos = []

// Exercício 2
// natura - toyota - mastercard (projetos)

const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Natura',
  descricaoDoProjeto: 'Comercial para o novo perfume',
  pessoasResponsaveis: [{ idPessoa: 123, nome: 'Clara', setor: 'post-production' }, { idPessoa: 380, nome: 'Naiara', setor: 'pauta-comp' }],
  pessoasColaboradoras: [{ idPessoa: 456, nome: 'Leandro', setor: 'lead-comp' }],
  dataInicio: '29/08/2020',
  statusDoProjeto: 'em andamento',
}

const projeto2 = {
  idProjeto: 2,
  tituloDoProjeto: 'Toyota',
  descricaoDoProjeto: 'Comercial novo carro',
  pessoasResponsaveis: [{ idPessoa: 123, nome: 'Clara', setor: 'post-production' }, { idPessoa: 380, nome: 'Naiara', setor: 'pauta-comp' }],
  pessoasColaboradoras: [{ idPessoa: 789, nome: 'Binho', setor: 'lead-pós' }],
  dataInicio: '15/09/2020',
  statusDoProjeto: 'em espera',
}

const projeto3 = {
  idProjeto: 3,
  tituloDoProjeto: 'MasterCard',
  descricaoDoProjeto: 'Comercial varejo',
  pessoasResponsaveis: [{ idPessoa: 321, nome: 'Rosangela', setor: 'post-2D' }, { idPessoa: 380, nome: 'Naiara', setor: 'pauta-comp' }],
  pessoasColaboradoras: [{ idPessoa: 654, nome: 'Carlos', setor: 'composicao' }],
  dataInicio: '24/08/2020',
  statusDoProjeto: 'encerrado',
}

// Exercício 3

function adProjeto(projeto) {
  return listaDeProjetos.push(projeto)
}
console.log(listaDeProjetos, 'Lista de projetos vazia')

adProjeto(projeto1)
adProjeto(projeto2)
adProjeto(projeto3)

console.log(listaDeProjetos, 'Lista de projetos com três projetos')

//exercicio 4

function listarProjetos() {
  return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}` // usar json.stringify pq o java não reconhece os dados.
}
console.log(listarProjetos())


// //exercicio 5
console.log('Posição dos projetos: ')

function posicaoProjeto(posicao) {
  if (listaDeProjetos[posicao] === undefined) {
    return `Projeto não econtrado`
  } else {
    return `O projeto ${listaDeProjetos[posicao].tituloDoProjeto} está na posição ${listaDeProjetos[posicao].idProjeto} com status ${listaDeProjetos[posicao].statusDoProjeto}`;
  }
}
console.log(posicaoProjeto(0));
console.log(posicaoProjeto(1));
console.log(posicaoProjeto(2));
console.log(posicaoProjeto(3))



// //exercicio 6

console.log('total de projetos')

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




//exercicio 7
console.log('Buscar projeto')

function buscarProjeto(idProjeto) {

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
console.log(buscarProjeto(999)); // retorna projeto não encontrado


// exercicio 8
console.log("mostrar responsável")

function mostrarResponsavel(idProjeto, idPessoa) {
  let projeto = buscarProjeto(idProjeto);
  //let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel) {
    let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) {
    return responsavel.idPessoa === idPessoa;
  });

  if (responsavel !== undefined) {
  //if (responsavel === undefined) {  
    return true;
    //return false;
  } else {
    return false;
    //return true;
  }
}

console.log(mostrarResponsavel(3, 321));
console.log(mostrarResponsavel(1, 666));
//mostrarResponsavel(idProjeto, idPessoa)



// exercicio 9

console.log(" ex9 modificar projeto")

function autorizaAlterar(idProjeto, idPessoa, statusDoProjeto) {

  let funcaoEx7 = buscarProjeto(idProjeto)
  let funcaoEx8 = mostrarResponsavel(idProjeto, idPessoa)

  if (funcaoEx7 === "Projeto nao encontrado") {
    return "ID não existe";
  } else if (funcaoEx8 === false) {
    return "Você não tem autorização para alterar este projeto!.";
  } else if (statusDoProjeto === "Encerrado") {
    return `O projeto ${listaDeProjetos[projeto].tituloProjeto} já foi encerrado e não pode ser editado!`
  } else {
    return "Permissão concedida";
  }
}

console.log(autorizaAlterar(1, 123, 'em andamento'))
//console.log(autorizaAlterar(3, 654,))


// ///resolução alternativa que NÃO ATENDE À QUESTÃO

// function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto) {

//   let funcaoExercicio7 = buscarProjeto(idProjeto)
//   let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

//   if (funcaoExercicio7 !== 'Projeto não encontrado' && funcaoExercicio8 === true && statusDoProjeto === 'em andamento') {
//       return 'Permissão concedida';
//   } else {
//       return 'Permissão negada'
//   }
// }



// exercicio 10

console.log("ex 10 alterar projeto")

function modificar(idProjeto, idPessoa) {

  let funcaoEx7 = buscarProjeto(idProjeto)
  let funcaoEx8 = mostrarResponsavel(idProjeto, idPessoa)

  if (funcaoEx7 === "Projeto nao encontrado"){
      return "Id não existe";
  } else  if (funcaoEx8 === false) {
      return "Você não tem autorização para alterar este projeto!"
  }  else {
      if (listaDeProjetos[idProjeto - 1].statusDoProjeto === 'em andamento'){
          listaDeProjetos[idProjeto - 1].statusDoProjeto = 'encerrado'
          return `Projeto ${listaDeProjetos[idProjeto - 1].tituloDoProjeto} encerrado.`
      } else {
          return "Projeto já encerrado"
      }
  }

}
console.log(modificar(1, 123))
//console.log(listaDeProjetos[1])



