// Exercicio 1

const listaDeProjetos = [];

// Exercício 2

const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Semana 04',
  descricaoDoProjeto: 'exercicio da semana',
  pessoasResponsaveis: [
    { idPessoa: 123, nome: 'Raphaela', setor: 'tecnologia' },
    { idPessoa: 987, nome: 'Claudia', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Diego', setor: 'tecnologia' },
  ],
  dataInicio: '29/08/2020',
  statusDoProjeto: 'em andamento',
};

const projeto2 = {
  idProjeto: 2,
  tituloDoProjeto: 'Noticias',
  descricaoDoProjeto: 'site para mostrar somente noticias do estado de SP',
  pessoasResponsaveis: [{ idPessoa: 589, nome: 'Laura', setor: 'marketing' }],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Paulo', setor: 'marketing' },
    { idPessoa: 765, nome: 'Shirley', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Paula', setor: 'tecnologia' },
  ],
  dataInicio: '23/07/2020',
  statusDoProjeto: 'encerrado',
};

const projeto3 = {
  idProjeto: 3,
  tituloDoProjeto: 'Corte e Costura',
  descricaoDoProjeto:
    'projeto para conectar profissionais da moda a pessoas interessadas',
  pessoasResponsaveis: [
    { idPessoa: 765, nome: 'Shirley', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Paula', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 893, nome: 'Pedro', setor: 'marketing' },
  ],
  dataInicio: '15/03/2020',
  statusDoProjeto: 'em andamento',
};

// Exercício 3

function adicionaProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');
console.log("__________________________________")

// Exercicio 4

function listarProjetos() {
  // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
  return listaDeProjetos;
}

console.log(listarProjetos());
console.log("__________________________________")

// Exercicio 5

function posicaoDoProjeto(posicao) {
  if (listaDeProjetos[posicao] === undefined) {
    return `Projeto não encontrado`;
  } else {
    return `O projeto "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`;
  }
}

console.log(posicaoDoProjeto(0)); // retorna projeto1
console.log(posicaoDoProjeto(2)); // retorna projeto3
console.log(posicaoDoProjeto(999)); // retorna Projeto não encontrado
console.log("__________________________________")

// Exercicio 6

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
console.log("__________________________________")

// Exercicio 7

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

console.log(buscarProjeto(3)); // retorna projeto3
console.log(buscarProjeto(999)); // retorna a mensagem
console.log("__________________________________")

//Exercicio 8

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);

    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel) {
      return responsavel.idPessoa === idPessoa;
    });
  
    if (responsavel === undefined) {

      return false;

    } else {

      return true;
    }
  }
  
  console.log(mostrarResponsavel(3, 785858));
  console.log(mostrarResponsavel(1, 666));
console.log("__________________________________")

//Exercicio 9
function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto) {
    let projetoNaoEncontrado = buscarProjeto(idProjeto)
    let responsavelNaoPermitido = mostrarResponsavel(idProjeto, idPessoa)

    if (projetoNaoEncontrado === `Projeto não encontrado`) {
        return `Id inválido`
    } else if (!responsavelNaoPermitido) {
        return `Você não tem autorização para alterar este projeto!`
    } else if (statusDoProjeto === 'encerrado') {
        return `O projeto "${listaDeProjetos[projeto].tituloProjeto}" já foi encerrado e não pode ser editado!`
    } else {
     return `Permissão para alteração concedida!`
    }
}

console.log(autorizarAlteracao(3, 132, 'em andamento'))
console.log(autorizarAlteracao(1, 123))
console.log("__________________________________")

// Ex 10

function Modificar(idProjeto, idPessoa) {

    let projetoNaoEncontrado = buscarProjeto(idProjeto)
    let responsavelNaoPermitido = mostrarResponsavel(idProjeto, idPessoa)
  
    if (projetoNaoEncontrado === `Projeto não encontrado`) {
        return "ID Inválido"
    } else  if (!responsavelNaoPermitido) {
        return "Você não tem autorização para alterar este projeto!"
    }  else {
        if (listaDeProjetos.statusDoProjeto !== 'em andamento') {
            return ` O Projeto ${listaDeProjetos.tituloProjeto} já foi encerrado.`
        } else {
            return `O status do projeto foi modificado de "em andamento" para "encerrado"`
        }
    }
  
  }
  
  console.log(Modificar(2, 345))