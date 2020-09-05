//1

const listaDeProjetos = [];

//2
const projeto1 = {
  idDoProjeto: 1010,

  tituloDoProjeto: "Home do site",

  descriçãoDoProjeto: "Elaboração da página home do site",

  pessoasResponsaveis: [
    { idPessoa: "Gerente1", nomePessoa: "Simba", setor: "Gerência" },
    { idPessoa: "Gerente2", nomePessoa: "Mufasa", setor: "Gerência" },
  ],

  pessoasColaboradoras: [
    { idPessoa: "Colab1", nomePessoa: "Nala", setor: "Desenvolvimento" },
    { idPessoa: "Colab2", nomePessoa: "Timão", setor: "Desenvolvimento" },
    { idPessoa: "Colab3", nomePessoa: "Pumba", setor: "Desenvolvimento" },
    { idPessoa: "Colab4", nomePessoa: "Sven", setor: "Administrativo" },
  ],

  dataInicio: "01/09/2020",

  statusDoProjeto: "em andamento",
};
const projeto2 = {
  idDoProjeto: 1011,

  tituloDoProjeto: "Fale conosco do site",

  descriçãoDoProjeto: "Elaboração da página fale conosco do site",

  pessoasResponsaveis: [
    { idPessoa: "Gerente1", nomePessoa: "Anna", setor: "Gerência" },
    { idPessoa: "Gerente2", nomePessoa: "Elsa", setor: "Gerência" },
  ],

  pessoasColaboradoras: [
    { idPessoa: "Colab1", nomePessoa: "Olaf", setor: "Desenvolvimento" },
    { idPessoa: "Colab2", nomePessoa: "Hans", setor: "Vendas" },
    { idPessoa: "Colab3", nomePessoa: "Kristoff", setor: "Desenvolvimento" },
  ],

  dataInicio: "01/09/2020",

  statusDoProjeto: "em andamento",
};
const projeto3 = {
  idDoProjeto: 1012,

  tituloDoProjeto: "Layout Site",

  descriçãoDoProjeto: "Elaboração do layout para o novo site",

  pessoasResponsaveis: [
    { idPessoa: "Gerente1", nomePessoa: "Lilo", setor: "Gerência" },
    { idPessoa: "Gerente2", nomePessoa: "Stitch", setor: "Gerência" },
  ],

  pessoasColaboradoras: [
    { idPessoa: "Colab1", nomePessoa: "Nani", setor: "Design" },
    { idPessoa: "Colab2", nomePessoa: "David", setor: "Design" },
    { idPessoa: "Colab3", nomePessoa: "Gantu", setor: "Design" },
  ],

  dataInicio: "01/09/2020",

  statusDoProjeto: "em andamento",
};

//3
function adicionarProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}
adicionarProjeto(projeto1);
adicionarProjeto(projeto2);
adicionarProjeto(projeto3);
console.log(listaDeProjetos);

//4

function listarProjetos() {
  return `Lista de projetos ${JSON.stringify(listaDeProjetos)}`;
}

console.log(listarProjetos());

//5

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

//6

function totalDeProjetos() {
  let objetos = listaDeProjetos.length;
  let plural = "projetos cadastrados";
  let singular = "projeto cadastrado";

  if (objetos > 1) {
    return `Temos o total de ${objetos} ${plural}`;
  } else {
    return `Temos o total de ${objetos} ${singular}`;
  }
}

console.log(totalDeProjetos());

//7

function buscarProjeto(idDoProjeto) {
  let projetoEncontrado = listaDeProjetos.find(function (projeto) {
    return projeto.idDoProjeto === idDoProjeto;
  });
  if (
    projetoEncontrado !== undefined &&
    projetoEncontrado !== null
  ) {
    return projetoEncontrado;
  } else {
    return `Projeto não encontrado`;
  }
}

console.log(buscarProjeto(2));

//8
function mostrarResponsavel(idDoProjeto, idPessoa) {
  console.log(idDoProjeto, idPessoa)
  let projeto = buscarProjeto(idDoProjeto);
  console.log(projeto)
  console.log(projeto.pessoasResponsaveis)
  let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) {
    return responsavel.idPessoa === idPessoa;
  });
  if (
    responsavel !== undefined &&
    responsavel!== null
  ) {
    return responsavel;
  } else {
    return `Responsável não encontrado`;
  }
}

console.log(mostrarResponsavel(1010, "Gerente1"));


function existeProjeto(projeto, pessoa) {
  let funcaoExercicio7 = acharId(projeto);

  if (funcaoExercicio7 === "Projeto nao encontrado") {
    return false;
  } else {
    let validarIdPessoa = funcaoExercicio7.pessoasResponsaveis.filter(
      (item) => item.idPessoa === pessoa
    );

    if (validarIdPessoa.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

//9

function autorizarAlteracao(idDoProjeto, idPessoa, statusDoProjeto) {
  let funcaoExercicio7 = buscarProjeto(idDoProjeto);
  let funcaoExercicio8 = mostrarResponsavel(idDoProjeto, idPessoa);

  if (funcaoExercicio7 === "Projeto não encontrado") {
    return "ID não existe";
  } else if (funcaoExercicio8 === false) {
    return "Você não tem autorização para alterar este projeto!";
  } else if (statusDoProjeto === "Encerrado") {
    return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado!`;
  } else {
    return "Permissão concedida";
  }
}

autorizarAlteracao(1010, "Colab1", "Em andamento")
