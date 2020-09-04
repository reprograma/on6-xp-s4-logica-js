//Exercicio 1

const listaDeProjetos = [];

//Exercicio 2

const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Semana 04',
  descricaoDoProjeto: 'exercicio da semana',
  pessoasResponsaveis: [
    { idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia' },
    { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Andreza', setor: 'tecnologia' },
  ],
  dataInicio: '29/08/2020',
  statusDoProjeto: 'em andamento',
};
const projeto2 = {
  idProjeto: 2,
  tituloDoProjeto: 'Noticias Boas',
  descricaoDoProjeto: 'site para mostrar somente noticias positivas',
  pessoasResponsaveis: [{ idPessoa: 589, nome: 'Laura', setor: 'marketing' }],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Felipe', setor: 'marketing' },
    { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },
  ],
  dataInicio: '23/07/2020',
  statusDoProjeto: 'encerrado',
};
const projeto3 = {
  idProjeto: 3,
  tituloDoProjeto: 'Atendo em Libras',
  descricaoDoProjeto:
    'projeto para conectar profissionais de saúde a pessoas surdas',
  pessoasResponsaveis: [
    { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 893, nome: 'Fabiola', setor: 'marketing' },
  ],
  dataInicio: '15/03/2020',
  statusDoProjeto: 'em andamento',
};

//Exercicio 3

function adicionaProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}
console.log(listaDeProjetos, 'Lista de projetos vazia');
adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada
console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');

//Exercicio 4

function listarProjetos() {
  return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
}

console.log(listarProjetos());

//Exercicio 5

function posicaoDoProjeto(posicao) {
  if (listaDeProjetos[posicao] === undefined) {
    return `Projeto não encontrado`;
  } else {
    return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`;
  }
}
console.log(posicaoDoProjeto(0));
console.log(posicaoDoProjeto(2));
console.log(posicaoDoProjeto(999));

//Exercicio 6

function totalDeProjetos() {
  let objetos = listaDeProjetos.length;
  if (objetos > 1) {
    return `Temos o total de ${objetos} projetos cadastrados`;
  } else {
    return `Temos o total de ${objetos} projeto cadastrado`;
  }
}
console.log(totalDeProjetos());

//Exercicio 7
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
console.log(buscarProjeto(3))
console.log(buscarProjeto(999))

//Exercicio 8

function mostrarResponsavel(idProjeto, idPessoa) {
  let projeto = buscarProjeto(idProjeto);
  let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) { //filter
    return responsavel.idPessoa === idPessoa;
  });
  if (responsavel !== undefined) {
    return true;
  } else {
    return false;
  }

}

console.log(mostrarResponsavel(2, 589)); 
console.log(mostrarResponsavel(2, 111));

//Exercicio 9


function autorizarAlteracao(idProjeto, idPessoa, statusDoProjeto) {

  let funcaoExercicio7 = buscarProjeto(idProjeto)
  let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

  if (funcaoExercicio7 === 'Projeto não encontrado') {
    return 'ID não existe';
  } else if (funcaoExercicio8 === false) {
    return 'Você não tem autorização para alterar este projeto!';
  } else if (statusDoProjeto === "Encerrado") {
    return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado!`
  } else {
    return 'Permissão concedida';
  }
}

console.log(autorizarAlteracao(1, 123, 0))

//Exercicio 10

function modificando(idProjeto, idPessoa) {

  let funcaoExercicio7 = buscarProjeto(idProjeto)
  let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

  if (funcaoExercicio7 === 'Projeto não encontrado') {
    return 'ID não existe';
  } else if (funcaoExercicio8 === false) {
    return 'Você não tem autorização para alterar este projeto';
  } else {
    if (listaDeProjetos[idProjeto - 1].statusDoProjeto === 'em andamento') {
      listaDeProjetos[idProjeto - 1].statusDoProjeto = 'Encerrado'
      return `Projeto ${listaDeProjetos[idProjeto - 1].tituloDoProjeto} encerrado`
    } else {
      return 'Projeto já encerrado'
    }
  }
}

console.log(modificando(3, 132));
console.log(listaDeProjetos);

